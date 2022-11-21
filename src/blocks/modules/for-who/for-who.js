import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$('.for-who__list').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 815,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
