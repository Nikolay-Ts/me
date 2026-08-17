/* Generic window manager: open/close/minimize/maximize/drag/resize/focus. */

const XPWindows = (function () {
  const MOBILE_QUERY = "(max-width: 700px)";
  const DESKTOP_PADDING = 24;
  const CASCADE_STEP = 28;
  const MIN_WIDTH = 280;
  const MIN_HEIGHT = 180;

  let zCounter = 10;
  let openedCount = 0;
  const state = new Map(); // id -> { el, taskbarBtn, minimized, maximized, prevRect }

  function isMobile() {
    return window.matchMedia(MOBILE_QUERY).matches;
  }

  function layer() {
    return document.getElementById("windows-layer");
  }

  function taskbarApps() {
    return document.getElementById("taskbar-apps");
  }

  function createWindowEl(id) {
    const app = APPS[id];
    const el = document.createElement("div");
    el.className = "xp-window";
    el.id = "win-" + id;
    el.innerHTML =
      '<div class="xp-titlebar">' +
        '<span class="xp-titlebar-icon">' + app.icon + "</span>" +
        '<span class="xp-titlebar-text">' + app.title + "</span>" +
        '<div class="xp-titlebar-buttons">' +
          '<button type="button" class="xp-tbtn xp-min" aria-label="Minimize">&#x2013;</button>' +
          '<button type="button" class="xp-tbtn xp-max" aria-label="Maximize">&#x25A1;</button>' +
          '<button type="button" class="xp-tbtn xp-close" aria-label="Close">&#x2715;</button>' +
        "</div>" +
      "</div>" +
      '<div class="xp-window-body">' +
        (app.content || '<div class="content-loading">Loading&hellip;</div>') +
      "</div>" +
      '<div class="xp-resize xp-resize-e"></div>' +
      '<div class="xp-resize xp-resize-s"></div>' +
      '<div class="xp-resize xp-resize-se"></div>';

    layer().appendChild(el);

    if (!isMobile()) {
      const offset = (openedCount % 8) * CASCADE_STEP;
      el.style.width = (app.width || 480) + "px";
      el.style.height = (app.height || 400) + "px";
      el.style.left = DESKTOP_PADDING + offset + "px";
      el.style.top = DESKTOP_PADDING + offset + "px";
    } else {
      el.classList.add("xp-window-mobile");
    }
    openedCount++;

    return el;
  }

  function createTaskbarButton(id) {
    const app = APPS[id];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "taskbar-button";
    btn.id = "taskbtn-" + id;
    btn.innerHTML =
      '<span class="taskbar-button-icon">' + app.icon + "</span>" +
      '<span class="taskbar-button-label">' + app.title + "</span>";
    btn.addEventListener("click", function () {
      const w = state.get(id);
      if (!w) return;
      if (w.minimized) {
        restoreWindow(id);
      } else if (isFocused(id)) {
        minimizeWindow(id);
      } else {
        focusWindow(id);
      }
    });
    taskbarApps().appendChild(btn);
    return btn;
  }

  function isFocused(id) {
    const w = state.get(id);
    if (!w) return false;
    return w.el.classList.contains("active");
  }

  function wireDrag(id, el) {
    const titlebar = el.querySelector(".xp-titlebar");
    titlebar.addEventListener("dblclick", function (e) {
      if (e.target.closest(".xp-tbtn")) return;
      toggleMaximize(id);
    });
    titlebar.addEventListener("mousedown", function (e) {
      if (e.target.closest(".xp-tbtn")) return;
      if (isMobile() || el.classList.contains("maximized")) return;
      focusWindow(id);
      const startX = e.clientX;
      const startY = e.clientY;
      const startLeft = el.offsetLeft;
      const startTop = el.offsetTop;

      function onMove(ev) {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        el.style.left = startLeft + dx + "px";
        el.style.top = Math.max(0, startTop + dy) + "px";
      }
      function onUp() {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      }
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      e.preventDefault();
    });
  }

  function wireResize(id, el) {
    const dirs = { "xp-resize-e": "e", "xp-resize-s": "s", "xp-resize-se": "se" };
    el.querySelectorAll(".xp-resize").forEach(function (handle) {
      handle.addEventListener("mousedown", function (e) {
        if (isMobile() || el.classList.contains("maximized")) return;
        e.stopPropagation();
        e.preventDefault();
        focusWindow(id);
        let dir = "se";
        for (const cls in dirs) {
          if (handle.classList.contains(cls)) dir = dirs[cls];
        }
        const startX = e.clientX;
        const startY = e.clientY;
        const startW = el.offsetWidth;
        const startH = el.offsetHeight;

        function onMove(ev) {
          const dx = ev.clientX - startX;
          const dy = ev.clientY - startY;
          if (dir === "e" || dir === "se") {
            el.style.width = Math.max(MIN_WIDTH, startW + dx) + "px";
          }
          if (dir === "s" || dir === "se") {
            el.style.height = Math.max(MIN_HEIGHT, startH + dy) + "px";
          }
        }
        function onUp() {
          document.removeEventListener("mousemove", onMove);
          document.removeEventListener("mouseup", onUp);
        }
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
      });
    });
  }

  function wireChrome(id, el) {
    el.querySelector(".xp-min").addEventListener("click", function () {
      minimizeWindow(id);
    });
    el.querySelector(".xp-max").addEventListener("click", function () {
      toggleMaximize(id);
    });
    el.querySelector(".xp-close").addEventListener("click", function () {
      closeWindow(id);
    });
    el.addEventListener("mousedown", function () {
      focusWindow(id);
    });
    wireDrag(id, el);
    wireResize(id, el);
  }

  /* Content that comes from files under assets/ arrives after the window opens. */
  async function fillAsync(id, el) {
    const body = el.querySelector(".xp-window-body");
    try {
      const result = await APPS[id].load();
      body.replaceChildren(typeof result === "string"
        ? Object.assign(document.createElement("div"), { innerHTML: result })
        : result);
    } catch (err) {
      // Opening index.html straight off disk means fetch() is blocked, so the
      // windows that read from assets/ can't load. Say so plainly.
      body.innerHTML = location.protocol === "file:"
        ? '<div class="content-placeholder file-hint"><div>' +
            "<p><strong>This window needs a local web server.</strong></p>" +
            "<p>It reads its content from <code>assets/</code>, and browsers block " +
            "that when a page is opened directly from disk " +
            "(<code>file://</code>).</p>" +
            "<p>Run this in the project folder, then open " +
            "<code>http://localhost:4173</code>:</p>" +
            '<pre class="code-sample"><code>python3 -m http.server 4173</code></pre>' +
            "<p>On GitHub Pages this works with no extra steps.</p>" +
          "</div></div>"
        : '<div class="content-placeholder"><p class="load-error">' +
            "Could not load this window&rsquo;s content.<br>" +
            (err && err.message ? err.message : "") + "</p></div>";
    }
  }

  function openWindow(id) {
    if (!APPS[id]) return;
    let w = state.get(id);
    if (!w) {
      const el = createWindowEl(id);
      wireChrome(id, el);
      const taskbarBtn = createTaskbarButton(id);
      w = { el: el, taskbarBtn: taskbarBtn, minimized: false, maximized: false, prevRect: null };
      state.set(id, w);
      if (APPS[id].load) fillAsync(id, el);
    } else if (w.minimized) {
      restoreWindow(id);
      return;
    } else {
      w.el.classList.remove("hidden");
    }
    focusWindow(id);
  }

  function closeWindow(id) {
    const w = state.get(id);
    if (!w) return;
    w.el.remove();
    w.taskbarBtn.remove();
    state.delete(id);
  }

  function minimizeWindow(id) {
    const w = state.get(id);
    if (!w) return;
    w.el.classList.add("hidden");
    w.minimized = true;
    w.el.classList.remove("active");
    w.taskbarBtn.classList.remove("active");
  }

  function restoreWindow(id) {
    const w = state.get(id);
    if (!w) return;
    w.el.classList.remove("hidden");
    w.minimized = false;
    focusWindow(id);
  }

  function toggleMaximize(id) {
    const w = state.get(id);
    if (!w || isMobile()) return;
    const el = w.el;
    if (!el.classList.contains("maximized")) {
      w.prevRect = {
        left: el.style.left,
        top: el.style.top,
        width: el.style.width,
        height: el.style.height
      };
      el.classList.add("maximized");
      el.style.left = "0px";
      el.style.top = "0px";
      el.style.width = "100%";
      el.style.height = "100%";
    } else {
      el.classList.remove("maximized");
      el.style.left = w.prevRect.left;
      el.style.top = w.prevRect.top;
      el.style.width = w.prevRect.width;
      el.style.height = w.prevRect.height;
    }
    focusWindow(id);
  }

  function focusWindow(id) {
    const w = state.get(id);
    if (!w) return;
    zCounter++;
    w.el.style.zIndex = zCounter;
    state.forEach(function (other, otherId) {
      other.el.classList.toggle("active", otherId === id);
      other.taskbarBtn.classList.toggle("active", otherId === id);
    });
  }

  /* Registers a window at runtime (e.g. an image opened from the Recycle Bin)
     and opens it. Re-opening the same id just focuses the existing window. */
  function openDynamic(spec) {
    if (!APPS[spec.id]) {
      APPS[spec.id] = {
        title: spec.title,
        width: spec.width || 520,
        height: spec.height || 460,
        icon: spec.icon || APPS.trash.icon,
        content: spec.content
      };
    }
    openWindow(spec.id);
  }

  return {
    openWindow: openWindow,
    openDynamic: openDynamic,
    closeWindow: closeWindow,
    minimizeWindow: minimizeWindow,
    restoreWindow: restoreWindow,
    toggleMaximize: toggleMaximize,
    focusWindow: focusWindow
  };
})();
