'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos lo vuelva a pedir
*/


var n1 = parseInt(prompt("Ingresa el primer numero",1));
var n2 = parseInt(prompt("Ingresa el segundo numero",1));

while(n1 <= 0 || n2 <= 0 || isNaN(n1)||isNaN(n2)){
    n1 = parseInt(prompt("Ingresa el primer numero",1));
    n2 = parseInt(prompt("Ingresa el segundo numero",1));
}

if (n1 > n2) {
    alert(n1 + " Es mayor que " + n2);
}else if (n2 > n1) {
    alert(n2 + " Es mayor que " + n1);
}else{
    alert(n1 + "  y " + n2 + " Son iguales")
}