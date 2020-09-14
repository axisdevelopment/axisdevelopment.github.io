$(document).ready(function() {

    // Initialize Owl Carousel
    $("#testimonials").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        margin: 100,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 1000,
        mouseDrag: false,
    })
    $("#work-1, #work-2, #work-3").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 500
    });

});