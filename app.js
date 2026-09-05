// Highlights the download card matching the visitor's OS. Cosmetic only —
// both download links are always present and clickable either way.
(function () {
  const platform = navigator.platform || navigator.userAgent || "";
  const isMac = /Mac/i.test(platform);
  const isWindows = /Win/i.test(platform);

  const target = isMac ? "card-mac" : isWindows ? "card-windows" : null;
  if (target) {
    const el = document.getElementById(target);
    if (el) el.classList.add("is-detected");
  }
})();
