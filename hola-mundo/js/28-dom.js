'use strict'

//DOM - Document object model

function cambiaColor(color) {
    caja.style.background = color;
}


//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

console.log(caja);

