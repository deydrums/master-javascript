'use strict'

//Arrays, arreglos, matrices

var nombre = "David Garcia";
var nombres = ["David Garcia", "Juan Lopez", "Marco Gonzales", "Jose Rodriguez", 52, true];

var lenguajes = new Array("PHP" , "JS", "Go", "Java");

console.log(nombres.length);
console.log(lenguajes);

var elemento = parseInt(prompt("Que elemento del array quieres?",0));

if (elemento >= nombres.length) {
    alert("Introduce el numero correcto (menor que "+nombres.length+")")
}else{
    alert("El usuario seleccionado es: "+ nombres[elemento]);
}

document.write("<h1>Lenguajes de programacion <br></h1>");
document.write("<ul>");
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i]+"</li>");
}
document.write("</ul>");