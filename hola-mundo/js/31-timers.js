'use strict'

window.addEventListener('load', function(){
    //Time

    function intervalo(){
        var tiempo = setInterval(function(){

            console.log('Set interval ejecutado');
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            }
    
        },500);
        return tiempo;
    }

    var tiempo = intervalo();
    var stop = document.querySelector("#stop");
    var start = document.querySelector("#start");

    stop.addEventListener("click",function(){
        clearInterval(tiempo);
        alert("Has parado el intervalo");
    });

    start.addEventListener("click",function(){
        intervalo();
        alert("Has iniciado el intervalo");
    });

}); //END LOAD