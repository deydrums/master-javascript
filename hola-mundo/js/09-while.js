'use strict'

//Bucle WHILE

var year = 2021;

while (year <= 2051){
    //Ejecuta esto
    console.log("Estamos en el año: " + year);

    if(year == 2035){
        break;
    }
    year++;

}

//Do While

var years = 30;
do {
    alert("Solo cuando sea diferente a 20");
    years--;
} while (years > 25)