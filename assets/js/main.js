$(document).ready(function(){
    $(".project-popup").magnificPopup({
        type:"image",
        gallery:{
            enabled:true,
        },
    });

    $('.counter').counterUp({
        delay:10,
        time: 2000
    });

    $(".testimonials").slick({
        autoplay:true,
        loop:true,
        arrows:false,
        dots: true,
    });


    //Sticky Menu

    $(window).load(function(){
        $(window).on('scroll', function(){
            if($(this).scrollTop() > 20) {
                $('.header-area').addClass('sticky');
            }else{
                $('.header-area').removeClass('sticky');
            }
        })
    })
});