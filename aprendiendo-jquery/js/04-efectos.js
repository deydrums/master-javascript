$(document).ready(function(){
    console.log("jQuery y la web cargados");

    $('#mostrar').hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        $('#caja').slideDown('slow');
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        $('#caja').slideUp('slow');
    });

    $('#todoenuno').click(function(){
        $('#caja').slideToggle('fast');
    });
});