//cuando la pagina web ha cargado todos los elementos
/*
$(document).ready(function(){
});
*/

//cuando la pagina web ha cargado todos los elementos
$(function(){
    //Añado cdd al segundo parrafo
    $("#segundo").css({"background-color":"red"});

    //Añado cdd al tercer parrafo
    $("#tercero").css({"background-color":"blue"});

    //Pulso el boton HIDE y escondo el segundo parrafo
    $("#botonHide").click(function(){
        $("#segundo").hide()
    });

    //Pulso doble click el boton SHOW y muestro el segundo parrafo
    $("#botonShow").dblclick(function(){
        $("#segundo").show()
    });

    //Cuando entro al primer parrafo lo escondo
    $("#primero").mouseenter(function(){
        $("#primero").hide()
    });

    //Cuando salgo del primer parrafo lo muestro de nuevo
    $("#primero").mouseleave(function(){
        $("#primero").show()
    });

    //Creo animacion de 300px del segundo parrafo
    $("#segundo").animate({"width": "300px"});

    //Cuando puslo el boton ALERT salta alerta con el titulo del segundo parrafo
    $("#botonAlert").click(function(){
        alert($("#segundo").attr("title"));
    });

    //Cuando pulso el boton ADD añado todo esto
    $("#botonAdd").click(function(){
        $("#segundo").append("<b>Adios estudiantes!</b>");
        $("#segundo").prepend("<b>Hola estudiantes!</b>");
        $("#primero").after("<b>AdiosPai</b>");
        $("#tercero").before("<b>HolaPai</b>");
        $("#primero").remove();
        $("#botonHide").empty();
    });

    //Cuando pulso el boton STYLE añado la clase red(css) a h1
    $("#botonStyle").click(function(){
       $("h1").addClass("red");
    });

    //Cuando pulso el boton Non STYLE borro la clase red(css) a h1
    $("#botonNonStyle").click(function(){
        $("h1").removeClass("red");
    });

    //Cuando pulso el boton Toggle STYLE cambio la clase red(css) a la azul del h1
    $("#botonToggleStyle").click(function(){
        $("h1").toggleClass("blue");
    });
    

});