;(function(){
-  var _a = ["exemplo.com","localhost"];
+  var _a = ["exemplo.com","localhost","gabhideen.github.io"];
  var _h = window.location.hostname.replace(/^www\./,"");
  if(_a.indexOf(_h) < 0){
    document.documentElement.innerHTML = "";
    document.documentElement.style.background = "#fff";
    window.stop();
  }
})();
