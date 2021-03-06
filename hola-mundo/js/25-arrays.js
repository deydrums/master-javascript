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

/*
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i]+"</li>");
}

lenguajes.forEach((elemento, indice) => {
    document.write("<li>"+indice + " - " +elemento+"</li>");
});
*/

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");

//Busquedas
var precios = [10,20,50,80,12];
var busqueda = lenguajes.find(lenguaje=>lenguaje == "PHP");
var busqueda = lenguajes.findIndex(lenguaje=>lenguaje == "PHP");
//comprobar precio
var busqueda = precios.some(precio=>precio >= 20);
console.log(busqueda);