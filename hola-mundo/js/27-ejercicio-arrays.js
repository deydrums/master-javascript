'use strict'
/**
 * 1.Programa que pida 6 numeros por pantalla y los meta en un array 
 * 2. Mostrar el array entero (Todos los elementos en el cuerpo de la pagina y en la consola)
 * 3. Ordenarlo y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array 
 * 6. Busqueda de un valor introducido por el usuario (Si esta y su posicion)
 * (Se valorara el uso de funciones)**/

// FUNCION MOSTRAR ********************************************

function mostrar(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1><br>");
    elementos.forEach((elemento, index) => {
        document.write("<strong>"+elemento +"</strong><br>")
    });
}

//1.***********************************************************
var numeros = [];
for (let i = 1; i <= 6; i++) {
    var numero = prompt("Introduce el numero #"+i);
    numeros.push(numero);
}

//2.***********************************************************
console.log("Los numeros son: " + numeros);
mostrar(numeros, "");
/*
for(numero in numeros) {
    document.write(numeros[numero] + "<br>");
}
*/


//3.***********************************************************
numeros.sort(function(a, b){return a-b});
console.log("Los numeros ordenados son: " + numeros);
mostrar(numeros, "ordenado");

//4.***********************************************************
numeros.reverse();
console.log("El array invertido es: " + numeros);
mostrar(numeros, "invertido");

//5.***********************************************************
console.log("El tamaño del array es: " +numeros.length);
document.write("El tamaño del array es: " +numeros.length +"</br>");

//6.***********************************************************
var busqueda = parseInt(prompt("Busca el numero: "));
var posicion = numeros.findIndex(numeros => numeros == busqueda);

if (posicion && posicion != -1) {
    document.write("<h1>Encontrado</h1>")
    document.write("<h1>Posicion de la busqueda: "+posicion +"</h1>") 
}else{
    document.write("<h1>No encontrado</h1>")
}
