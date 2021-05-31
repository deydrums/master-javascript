'use strict'

$(document).ready(function(){
    
    reloadLinks();
    console.log($('a').length);

    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
            $("#menu").prepend('<li><a href="' + $("#add_link").val()+'"></a></li>');
            $("#add_link").val('');
            reloadLinks();
        });



});

function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
        console.log(that);
        var enlace = that.attr('href');
        that.attr('target','_blank');
        that.text(enlace);
    });
}