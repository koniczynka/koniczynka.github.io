// sroll strony

$(window),scroll(function(){
    if( $(window).scrollTop() >=50) {
        $("#main in-nav").addClass("scroll");
        $("#main in-nav").css({"transition" : "all 0.3s"});
    } else {
        $("#main-nav").removeClass("scroll");
    }
});