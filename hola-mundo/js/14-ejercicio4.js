'use strict'

/*
Mostrar todos los numeros impares contenidos entre dos numeros ingresados por el usuario
*/ 


var n1 = parseInt(prompt("Ingresa el primer numero",1));
var n2 = parseInt(prompt("Ingresa el segundo numero",1));

document.write("<h1>De " + n1 + " a " + n2 + " estan estos numeros impares</h1>");
for (let i = n1; i <= n2; i++) {
    if(i % 2 != 0){
        document.write(i + "<br>");
    }
}