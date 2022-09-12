import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$(".page-reviews__slider-js").slick({
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
});

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
startProgressbar();
// End ticking machine

$('.page-reviews-progress__item-js').click(function () {
  clearInterval(tick);
  var goToThisIndex = $(this).find("span").data("slickIndex");
  $('.page-reviews__single-item').slick('slickGoTo', goToThisIndex, false);
  startProgressbar();
});



$('.header__hamburger').click(function(){
  $('.header-menu__wrap').addClass('header-menu__wrap--active');
  $(this).addClass('header-hamburger--active');
});

$('.header-menu__close').click(function(){
  $('.header-menu__wrap').removeClass('header-menu__wrap--active');
  $('.header__hamburger').removeClass('header-hamburger--active');
});

