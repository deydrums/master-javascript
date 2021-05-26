'use strict'

//EVENTOS
//Eventos del raton

var boton = document.querySelector('#boton');

function cambiarColor() {
    console.log('Me diste click');

    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";

    }else{
        boton.style.background = "green";
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc"
    return true;
   
}

var boton = document.querySelector('#boton');

//Evento Click
boton.addEventListener('click',function(){
    cambiarColor();
});

//Mouse Over
boton.addEventListener('mouseover',function(){
    boton.style.background = "#ccc";
});

//Mouse Out
boton.addEventListener('mouseout',function(){
    boton.style.background = "yellow";
});