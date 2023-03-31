$(document).ready(function(){
    $(".cardPrimaria").hover(function(){
        var img_src = $(this).find("img").attr("src");
        var p_text = $(this).find("p").text();
        $("body").append("<div id='cardPreview'><img src='"+img_src+"' alt='Producto'><p>"+p_text+"</p></div>");
    }, function(){
        $("#cardPreview").remove();
    });
});

$(document).ready(function(){
    $(".cardPri").hover(function(){
        var img_src = $(this).find("img").attr("src");
        var p_text = $(this).find("p").text();
        $("body").append("<div id='cardPreview'><img src='"+img_src+"' alt='Producto'><p>"+p_text+"</p></div>");
    }, function(){
        $("#cardPreview").remove();
    });
});