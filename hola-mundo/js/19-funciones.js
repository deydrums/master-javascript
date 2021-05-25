'use strict'

//FUNCIONES
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion
function calculadora(numero1 , numero2) {
    //Conjunto de instrucciones
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("Division: " + (numero1/numero2));
    console.log("*******************************");
    //return "Hola soy la calculadora";
}

//Llamar a la funcion
for (let i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i,8);
    
}