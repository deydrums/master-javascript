'use strict'

/** 
 * Hacer un programa que nos diga si un numero es par o impar
 * 1. Ventana prompt
 * 2. Si no es valido que nos pida de nuevo el numero
 * 3. Numero es par o impar
*/

var numero = parseInt(prompt("Ingresa un numero",1));

while(isNaN(numero)){
    numero = parseInt(prompt("Ingresa un numero",1));
}

if(numero % 2 == 0){
    alert("El numero: " + numero + " es par");
}else{
    alert("El numero: " + numero + " es impar");
}