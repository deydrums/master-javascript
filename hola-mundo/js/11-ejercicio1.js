'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
*/


var n1 = parseInt(prompt("Ingresa un numero",1));
var n2 = parseInt(prompt("Ingresa un numero",1));

if (n1 > n2) {
    alert(n1 + " Es mayor que " + n2);
}else if (n2 > n1) {
    alert(n2 + " Es mayor que " + n1);
}else{
    alert(n1 + "  y " + n2 + " Son iguales")
}