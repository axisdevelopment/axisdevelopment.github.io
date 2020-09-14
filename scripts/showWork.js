$(document).ready(function() {

    $("[data-work]").click(function() {

        var currentId = $(this).attr("data-work");
        var otherIds = "123".split(currentId).join("").split("");

        // Customize
        $(this).css({backgroundColor: "var(--wet-asphalt)", color: "white"});
        $(`[data-work=${otherIds[0]}]`).css({backgroundColor: "var(--clouds)", color: "black"});
        $(`[data-work=${otherIds[1]}]`).css({backgroundColor: "var(--clouds)", color: "black"});
        // Hide
        $(`#work-${otherIds[0]}`).css({display: "none"});
        $(`#work-${otherIds[1]}`).css({display: "none"});
        // Stop carousel
        $(`#work-${otherIds[0]}`).trigger('stop.owl.autoplay');
        $(`#work-${otherIds[1]}`).trigger('stop.owl.autoplay');
        // Display and enable carousel for current pick
        $(`#work-${currentId}`).css({display: "inline-block"})
        $(`#work-${currentId}`).owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 500
        });

    })

    // Set default
    $("[data-work=1]").trigger("click");
    
});