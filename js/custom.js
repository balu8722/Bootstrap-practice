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
$(function () {
  var header = $(".top-header");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});
/* javscrift for counter */
$(document).ready(function() {

  $('.counter').each(function () {
  $(this).prop('Counter',0).animate({
  Counter: $(this).text()
  }, {
  duration: 4000,
  easing: 'swing',
  step: function (now) {
  $(this).text(Math.ceil(now));
  }
  });
  });
  
});
/* javscrift for counter ends */
  
  /* javscrift for crew-slider starts */
$('.crew-slick').slick({
      dots: false,
      infinite: true,
      speed: 300,
      prevArrow: '<span class="arrow-left"></span>',
      nextArrow: '<span class="arrow-right"></span>',
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
      },
      {
        breakpoint: 480,
        settings: {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});