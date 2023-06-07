
var textarea = document.getElementById("textarea1");
var contarCaracteres1 = document.getElementById("contarCaracteres1");
var palabrasCount = document.getElementById("contarPalabras");
var sinPuntosniespacios1 = document.getElementById("sinPuntosniespacios");
var numeros1=document.getElementById("numeros")
var suma1=document.getElementById("suma1")

textarea.addEventListener("input", contarCaracteres);
textarea.addEventListener("input", contarPalabras);
textarea.addEventListener("input", sinPuntosniespacios);
textarea.addEventListener("input", numeros);
textarea.addEventListener("input", suma1);

function contarCaracteres() {
  var texto = textarea.value;
  var numeroCaracteres = texto.length;
  contarCaracteres1.textContent = numeroCaracteres + " caracteres";
}

function contarPalabras() {
  var texto = textarea.value;
  var numeroPalabras = texto.trim().split(/\s+/).length;
  palabrasCount.textContent = numeroPalabras + " palabras";
}

function sinPuntosniespacios() {
  var texto = textarea.value;
  var caracteresSinPuntosEspacios = texto.replace(/[^\w\s]/gi, "").replace(/\s/g, "");
  var numeroCaracteresSinPuntosEspacios = caracteresSinPuntosEspacios.length;
  sinPuntosniespacios1.textContent = numeroCaracteresSinPuntosEspacios + " caracteres sin puntos ni espacios";
}

function numeros() {
    var texto = textarea.value;
    var numerosEncontrados = texto.match(/\d+/g);
    var cantidadNumeros = numerosEncontrados ? numerosEncontrados.length : 0;
    numeros1.textContent = cantidadNumeros + " números";
  }
  