import $ from "jquery";
import 'slick-carousel'

$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    prevArrow: $('.prevMain'),
    nextArrow: $('.nextMain'),
    infinite: true,
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true
  });

  $('.slickCards').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    infinite: false,
  });

  $('.slickCards').on('afterChange', function (event, slick, currentSlide) {
    if (currentSlide === 0) {
      $('.prev').addClass('hidden');
    }
    else {
      $('.prev').removeClass('hidden');
    }
  });

  $(document).ready(function() {
    $('.prev').addClass('hidden');
  });
});
