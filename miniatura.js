/* En esta sección del JS, se implementan 2 funciones jquery, una correspondiente para los elementos de section 
donde se encuentran los div cardPrimaria, y de la seccion aside donde se encuentran los elementos cardpri,
las funciones se activan cuando el cursor pasa por encima del elemento*/

$(document).ready(function(){
    $(".cardPrimaria").hover(function(){ //linea de activación
        var img_src = $(this).find("img").attr("src"); //Creacion de variable para la img
        var p_text = $(this).find("p").text();//creacion de la variable para la descripción
        //en la siguiente linea se genera el nuevo div, al que se le asignan los elementos de las varibales ya definidas
        $("body").append("<div id='cardPreview'><img src='"+img_src+"' alt='Producto'><p>"+p_text+"</p></div>");
    }, function(){
        //dado que el cursor se quite del elemento el div CardPreview generado, pasara a ser eliminado
        $("#cardPreview").remove();
    });
});

/* Las indicaciones de la funcion cardprimaria, se repiten con cardPri, esto se debe ya que los elementos
contienen diferentes estilos, pero la visualizacion en miniaturas es la misma*/

$(document).ready(function(){
    $(".cardPri").hover(function(){
        var img_src = $(this).find("img").attr("src");
        var p_text = $(this).find("p").text();
        $("body").append("<div id='cardPreview'><img src='"+img_src+"' alt='Producto'><p>"+p_text+"</p></div>");
    }, function(){
        $("#cardPreview").remove();
    });
});