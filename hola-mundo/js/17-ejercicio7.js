'use strict'
/**Tabla de multiplicar de un numero introducido por pantalla */

var numero = parseInt(prompt("Ingresa un numero",1));
var resultado = 0;

while(isNaN(numero)){
    numero = parseInt(prompt("Ingresa un numero",1));
}


document.write("<h1>Tabla del " + numero + "</h1>");
for (var i = 1; i <= 10; i++){
    resultado = i*numero;
    document.write(numero + " x " + i + " = " + resultado + "<br>");
}

//Todas las tablas de multiplicars

for (let c = 1; c <= 10; c++) {
    document.write("<h1>Tabla del " + c + "</h1>");
    for (let j = 1; j <= 10; j++) {
        resultado = c*j;
        document.write(c + " x " + j + " = " + resultado + "<br>");
        
    }
}