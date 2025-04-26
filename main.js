(function () {
  // lista de domínios autorizados (temporário)
  var _a = ["exemplo.com", "localhost"];
  var _h = window.location.hostname.replace(/^www\./, "");
  if (_a.indexOf(_h) < 0) {
    // quebra total do site
    document.documentElement.innerHTML = "";
    document.documentElement.style.background = "#fff";
    window.stop();
  }
})();
