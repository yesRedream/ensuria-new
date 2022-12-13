import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

// import 'slick-animation';

 
$(".page-rating-slider").slick({
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  lazyLoad: 'progressive',
  responsive: [
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:490,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
