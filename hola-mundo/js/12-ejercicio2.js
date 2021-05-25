'use strict'

/*Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un
numero negativo y ahi mostrar el resultado */


var cantidad = 0;
var suma = 0;

do {
    var numero = parseInt(prompt("Ingresa un numero",0));
    if(isNaN(numero)) {
        numero = 0;
    }else if(numero>=0) {
        cantidad++;
        suma = suma + numero;
    }

} while (numero >= 0);

alert("La suma es: " + suma + " y la media es " + suma/cantidad);
