'use strict'

//FUNCIONES
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion
function calculadora(numero1 , numero2, mostrar = false) {
    //Conjunto de instrucciones
    if(mostrar == false) {
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicacion: " + (numero1*numero2));
        console.log("Division: " + (numero1/numero2));
        console.log("*******************************");
    }else{
        document.write("Suma: " + (numero1+numero2) + "<br>");
        document.write("Resta: " + (numero1-numero2) + "<br>");
        document.write("Multiplicacion: " + (numero1*numero2) + "<br>");
        document.write("Division: " + (numero1/numero2) + "<br>");
        document.write("*******************************" + "<br>");       
    }

    //return "Hola soy la calculadora";
}

//Llamar a la funcion
calculadora(1,4,true);

/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i,8);
    
}
*/

