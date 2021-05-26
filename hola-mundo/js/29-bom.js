'use strict'

//BOM - Browser Object Model
function getBom(){
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(screen.width);
console.log(screen.height);
console.log(window.location.href);
}

function redirect(url){
    window.location.href = url;
}
getBom();

function abrirVentana(url){
    window.open(url);
}
//redirect('http://google.com)
//abrirVentana("http://google.com")