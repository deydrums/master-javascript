'use strict'

//Arrays multidimensionales

var categorias = ['Accion' , 'Terror', 'Comedia'];
var peliculas = ['La verdad duele' , 'La vida es bella', 'Ghost Rider'];

var cine = [categorias,peliculas];

console.log(cine[0][1]);

/*
//Agregar elemento
var elemento = "";

do{
    elemento = prompt('Introduce tu pelicula: ');
    peliculas.push(elemento);
}while(elemento!= "ACABAR")

//Eliminar ultimo elemento de un array
peliculas.pop();
*/
var indice = peliculas.indexOf('La verdad duele');
console.log(indice); 

if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();
var cadena = "Texto1, Texto2, Texto3";
var cadena_array = cadena.split(", ");


console.log(cadena_array);