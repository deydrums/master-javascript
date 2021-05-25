'use strict'

//Condicional if
// Si A es igual a B entonces haz algo

var edad1 = 30;
var edad2 = 12;

var edad = 18;
var nombre = 'David Vardez';
//Si pasa esto
if (edad1 > edad2) {
    //Ejecuta esto
    console.log("Edad uno es mayor que edad 2");
}else{
    console.log("Edad uno es inferior");
}

/* Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

if (edad >= 18) {
    //Usuario es mayor de edad
    console.log(nombre + " " +edad +" años, es mayor de edad ")
    if(edad <= 33){
        console.log("Todavia eres millenial");
    }else if(edad >= 70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres millenial");
    }

}else{
    console.log(nombre + " " +edad +" años, es menor de edad ")
}