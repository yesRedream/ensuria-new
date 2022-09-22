import $ from 'jquery';
window.$ = window.jQuery = $;
import * as ScrollMagic from "scrollmagic";
import 'slick-carousel';
import 'animate.css';

import 'slick-animation';
 


const controller = new ScrollMagic.Controller();


$(".page-talk__slider-js").slick({
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: false,
  speed: 800,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}).slickAnimation();

    var percentTime;
    var tick;
    var time = .1;
    var progressBarIndex = 0;

    $('.page-talk-progress__bar-js').each(function(index) {
        var progress = "<div class='inProgressTalk inProgressTalk" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar2() {
        resetProgressbar2();
        percentTime = 0;
        tick = setInterval(interval2, 20);
    }

    function interval2() {
        if (($('.page-talk__slider-js .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.page-talk__slider-js .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar2();
        } else {
            percentTime += 1 / (time + 5);
            $('.inProgressTalk' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.page-talk__single-item').slick('slickNext');
                progressBarIndex++;
                if (progressBarIndex > 2) {
                    progressBarIndex = 0;
                }
                startProgressbar2();
            }
        }
    }

    function resetProgressbar2() {
        $('.inProgressTalk').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    // startProgressbar2();
    // End ticking machine

    $('.page-talk-progress__item-js').click(function () {
    	clearInterval(tick);
    	var goToThisIndex = $(this).find("span").data("slickIndex");
    	$('.page-talk__single-item').slick('slickGoTo', goToThisIndex, false);
    	startProgressbar2();
    });

    new ScrollMagic.Scene({
      triggerElement: '.page__section--talk',
      triggerHook: 0.5,
      offset: 0,
      reverse:false
      
    })
      .on('start', function (event) {
        startProgressbar2();
      })
      // .addIndicators() 
      .addTo(controller);
    