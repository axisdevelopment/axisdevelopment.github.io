$(document).ready(function() {

    $(".header-btn").click(function() {
        $("header").addClass("header-hidden");

        setTimeout(function() {
            $(".nav").css({
                visibility: "visible", 
                opacity: "1",
                top: "0px"
            });
        }, 400);       
    });

    $("#show-header").click(function() {
        $("header").removeClass("header-hidden");
        
        $(".nav").css({
            visibility: "hidden", 
            opacity: "0",
            top: "-60px"
        });    
    });

});