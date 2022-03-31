$(document).ready(function(){
    $('.home-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<span class="arrow-left"></span>',
        nextArrow: '<span class="arrow-right"></span>',
    });
});