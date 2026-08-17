/* Icon glyphs and window content for every desktop app. Plain data, no build step. */

const APP_ORDER = ["about", "education", "experience", "projects", "cv", "contact", "trash"];

const APPS = {
  about: {
    title: "About Me",
    width: 560,
    height: 520,
    icon: `<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#2f6fed"/>
      <circle cx="20" cy="15" r="6" fill="#fff"/>
      <path d="M8 33c0-7.2 5.4-11 12-11s12 3.8 12 11" fill="#fff"/>
    </svg>`,
    content: `
      <div class="content-prose">
        <h3>Hello!</h3>
        <p>My name is Nikolay Lachezarov Tsonev (a.k.a Nik) and I like to program and do research. The intention of
        this site is for you to be able to have a better understanding of me
        and, if you want, contact me directly.</p>

        <figure class="content-figure">
          <img src="assets/fall-back.jpg" alt="Photo of Nik bouldering">
          <figcaption>Picture of me bouldering</figcaption>
        </figure>

        <p>I am Bulgarian by nationality, but grew up in Belgium for the first
        six years and then moved to Latvia until adulthood. I speak five
        languages (Bulgarian, English, Latvian, Russian, French) and aspire
        one day to learn 10.</p>

        <h3>Hobbies</h3>

        <h4>Cooking</h4>
        <p>Since I was fourteen I loved to cook my own food. Ever since then I
        have been trying to explore beyond western cuisines and dwell more
        into eastern cuisines. My current craving has been Desi food, as I
        was recently in Pakistan.</p>
        <p>Overall, I'd say that my best dish is lasagna, since every time I
        make it for someone new, they always ask me for the recipe or for me
        to make it again for them (especially my parents).</p>
        <figure class="content-figure">
          <img src="assets/fall-back.jpg" alt="Lasagna">
        </figure>

        <br>

        <h4>Bouldering</h4>
        <p>For the last three years I have been bouldering. My top ascend was
        a v6+ (I think). My main goal would be to do a euro-trip by car with
        some friends where we would go outdoor bouldering and camping. I like
        to use the kilter board but am very bad at it. Because bouldering on
        video does not seem very cool, here is a video of my most proud
        dyno!</p>
        <figure class="content-figure">
          <img src="assets/fall-back.jpg" alt="Dyno video placeholder">
        </figure>

        <h4>Software Development</h4>
        <p>On the side, I like to build software for myself and others. On top
        of the random CLI apps that I build that no one else uses I have some
        apps that I would like to share. I mainly make android and desktop
        software which can be found in the <a href="#" data-open-app="projects">Projects</a> tab.</p>
      </div>
    `,
  },

  education: {
    title: "Education",
    width: 620,
    height: 580,
    icon: `<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#7b3ff2"/>
      <path d="M20 10 L34 16 L20 22 L6 16 Z" fill="#fff"/>
      <path d="M12 18.5V25c0 2.2 3.6 4 8 4s8-1.8 8-4v-6.5" fill="none" stroke="#fff" stroke-width="2"/>
      <line x1="34" y1="16" x2="34" y2="24" stroke="#fff" stroke-width="2"/>
    </svg>`,
    content: `
      <div class="content-prose">
        <h3>Masters</h3>
        <div class="edu-row">
          <div class="edu-text">
            <p>Currently, I am pursuing a master in informatics with a
            specialisation in parallel and distributed systems at the
            <a href="https://www.ip-paris.fr/" target="_blank" rel="noopener">Institut Polytechnique de Paris</a>.
            My main goal is to contribute positively and meaningfully to the
            research field of distributed systems. I am also interested in
            HPC simulation software and HPC for bio-informatics.</p>
          </div>
          <div class="edu-logo-plate edu-plate-square">
            <img src="assets/education/logos/Ipp-logo.png" alt="Institut Polytechnique de Paris logo">
          </div>
        </div>

        <h3>Bachelors</h3>
        <div class="edu-row">
          <div class="edu-text">
            <p>I finished my bachelor's degree at Constructor University
            Bremen (formerly known as Jacobs University) with a BSc in
            informatics. The campus and the people there were wonderful and
            the university is ever growing. There is where I became
            passionate about distributed systems and because of the
            professors and their high quality teaching and help, was I able
            to get in the IPP. To them I will always be thankful.</p>
          </div>
          <div class="edu-logo-plate edu-plate-wide">
            <img src="assets/education/logos/Cu-logo.jpg" alt="Constructor University Bremen logo">
          </div>
        </div>

        <h3>High school</h3>
        <div class="edu-col">
          <p>I finished my highschool education at the International School
          of Riga. I graduated with a locally accredited Latvian degree and
          with the IBDP. I was awarded a prize for my high grades by the
          (then) prime minister. For those interested, my HLs were in:
          history, economics and english, and my SLs were in: mathematics,
          informatics and french. Originally I thought I would be an
          economist and last second decided to become a computer scientist
          because I like programming that much.</p>
          <div class="edu-logo-plate edu-plate-banner">
            <img src="assets/education/logos/isr-logo.png" alt="International School of Riga logo">
          </div>
        </div>
      </div>
    `,
  },

  experience: {
    title: "Experience",
    width: 440,
    height: 300,
    icon: `<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#f2903f"/>
      <rect x="8" y="17" width="24" height="14" rx="2" fill="#fff"/>
      <path d="M15 17v-3c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v3" fill="none" stroke="#fff" stroke-width="2"/>
      <line x1="8" y1="23" x2="32" y2="23" stroke="#f2903f" stroke-width="2"/>
    </svg>`,
    content: `
      <div class="content-placeholder">
        <p>Coming soon &mdash; check back later!</p>
      </div>
    `,
  },

  projects: {
    title: "Projects",
    width: 660,
    height: 620,
    icon: `<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#2fb26a"/>
      <rect x="7" y="9" width="26" height="17" rx="2" fill="#fff"/>
      <rect x="15" y="29" width="10" height="2.5" rx="1" fill="#fff"/>
      <text x="20" y="21" font-size="9" font-family="monospace" fill="#2fb26a" text-anchor="middle">&lt;/&gt;</text>
    </svg>`,
    load: loadProjects,
  },

  cv: {
    title: "Curriculum Vitae",
    width: 580,
    height: 640,
    icon: `<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#e0453f"/>
      <rect x="10" y="7" width="20" height="26" rx="2" fill="#fff"/>
      <circle cx="16" cy="15" r="3" fill="#e0453f"/>
      <line x1="21" y1="14" x2="26" y2="14" stroke="#e0453f" stroke-width="1.6"/>
      <line x1="21" y1="17" x2="26" y2="17" stroke="#e0453f" stroke-width="1.6"/>
      <line x1="12" y1="22" x2="28" y2="22" stroke="#e0453f" stroke-width="1.6"/>
      <line x1="12" y1="26" x2="28" y2="26" stroke="#e0453f" stroke-width="1.6"/>
    </svg>`,
    content: `
      <div class="content-cv">
        <iframe src="assets/CV/NLT-CV.pdf" title="Nik Tsonev CV"></iframe>
        <a class="xp-button" href="assets/CV/NLT-CV.pdf" download>Download CV</a>
      </div>
    `,
  },

  contact: {
    title: "Contact Me",
    width: 460,
    height: 480,
    icon: `<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#17a2b8"/>
      <rect x="7" y="12" width="26" height="17" rx="2" fill="#fff"/>
      <path d="M7 13l13 10 13-10" fill="none" stroke="#17a2b8" stroke-width="2"/>
    </svg>`,
    content: `
      <div class="content-prose">
        <p>If you wish to send me an email, write it here and it will be sent
        to me, or contact me directly at
        <a href="mailto:nikolay.L.tsonev@gmail.com">nikolay.L.tsonev@gmail.com</a>!</p>
        <form class="xp-form" id="contact-form">
          <label>Name
            <input type="text" name="name" required>
          </label>
          <label>Your email
            <input type="email" name="email" required>
          </label>
          <label>Message
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit" class="xp-button">Send</button>
        </form>
      </div>
    `,
  },

  trash: {
    title: "Recycle Bin",
    width: 620,
    height: 480,
    icon: `<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#8a94a6"/>
      <path d="M13 14h14l-2 18a2 2 0 0 1-2 1.8h-6A2 2 0 0 1 15 32z" fill="#fff"/>
      <rect x="11" y="11" width="18" height="2.6" rx="1.3" fill="#fff"/>
      <path d="M17 11V9.2A1.6 1.6 0 0 1 18.6 7.6h2.8A1.6 1.6 0 0 1 23 9.2V11" fill="none" stroke="#fff" stroke-width="2"/>
      <path d="M18 19v9M22 19v9" stroke="#8a94a6" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,
    load: loadTrash,
  },
};

/* ---------- Markdown-backed loaders ----------
   Both read a manifest + files from assets/, so adding content is a data change,
   not a code change. */

/* Wraps images that sit alone in a paragraph into a scrollable figure row,
   using their alt text as the caption. Lets the .md files stay plain markdown. */
function groupImageRows(container) {
  container.querySelectorAll("p").forEach(function (p) {
    const imgs = [...p.querySelectorAll("img")];
    if (!imgs.length || imgs.length !== p.childNodes.length) {
      if (!imgs.length || p.textContent.trim()) return;
    }
    if (p.textContent.trim()) return;

    const row = document.createElement("div");
    row.className = imgs.length > 1 ? "shot-row" : "content-figure single-shot";
    imgs.forEach(function (img) {
      const fig = document.createElement("figure");
      fig.appendChild(img);
      if (img.alt) {
        const cap = document.createElement("figcaption");
        cap.textContent = img.alt;
        fig.appendChild(cap);
      }
      row.appendChild(fig);
    });
    p.replaceWith(row);
  });
}

async function loadProjects() {
  const manifest = await (await fetch("assets/projects/manifest.json")).json();
  const files = manifest.projects || [];

  const loaded = await Promise.all(
    files.map(async function (file) {
      try {
        const doc = await MD.load("assets/projects/" + file);
        return { file: file, meta: doc.meta, html: doc.html };
      } catch (err) {
        return { file: file, error: err.message };
      }
    }),
  );

  const wrapper = document.createElement("div");
  wrapper.className = "content-prose";

  loaded.forEach(function (p) {
    const article = document.createElement("article");
    article.className = "project";

    if (p.error) {
      article.innerHTML =
        '<p class="load-error">Could not load ' +
        MD.escapeHtml(p.file) +
        " &mdash; " +
        MD.escapeHtml(p.error) +
        "</p>";
      wrapper.appendChild(article);
      return;
    }

    const m = p.meta;
    const tags = [].concat(m.tags || []).filter(Boolean);

    let head = '<h3 class="project-title">';
    if (m.logo) head += '<img class="project-logo" src="' + m.logo + '" alt="">';
    head += MD.escapeHtml(m.title || p.file);
    if (m.badge) {
      head +=
        ' <span class="badge' +
        (m.badgeStyle ? " badge-" + m.badgeStyle : "") +
        '">' +
        MD.escapeHtml(m.badge) +
        "</span>";
    }
    head += "</h3>";

    const tail =
      (tags.length
        ? '<ul class="tags">' +
          tags
            .map(function (t) {
              return "<li>" + MD.escapeHtml(t) + "</li>";
            })
            .join("") +
          "</ul>"
        : "") +
      (m.note ? '<p class="project-note">' + MD.escapeHtml(m.note) + "</p>" : "") +
      (m.repo
        ? '<p><a href="' + m.repo + '" target="_blank" rel="noopener">View on GitHub &rarr;</a></p>'
        : "");

    article.innerHTML = head + p.html + tail;
    groupImageRows(article);
    wrapper.appendChild(article);
  });

  return wrapper;
}

async function loadTrash() {
  const manifest = await (await fetch("assets/trash/manifest.json")).json();
  const items = (manifest.items || []).map(function (item) {
    return typeof item === "string" ? { src: item } : item;
  });

  const wrapper = document.createElement("div");
  wrapper.className = "content-prose trash-view";

  if (!items.length) {
    wrapper.innerHTML = '<div class="content-placeholder"><p>The Recycle Bin is empty.</p></div>';
    return wrapper;
  }

  wrapper.innerHTML =
    '<p class="trash-count">' +
    items.length +
    (items.length === 1 ? " item" : " items") +
    "</p>" +
    '<div class="trash-grid">' +
    items
      .map(function (item) {
        const src = /^(https?:)?\//.test(item.src) ? item.src : "assets/trash/" + item.src;
        const caption = item.caption || item.src.replace(/\.[^.]+$/, "");
        return (
          '<figure class="trash-item" tabindex="0" data-src="' +
          MD.escapeHtml(src) +
          '" data-name="' +
          MD.escapeHtml(caption) +
          '">' +
          '<div class="trash-thumb"><img src="' +
          src +
          '" alt="' +
          MD.escapeHtml(caption) +
          '" loading="lazy"></div>' +
          "<figcaption>" +
          MD.escapeHtml(caption) +
          "</figcaption></figure>"
        );
      })
      .join("") +
    "</div>";

  return wrapper;
}
