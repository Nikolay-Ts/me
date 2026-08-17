/* Minimal markdown renderer + frontmatter parser.
   Deliberately small: only the subset used by the content files under assets/.
   No dependencies, so it still works as a plain static site on GitHub Pages. */

const MD = (function () {

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* Inline: images, links, code, bold, italic. Run after escaping. */
  function inline(s) {
    return s
      .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  }

  /* Splits `---\nkey: value\n---` off the top of a document.
     Comma-separated values become arrays so `tags:` just works. */
  function frontmatter(text) {
    const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
    if (!match) return { meta: {}, body: text };

    const meta = {};
    match[1].split(/\r?\n/).forEach(function (line) {
      const sep = line.indexOf(":");
      if (sep === -1) return;
      const key = line.slice(0, sep).trim();
      const raw = line.slice(sep + 1).trim();
      if (!key) return;
      meta[key] = raw.indexOf(",") !== -1
        ? raw.split(",").map(function (v) { return v.trim(); }).filter(Boolean)
        : raw;
    });
    return { meta: meta, body: text.slice(match[0].length) };
  }

  function render(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const out = [];
    let paragraph = [];
    let listItems = [];
    let codeLines = null;

    function flushParagraph() {
      if (!paragraph.length) return;
      out.push("<p>" + inline(escapeHtml(paragraph.join(" "))) + "</p>");
      paragraph = [];
    }

    function flushList() {
      if (!listItems.length) return;
      out.push("<ul>" + listItems.map(function (li) {
        return "<li>" + inline(escapeHtml(li)) + "</li>";
      }).join("") + "</ul>");
      listItems = [];
    }

    function flushAll() {
      flushParagraph();
      flushList();
    }

    lines.forEach(function (line) {
      // Fenced code blocks swallow everything until the closing fence.
      if (/^```/.test(line.trim())) {
        if (codeLines === null) {
          flushAll();
          codeLines = [];
        } else {
          out.push('<pre class="code-sample"><code>' +
            escapeHtml(codeLines.join("\n")) + "</code></pre>");
          codeLines = null;
        }
        return;
      }
      if (codeLines !== null) {
        codeLines.push(line);
        return;
      }

      const trimmed = line.trim();

      if (!trimmed) { flushAll(); return; }

      if (/^(---|\*\*\*|___)$/.test(trimmed)) {
        flushAll();
        out.push("<hr>");
        return;
      }

      const heading = /^(#{1,6})\s+(.*)$/.exec(trimmed);
      if (heading) {
        flushAll();
        const level = heading[1].length;
        out.push("<h" + level + ">" + inline(escapeHtml(heading[2])) + "</h" + level + ">");
        return;
      }

      const item = /^[-*+]\s+(.*)$/.exec(trimmed);
      if (item) {
        flushParagraph();
        listItems.push(item[1]);
        return;
      }

      flushList();
      paragraph.push(trimmed);
    });

    if (codeLines !== null) {
      out.push('<pre class="code-sample"><code>' +
        escapeHtml(codeLines.join("\n")) + "</code></pre>");
    }
    flushAll();
    return out.join("\n");
  }

  /* Fetches a markdown file and returns { meta, html }. */
  async function load(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Could not load " + url + " (" + res.status + ")");
    const parsed = frontmatter(await res.text());
    return { meta: parsed.meta, html: render(parsed.body) };
  }

  return { render: render, frontmatter: frontmatter, load: load, escapeHtml: escapeHtml };
})();
