'use strict'

//EVENTOS
//Eventos del raton
window.addEventListener('load', function(){

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
        this.style.border = "10px solid black";
    });

    //Mouse Over
    boton.addEventListener('mouseover',function(){
        boton.style.background = "#ccc";
    });

    //Mouse Out
    boton.addEventListener('mouseout',function(){
        boton.style.background = "yellow";
    });

    //focus
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus',function(){
        console.log("[focus] Estas dentro del input");
    });
    //Blur
    input.addEventListener('blur',function(){
        console.log("[blur] Estas fuera del input");
    });
    //Keydown
    input.addEventListener('keydown',function(event){
        console.log("[keydown] Pulsando la tecla ", String.fromCharCode(event.keyCode));
    });
    //Keypress
    input.addEventListener('keypress',function(event){
        console.log("[keypress] Presionando la tecla ", String.fromCharCode(event.keyCode));
    });
    //Keyup
    input.addEventListener('keyup',function(event){
        console.log("[keyup] Soltando la tecla ", String.fromCharCode(event.keyCode));
    });


}); //END LOAD