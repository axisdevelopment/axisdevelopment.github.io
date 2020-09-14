$(document).ready(function() {

    $(".nav-mobile").click(function() {
        $(".nav-mobile").css({
            width: "220px", 
            height: "240px",
            backgroundColor: "var(--wet-asphalt)",
            backgroundImage: "none",
        });

        $(".nav-mobile nav").css({
            visibility: "visible",
            height: "150px"
        });

        $(".nav-mobile a").css({
            visibility: "visible",
            opacity: "1"
        });

    });

    $(document).click(function(e){
        if (!$(".nav-mobile").is(e.target) && $(".nav-mobile").has(e.target).length === 0) {
            $(".nav-mobile nav").css({
                visibility: "hidden",
                height: "50px",
            });

            $(".nav-mobile").css({
                width: "70px", 
                height: "70px",
                backgroundColor: "var(--midnight-blue)",
                backgroundImage: "url(../../media/icons/mobile-menu.png)"
            });

            $(".nav-mobile a").css({
                visibility: "hidden",
                opacity: "0"
            });
        };
    });

});