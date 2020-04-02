(function(){

var formulario = document.getElementsByClassName('formulario')[0];
var elementos = formulario.elements;
var boton = document.getElementById('btn');

var validarNombre = function(e){
  if (formulario.nombre.value == 0) {
    alert("completa el nombre");
    e.preventDefault();
  }
};

var validarRadio = function(e){
if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {
}else {
  alert("Completa el campo sexo");
  e.preventDefault();
  }
};

var validarCheckbox = function(e){
if (formulario.terminos.checked == false) {
  alert("acepta los terminos");
  e.preventDefault();
}

};
var validar = function(e){
  validarNombre(e);
  validarRadio(e);
  validarCheckbox(e);
};

formulario.addEventListener("submit", validar);



}())
