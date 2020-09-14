$(document).ready(function() {

    $(".card").hover(
        function() {
            var $icon = $(this).data("icon");
            $(this).css({transform: "scale(1.05, 1.05)"});
            $(`[data-iconId="${$icon}"]`).css({opacity: "1"});
    }, 
        function() {
            var $icon = $(this).data("icon");
            $(this).css({transform: "scale(1, 1)"});
            $(`[data-iconId="${$icon}"]`).css({opacity: "0"});
        });

});