'use strict'
$(document).ready(function() {

    //Mover elemento por la pagina
    $('.elemento').draggable();

    //Redimensionar
    $('.elemento').resizable();

    //Seleccionar y ordenar elementos
    //$(".lista-seleccionable").selectable();
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista");
        }
    });
});
