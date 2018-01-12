window.addEventListener('scroll', function(){
    var value = $(window).scrollTop();
    if ( value > 80 ){
        $("header").css("position", "fixed");
        $("header").css("top", "0px");
        $("header").css("z-index", "2000");
        $("header").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
        $(".headerRow1").css("display", "none");
        $(".headerRow2").css("display", "none");
        $(".headerRow3_logo").css("display", "inline-block");
        $("nav").css("width", "100%");
        $("main").css("margin-top", "120px");
        $("main").css("padding-top", "30px");
    }
    else{
        $("header").css({ 'position' : '' , 'top' : '' , 'z-index' : '' });
        $(".headerRow1").css("display", "inline-block");
        $(".headerRow2").css("display", "inline-block");
        $(".headerRow3_logo").css("display", "none");
        $("nav").css("width", "100%");
        $("main").css({ 'margin-top' : '', 'padding-top' : '' });
    }
}, true)
