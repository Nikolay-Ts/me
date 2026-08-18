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
          <img src="assets/about-me/boulder.webp" alt="Photo of Nik bouldering">
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
        <figure class="content-figure video-figure">
          <video controls playsinline preload="metadata">
            <source src="assets/trash/big-dyno.mp4" type="video/mp4">
            <p>Your browser can&rsquo;t play this video &mdash;
            <a href="assets/trash/big-dyno.mp4" download>download it</a> instead.</p>
          </video>
          <figcaption>My proudest dyno</figcaption>
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
          <div class="edu-logo-plate edu-plate-square">
            <img src="assets/education/logos/Ipp-logo.png" alt="Institut Polytechnique de Paris logo">
          </div>

          <p>Currently, I am pursuing a master in informatics with a
          specialisation in parallel and distributed systems at the
          <a href="https://www.ip-paris.fr/" target="_blank" rel="noopener">Institut Polytechnique de Paris</a>.
          My main goal is to contribute positively and meaningfully to the
          research field of distributed systems. I am also interested in
          HPC simulation software and HPC for bio-informatics.</p>

          <p>My main goal with this degree would be to find a more specific
          area of research to focus on, and hopefully extend my studies at
          the IPP to a full PhD program &mdash; but only time will tell&hellip;</p>
        </div>

        <h3>Bachelors</h3>
        <div class="edu-row">
          <div class="edu-logo-plate edu-plate-wide">
            <img src="assets/education/logos/Cu-logo.jpg" alt="Constructor University Bremen logo">
          </div>

          <p>I finished my bachelor's degree at Constructor University
          Bremen (formerly known as Jacobs University) with a BSc in
          informatics. The campus and the people there were wonderful and
          the university is ever growing. There is where I became
          passionate about distributed systems and because of the
          professors and their high quality teaching and help, was I able
          to get in the IPP. To them I will always be thankful.</p>
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
    width: 640,
    height: 600,
    icon: `<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#f2903f"/>
      <rect x="8" y="17" width="24" height="14" rx="2" fill="#fff"/>
      <path d="M15 17v-3c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v3" fill="none" stroke="#fff" stroke-width="2"/>
      <line x1="8" y1="23" x2="32" y2="23" stroke="#f2903f" stroke-width="2"/>
    </svg>`,
    content: `
      <div class="content-prose">
        <h3>Academia</h3>

        <h4>MEVIS</h4>
        <p>I wrote my bachelor thesis in collaboration with
        <a href="https://www.mevis.fraunhofer.de/" target="_blank" rel="noopener">MEVIS Fraunhofer</a>,
        where I researched how to use mechanistic interpretability (a subfield
        of explainable AI) to see if a multimodal medical transformer has
        retained some "world knowledge" from its pretraining data. A lot of
        this research was inspired by Anthropic's MI research on LLMs. The
        drive of this thesis was the lack of research done on medical vision
        transformers &mdash; at the time only one publication existed, and only
        for vision transformers.</p>

        <p>There I, alongside another student, used sparse auto-encoders (SAE)
        to obtain the most important features (a.k.a. latents) of the medical
        transformer, and see if those latents had some representation of real
        world concepts such as "breast", "cancer", "malesion" and so on.</p>

        <figure class="content-figure diagram-figure">
          <object class="diagram-pdf" data="assets/experience/tickz_standalone.pdf#toolbar=0&amp;navpanes=0&amp;scrollbar=0&amp;view=Fit"
                  type="application/pdf"
                  aria-label="Diagram of the Matryoshka sparse auto-encoder attached to a frozen UMedPT backbone">
            <img src="assets/experience/sae-diagram.png"
                 alt="Diagram of the Matryoshka sparse auto-encoder attached to a frozen UMedPT backbone">
          </object>
          <figcaption>A simple diagram explaining how the SAE extracts the most
          meaningful activations from the transformer &mdash;
          <a href="assets/experience/tickz_standalone.pdf"
             data-pdf-title="SAE diagram">open it full size</a>.</figcaption>
        </figure>

        <p>If you are interested, the full thesis is
        <a href="assets/experience/Medical-depL-models-do-learn-about-the-world.pdf"
           data-pdf-title="Bachelor thesis">attached here</a>.</p>

        <h4>Teaching Assistant</h4>
        <p>I have been a teaching assistant for six classes: programming in
        C/C++; operating systems; software engineering; databases; automata,
        computability and complexity theory; and algorithms and data
        structures. I think the best part about it is having conversations
        with students that are also passionate about the subjects. Another
        benefit was the one-on-one time with professors, which provided me
        with a lot of help that would be harder to get otherwise.</p>

        <p>Having to teach a subject in tutorials also helped me a lot, as it
        forced me to learn and go much deeper into the topics so that I could
        be ready for potential questions, or to explain the reasoning behind
        the concepts.</p>

        <h3>Industry</h3>

        <h4>German Aerospace Center (DLR)</h4>
        <div class="edu-row">
          <figure class="edu-logo-plate edu-plate-wide">
            <img src="assets/experience/DLR.jpg" alt="German Aerospace Center (DLR) logo">
          </figure>

          <p>At the DLR (during my internship) I began by rewriting the local
          satellite messaging system from C to C++17. This was challenging as
          the original system was blocking and had no multi-threading
          support. I met this challenge by mainly relying on RabbitMQ and the
          Bloomberg standard libraries &mdash; the former providing easy
          communication via queues, the latter thread pools and automatic
          thread management.</p>

          <p>Towards the end of my internship and into my work study, I spent
          the next year primarily focused on working with the
          <strong>Galileo Kopierzentrum</strong>, improving the internal
          software that monitored and reported the status of the Galileo and
          other satellites.</p>
        </div>
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

/* Manifests are hand-edited, so a stray comma is the likeliest failure by far.
   Report it against the actual file and line rather than leaking a bare
   "unexpected character" from the JSON parser. */
async function loadManifest(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Could not fetch " + url + " (HTTP " + res.status + ")");

  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch (err) {
    const position = /position (\d+)/.exec(err.message);
    let where = "";
    if (position) {
      const upto = text.slice(0, Number(position[1]));
      const line = upto.split("\n").length;
      where = " near line " + line;
    } else {
      const lineCol = /line (\d+) column (\d+)/.exec(err.message);
      if (lineCol) where = " near line " + lineCol[1];
    }
    throw new Error(
      url + " is not valid JSON" + where +
      ". The usual cause is a comma after the last item in the list."
    );
  }
}

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
