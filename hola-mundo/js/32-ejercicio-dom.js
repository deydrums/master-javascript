'use strict'
window.addEventListener('load', function(){
    console.log('Dom cargado');
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    var box_dashed2 = document.querySelector(".dashed2");
    box_dashed.style.display = 'none';
    box_dashed2.style.display = 'none';

    formulario.addEventListener('submit',function(){
        console.log('Evento submit');

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        box_dashed.style.display = 'block';

        var datos_usuario = [nombre,apellidos,edad];
        var indice;

        for (indice in datos_usuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }

        box_dashed2.style.display = 'block';
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML =apellidos;
        p_edad.innerHTML = edad;
    });


});
