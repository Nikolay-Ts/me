/* Boots the desktop: renders icons + start menu, wires interactions, runs the clock. */

document.addEventListener("DOMContentLoaded", function () {
  renderDesktopIcons();
  renderStartMenu();
  wireGlobalEvents();
  wireClickSound();
  startClock();
});

function renderDesktopIcons() {
  const container = document.getElementById("desktop-icons");
  APP_ORDER.forEach(function (id) {
    const app = APPS[id];
    const icon = document.createElement("button");
    icon.type = "button";
    icon.className = "desktop-icon";
    icon.dataset.appId = id;
    icon.innerHTML =
      '<span class="desktop-icon-glyph">' + app.icon + "</span>" +
      '<span class="desktop-icon-label">' + app.title + "</span>";
    container.appendChild(icon);
  });
}

function renderStartMenu() {
  const menu = document.getElementById("start-menu");
  menu.innerHTML = APP_ORDER.map(function (id) {
    const app = APPS[id];
    return (
      '<button type="button" class="start-menu-item" data-app-id="' + id + '">' +
        '<span class="start-menu-icon">' + app.icon + "</span>" + app.title +
      "</button>"
    );
  }).join("") +
  '<div class="start-menu-sep"></div>' +
  '<button type="button" class="start-menu-item start-menu-shutdown" data-shutdown>' +
    '<span class="start-menu-icon">' +
      '<svg viewBox="0 0 22 22" width="22" height="22" aria-hidden="true">' +
        '<rect width="22" height="22" rx="5" fill="#d64b3f"/>' +
        '<path d="M11 5.5v5.2M7.6 7.2a4.6 4.6 0 1 0 6.8 0" fill="none" stroke="#fff" ' +
        'stroke-width="1.9" stroke-linecap="round"/>' +
      "</svg>" +
    "</span>Turn Off Computer</button>";
}

function wireGlobalEvents() {
  const iconsContainer = document.getElementById("desktop-icons");
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  iconsContainer.addEventListener("click", function (e) {
    const icon = e.target.closest(".desktop-icon");
    if (!icon) return;
    selectIcon(icon);
    if (coarsePointer) {
      XPWindows.openWindow(icon.dataset.appId);
    }
  });

  iconsContainer.addEventListener("dblclick", function (e) {
    const icon = e.target.closest(".desktop-icon");
    if (!icon) return;
    XPWindows.openWindow(icon.dataset.appId);
  });

  iconsContainer.addEventListener("keydown", function (e) {
    const icon = e.target.closest(".desktop-icon");
    if (!icon) return;
    if (e.key === "Enter") {
      e.preventDefault();
      XPWindows.openWindow(icon.dataset.appId);
    }
  });

  document.getElementById("desktop").addEventListener("mousedown", function (e) {
    if (!e.target.closest(".desktop-icon")) deselectIcons();
  });

  const layer = document.getElementById("windows-layer");

  layer.addEventListener("click", function (e) {
    const link = e.target.closest("[data-open-app]");
    if (link) {
      e.preventDefault();
      XPWindows.openWindow(link.dataset.openApp);
    }
  });

  /* Any link to a PDF opens in its own window on the desktop rather than
     navigating the page away. Links that opt out keep the normal behaviour. */
  layer.addEventListener("click", function (e) {
    const link = e.target.closest('a[href$=".pdf"]');
    if (!link || link.hasAttribute("download") || link.dataset.external === "true") return;
    e.preventDefault();
    openPdfWindow(link.getAttribute("href"), pdfTitleFor(link));
  });

  /* Recycle Bin behaves like Explorer: click selects, double-click opens the
     image in its own window. */
  layer.addEventListener("click", function (e) {
    const item = e.target.closest(".trash-item");
    if (!item) return;
    item.parentElement.querySelectorAll(".trash-item.selected")
      .forEach(function (i) { i.classList.remove("selected"); });
    item.classList.add("selected");
    if (coarsePointer) openImageViewer(item);
  });

  layer.addEventListener("dblclick", function (e) {
    const item = e.target.closest(".trash-item");
    if (item) openImageViewer(item);
  });

  layer.addEventListener("keydown", function (e) {
    const item = e.target.closest(".trash-item");
    if (item && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openImageViewer(item);
    }
  });

  layer.addEventListener("submit", function (e) {
    if (e.target.id === "contact-form") {
      e.preventDefault();
      handleContactSubmit(e.target);
    }
  });

  const startBtn = document.getElementById("start-button");
  const startMenu = document.getElementById("start-menu");

  startBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    startMenu.hidden = !startMenu.hidden;
  });

  startMenu.addEventListener("click", function (e) {
    const item = e.target.closest("[data-app-id]");
    if (item) {
      XPWindows.openWindow(item.dataset.appId);
      startMenu.hidden = true;
      return;
    }
    if (e.target.closest("[data-shutdown]")) {
      startMenu.hidden = true;
      shutDown();
    }
  });

  document.getElementById("tray-shutdown").addEventListener("click", shutDown);
  document.getElementById("shutdown-restart").addEventListener("click", bootUp);

  document.addEventListener("click", function (e) {
    if (!startMenu.hidden && !startMenu.contains(e.target) && e.target !== startBtn) {
      startMenu.hidden = true;
    }
  });
}

/* Clicks anywhere on the desktop tick, like XP. Capture phase so the sound
   still fires even if a handler stops propagation. */
function wireClickSound() {
  document.addEventListener("mousedown", function () { XPSound.click("down"); }, true);
  document.addEventListener("mouseup", function () { XPSound.click("up"); }, true);

  const toggle = document.getElementById("tray-sound");

  function paint() {
    const on = XPSound.isEnabled();
    toggle.classList.toggle("muted", !on);
    toggle.setAttribute("aria-pressed", String(on));
    toggle.title = on ? "Mute click sound" : "Unmute click sound";
  }

  toggle.addEventListener("click", function () {
    XPSound.setEnabled(!XPSound.isEnabled());
    paint();
    XPSound.click("down");
  });

  paint();
}

function selectIcon(icon) {
  deselectIcons();
  icon.classList.add("selected");
}

function deselectIcons() {
  document.querySelectorAll(".desktop-icon.selected").forEach(function (i) {
    i.classList.remove("selected");
  });
}

/* Prefer an explicit title, then the link's own text, then the filename. */
function pdfTitleFor(link) {
  const explicit = link.dataset.pdfTitle;
  if (explicit) return explicit;

  const text = link.textContent.trim();
  if (text && text.length <= 40 && !/^https?:/i.test(text)) return text;

  return decodeURIComponent(link.getAttribute("href").split("/").pop());
}

function openPdfWindow(url, title) {
  XPWindows.openDynamic({
    id: "pdf:" + url,
    title: title,
    width: 720,
    height: 640,
    icon: APPS.cv.icon,
    content:
      '<div class="pdf-root">' +
        '<iframe class="pdf-frame" src="' + url + '" title="' + title + '"></iframe>' +
        '<div class="pdf-bar">' +
          '<a class="xp-button" href="' + url + '" download>Download</a>' +
          '<a class="xp-button" href="' + url + '" target="_blank" rel="noopener" ' +
            'data-external="true">Open in browser</a>' +
        "</div>" +
      "</div>"
  });
}

function openImageViewer(item) {
  const src = item.dataset.src;
  const name = item.dataset.name;
  XPWindows.openDynamic({
    id: "viewer:" + src,
    title: name,
    width: 560,
    height: 480,
    content: '<div class="viewer-root">' +
      '<div class="image-viewer"><img src="' + src + '" alt="' + name + '"></div>' +
      '<div class="viewer-bar"><a class="xp-button" href="' + src +
      '" target="_blank" rel="noopener">Open original</a></div></div>'
  });
}

/* Tries to actually close the tab. Browsers only allow that for script-opened
   windows, so fall back to the XP shutdown screen (with a way back in). */
function shutDown() {
  const screen = document.getElementById("shutdown-screen");
  const message = document.getElementById("shutdown-message");
  const restart = document.getElementById("shutdown-restart");

  screen.hidden = false;
  message.textContent = "Windows is shutting down…";
  restart.hidden = true;

  setTimeout(function () {
    window.close();
    // Still here? The browser blocked it, so show the classic end screen.
    screen.classList.add("off");
    message.textContent = "It is now safe to turn off your computer.";
    restart.hidden = false;
  }, 1400);
}

function bootUp() {
  const screen = document.getElementById("shutdown-screen");
  screen.hidden = true;
  screen.classList.remove("off");
}

function handleContactSubmit(form) {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = encodeURIComponent("Message from " + name + " via personal site");
  const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
  window.location.href = "mailto:nikolay.L.tsonev@gmail.com?subject=" + subject + "&body=" + body;
}

function startClock() {
  const clockEl = document.getElementById("taskbar-clock");
  function tick() {
    clockEl.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  tick();
  setInterval(tick, 30000);
}
