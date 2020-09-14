$(document).ready(function() {

    $(".scroll-to").click(function(e) {
        e.preventDefault();
        $destiny = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $($destiny).offset().top
        }, 600);
    });

});