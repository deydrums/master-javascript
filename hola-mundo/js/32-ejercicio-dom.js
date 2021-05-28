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
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Los apellidos no es valido");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valida");
            return false;
        }


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
