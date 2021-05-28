'use strict'

//JSON - JavaScript Object

var pelicula ={
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados unidos'
};

var peliculas = [
    {titulo: "La verdad duele" , year: 2016, pais: "Francia"},
    pelicula
];

pelicula.titulo = "Superman Begins";
console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");

for(var index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}

