'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var n1 = parseInt(prompt("Ingresa el primer numero",1));
var n2 = parseInt(prompt("Ingresa el segundo numero",1));

document.write("<h1>De " + n1 + " a " + n2 + " estan estos numeros</h1>");
for (let i = n1; i <= n2; i++) {
    document.write(i + "<br>");
}