import $ from 'jquery';
window.$ = window.jQuery = $;
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, TweenLite } from "gsap";
import { ScrollMagicPluginGsap, ScrollMagicPluginIndicator } from "scrollmagic-plugins";
import 'slick-carousel';
 
ScrollMagicPluginIndicator(ScrollMagic);
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


const controller2 = new ScrollMagic.Controller();


// SLICK FIRST SLIDER


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
// startProgressbar();
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

new ScrollMagic.Scene({
  triggerElement: '.page__section--reviews',
  triggerHook: 0.5,
  offset: 0,
  
})
  .on('start', function (event) {
    startProgressbar();
  })
  // .addIndicators() 
  .addTo(controller2);


// SLICK SECOND SLIDER


$(".page-talk__slider-js").slick({
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
  
})
  .on('start', function (event) {
    startProgressbar2();
  })
  // .addIndicators() 
  .addTo(controller2);


// IPHONE ANIMATIONS



var w = window.innerWidth;
var tween = new TimelineMax();
var controller;
var size = w > 815 ? "big" : "small";
if (size === "big") {
  makeScrollMagic();
}

function makeScrollMagic() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: '.page__section--get',
    duration: 1800,
    triggerHook: 0
  })
    .setClassToggle(".page-get__item--1", "active")
    // .addIndicators()
    .setPin('.page__section--get')
    .on('start', function (event) {
      $('.page-get__bg').toggleClass('page-get__bg--active');
    
      // if(event.scrollDirection == 'FORWARD') {
      //   $('.page-get__bg').addClass('page-get__bg--active');
      //   console.log("av")
      // }
    })
    .addTo(controller);
  
  new ScrollMagic.Scene({
    triggerElement: ".page__section--get",
    offset: 900,
  })
      .setClassToggle(".page-get__img--step-1, .page-get__item--2", "active")
      .addTo(controller);
  
  
  new ScrollMagic.Scene({
    triggerElement: ".page__section--get", 
    offset: 1500,
  })
      .setClassToggle(".page-get__img--step-2, .page-get__item--3", "active")
      .addTo(controller);
  
  
  new ScrollMagic.Scene({
    triggerElement: ".page__section--get", 
    offset: 1700,
  })
      .setClassToggle(".page-get__img--step-5", "active")
      .addTo(controller);
}

function sizeIt() {
  w = window.innerWidth;
  var newSize = w > 815 ? "big" : "small";
  if (newSize != size) {
    size = newSize;
    if (newSize === "small") {
      TweenMax.set("#target", { clearProps: "all" });
      tween.clear();
      controller.destroy(true);
    } else {
      makeScrollMagic();
    }
  }
}

window.addEventListener("resize", sizeIt);


// ROTATE ANIMATIONS




var person1 = TweenMax.from(".page-compensation-people__person--1", 
  {
    scale: 0,
    rotation: 90,
    opacity: 0
  },
  {
    scale: 1,
    rotation: 0,
    opacity: 1
  }
);

var text1 = TweenMax.from(".page-compensation-people__price--1", 
  {
    scale: 0,
    rotation: -20,
    opacity: 0
  },
  {
    scale: 1,
    rotation: 0,
    opacity: 1
  }
);

var person2 = TweenMax.from(".page-compensation-people__person--2", 
  {
    scale: 0,
    rotation: -80,
    opacity: 0
  },
  {
    scale: 1,
    rotation: 0,
    opacity: 1
  }
);

var text2 = TweenMax.fromTo(".page-compensation-people__price--2", 
  {
    scale: 0,
    rotation: 20,
    opacity: 0
  },
  {
    scale: 1,
    rotation: 0,
    opacity: 1
  }

);

// var person3 = TweenMax.from(".page-compensation-people__person--3", {
//   scale: 0,
//   rotation: -45,
//   opacity: 0
// });

var text3 = TweenMax.from(".page-compensation-people__price--3", 
  {
    scale: 0,
    rotation: -15,
    opacity: 0
  },
  {
    scale: 1,
    rotation: 0,
    opacity: 1
  }
);

var person4 = TweenMax.from(".page-compensation-people__person--4", 
  {
    scale: 0,
    rotation: -45,
    opacity: 0
  },
  {
    scale: 1,
    rotation: 0,
    opacity: 1
  }
);

var text4 = TweenMax.from(".page-compensation-people__price--4", 
  {
    scale: 0,
    rotation: -35,
    opacity: 0
  },
  {
    scale: 1,
    rotation: 0,
    opacity: 1
  }
);


new ScrollMagic.Scene({
  triggerElement: '.page__section--compensation',
  duration: 300,
  triggerHook: 0.5
})
  .setTween(person1)
  // .addIndicators() 
  .addTo(controller2);

new ScrollMagic.Scene({
  triggerElement: '.page__section--compensation',
  duration: 300,
  triggerHook: 0.5,
  offset: 10,

})
  .setTween(text1)
  // .addIndicators() 
  .addTo(controller2);

  
new ScrollMagic.Scene({
  triggerElement: '.page__section--compensation',
  duration: 300,
  triggerHook: 0.5,
  offset: -50,
  
})
  .setTween(person2)
  // .addIndicators() 
  .addTo(controller2);
  
  new ScrollMagic.Scene({
    triggerElement: '.page__section--compensation',
    duration: 300,
    triggerHook: 0.5,
    offset: 20,
    
  })
    .setTween(text2)
    // .addIndicators() 
    .addTo(controller2);

  new ScrollMagic.Scene({
    triggerElement: '.page-compensation-people__price--3',
    duration: 300,
    triggerHook: 1,
    offset: -100,
    
  })
    .setTween(text3)
    // .addIndicators() 
    .addTo(controller2);

  new ScrollMagic.Scene({
    triggerElement: '.page-compensation-people__person--4',
    duration: 300,
    triggerHook: 1,
    offset: -100,
    
  })
    .setTween(person4)
    // .setTween(person4)
    // .addIndicators() 
    .addTo(controller2);

