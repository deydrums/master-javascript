'use strict'

/** 
 * Calculadora
 * -Pida dos numeros por pantalla
 * -Si metemos uno mal, que nos los vuelva a pedir
 * -En el cuerpo de la pagina, en una alerta y por la consola el resultado del
 * sumar, restar, multiplicar y dividr esas dos cifras
*/

var n1 = parseInt(prompt("Ingresa el primer numero",1));
var n2 = parseInt(prompt("Ingresa el segundo numero",1));
var suma, resta, multiplicacion, division = 0;

while(isNaN(n1)||isNaN(n2)){
    n1 = parseInt(prompt("Ingresa el primer numero",1));
    n2 = parseInt(prompt("Ingresa el segundo numero",1));
}

//Operaciones
suma = n1+n2;
resta = n1-n2;
multiplicacion = n1*n2;
division = n1/n2;

//Mostrar
var result = "Operaciones \n" +
n1 + " + " + n2 + " = " + suma + "\n" +
n1 + " - " + n2 + " = " + resta + "\n" +
n1 + " * " + n2 + " = " + multiplicacion + "\n" +
n1 + " / " + n2 + " = " + division + "\n";


document.write("<h1>Operaciones</h1>");
document.write(n1 + " + " + n2 + " = " + suma + "<br>");
document.write(n1 + " - " + n2 + " = " + resta + "<br>");
document.write(n1 + " * " + n2 + " = " + multiplicacion + "<br>");
document.write(n1 + " / " + n2 + " = " + division + "<br>");

console.log(result);
alert(result);