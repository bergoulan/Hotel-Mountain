//Owl Carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    responsiveClass: true,
    margin:10,
    autoWidth:false,
    navigation:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



// Sticky header gets footer's nav color after scrolling down

$(window).on("scroll", function() {
    if($(window).scrollTop() > 500) {
        $(".navbar").addClass("active");
    } else {
       $(".navbar").removeClass("active");
    }
});






