'use strict'

//Parametros REST y SPREAD
//rest
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log('fruta 1 : ' + fruta1);
    console.log('fruta 2 : ' + fruta2);
    console.log(resto_de_frutas);   
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

var frutas = ["Naranja", "Manzana"];

//spread
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");