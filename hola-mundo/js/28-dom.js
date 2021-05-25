'use strict'

//DOM - Document object model

function cambiaColor(color) {
    caja.style.background = color;
}

//CONSEGUIR ELEMENTOS CON UN ID EN CONCRETO

//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

console.log(caja);

//CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");



//todosLosDivs.forEach((valor, indice) =>{
var valor;
for( valor in todosLosDivs){
    
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }

}
seccion.append(hr);
//});    

//console.log(contenidoEnTexto);

//CONSEGUIR ELEMENTOS POR SU CLASE CSS

