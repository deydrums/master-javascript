'use strict'

//Tranformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de curso JavaScript";
var texto2 = "es muy buen curso de JavaScript";

var busqueda = texto1.match(/curso/g);
var busqueda = texto1.substr(14,5);
var busqueda = texto1.charAt(29);
var busqueda = texto1.startsWith("Bi");
var busqueda = texto1.includes("JavaScript");
console.log(busqueda);


/*
var dato = numero.toString();
    dato = texto1.toUpperCase();    //Mayusculas    
    dato = texto1.toLowerCase();    //Minusculas

console.log(dato);

//Calcular longitud 
var nombre = "Mario David Garcia Chinchilla";
    nombre = ["hola", "hola"];
console.log(nombre.length);

//Concatenar
var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);
*/