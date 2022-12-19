import $ from 'jquery';
// import Swiper, { Autoplay, Pagination, Navigation} from 'swiper';

  // import Swiper styles
// import 'swiper/css';


// import 'slick-animation';
if ($(".page-rating-slider__wrapper")[0]){
  // var swiper = new Swiper(".page-rating-slider__wrapper", {});
  var swiper1 = new Swiper('.page-rating-slider__wrapper', {
    slidesPerView: 1.2,
    slidesPerGroup: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    loop: true,
    watchSlidesProgress: true,
    breakpoints: {
      815: {
        slidesPerView: 4.2,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 2.2,
      }
    }
  });
  // $(".page-rating-slider").slick({
  //   infinite: true,
  //   arrows: false,
  //   dots: false,
  //   autoplay: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  //   lazyLoad: 'progressive',
  //   responsive: [
  //     {
  //       breakpoint: 1224,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint:490,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });
}




var init = false;

function swiperCard() {
  if (window.innerWidth >= 815) {
    if (!init) {
      init = true;
      if ($(".companies-insurance__list-wrap")[0]){
        // var swiper = new Swiper(".page-rating-slider__wrapper", {});
        var swiper2 = new Swiper('.companies-insurance__list-wrap', {
          slidesPerView: 3.5,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 8000,
            disableOnInteraction: false
          },
          // loop: true,
          watchSlidesProgress: true,
          breakpoints: {
            1100: {
              slidesPerView: 5.5,
            },
            950: {
              slidesPerView: 4.5,
            }
          }
        });
      }

      if ($(".for-who__list")[0]){
        // var swiper = new Swiper(".page-rating-slider__wrapper", {});
        var swiper3 = new Swiper('.for-who__list', {
          slidesPerView: 'auto',
          slidesPerGroup: 2,
          spaceBetween: 12,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          watchSlidesProgress: true,
        });
      }
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);
