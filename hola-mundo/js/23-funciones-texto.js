'use strict'

//Tranformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "es muy buen curso de JavaScript";

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
