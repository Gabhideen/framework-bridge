(function() {
  var dominiosPermitidos = ["gabhideen.github.io", "localhost"];
  var dominioAtual = window.location.hostname;

  if (!dominiosPermitidos.includes(dominioAtual)) {
    // Se não for permitido, remove tudo da página
    document.documentElement.innerHTML = "";
    document.write("Acesso não autorizado");
    document.close();
  }
})();
