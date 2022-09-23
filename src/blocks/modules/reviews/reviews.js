import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';
import * as ScrollMagic from "scrollmagic";
import '../../../js/import/slick-animate';

// import 'slick-animation';

const controller = new ScrollMagic.Controller();
 
$(".page-reviews__slider-js").slick({
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: false,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'progressive',
}).slickAnimation();

var percentTime;
var tick;
var time = .1;
var progressBarIndex = 0;

$('.page-reviews-progress__bar-js').each(function(index) {
    var progress = "<div class='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);
});

function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 40);
}

function interval() {
    if (($('.page-reviews__slider-js .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
        progressBarIndex = $('.page-reviews__slider-js .slick-track div[aria-hidden="false"]').data("slickIndex");
        startProgressbar();
    } else {
        percentTime += 1 / (time + 5);
        $('.inProgress' + progressBarIndex).css({
            width: percentTime + "%"
        });
        if (percentTime >= 100) {
            $('.page-reviews__single-item').slick('slickNext');
            progressBarIndex++;
            if (progressBarIndex > 2) {
                progressBarIndex = 0;
            }
            startProgressbar();
        }
    }
}

function resetProgressbar() {
    $('.inProgress').css({
        width: 0 + '%'
    });
    clearInterval(tick);
}
// startProgressbar();
// End ticking machine

$('.page-reviews-progress__item-js').click(function () {
  clearInterval(tick);
  var goToThisIndex = $(this).find("span").data("slickIndex");
  $('.page-reviews__single-item').slick('slickGoTo', goToThisIndex, false);
  startProgressbar();
});


new ScrollMagic.Scene({
  triggerElement: '.page__section--reviews',
  triggerHook: 0.5,
  offset: 0,
  reverse:false
  
})
  .on('start', function (event) {
    startProgressbar();
  })
  // .addIndicators() 
  .addTo(controller);

