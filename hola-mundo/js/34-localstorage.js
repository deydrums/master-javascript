'use strict'
//LocalStorage

//Comprobar disponibilidad del localstorage
if(typeof(Storage) !== 'undefined'){
    console.log('LocalStorage Disponible')
}else{
    console.log('Incompatible con LocalStorage')
}

//Guardar datos 
localStorage.setItem("titulo","Curso JavaScript");  

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = (localStorage.getItem("titulo"));

//Guardar Objetos
var usuario ={
    nombre: "David Garcia",
    email: "dagarcia100@gmail.com",
    web: "http://deydrums.com"
}

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" " +userjs.web + "  "+userjs.nombre);

localStorage.removeItem("usuario");
localStorage.clear();

