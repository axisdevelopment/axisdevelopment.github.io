$(document).ready(function() {

    var home = $("#home").offset().top;
    var services = $("#services").offset().top;
    var method = $("#method").offset().top;
    var prices = $("#prices").offset().top;
    var contact = $("#contact").offset().top;

    animateButton(1);

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll + 10 >= contact) {
            animateButton(5);
        } else if (scroll + 10 >= prices) {
            animateButton(4);
        } else if (scroll + 10 >= method) {
            animateButton(3);
        } else if (scroll + 10 >= services) {
            animateButton(2);
        } else if (scroll + 10 >= home) {
            animateButton(1);
        } else {

        }
    });

    function animateButton(n) {
        $("#nav-bar .link-box").css({
            "background-color": "var(--gray)",
            "box-shadow": "0px 8px white",
            "color": "white",
        });
        $(`#nav-bar .link-${n}`).css({
            "background-color": "var(--pink)",
            "box-shadow": "0px 8px var(--gray)",
            "color": "var(--gray)",
        });
    };

});