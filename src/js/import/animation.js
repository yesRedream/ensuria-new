import $ from 'jquery';
window.$ = window.jQuery = $;
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, TweenLite } from "gsap";
import { ScrollMagicPluginGsap, ScrollMagicPluginIndicator } from "scrollmagic-plugins";
import 'slick-carousel';
// import 'jquery.scrollto';

ScrollMagicPluginIndicator(ScrollMagic);
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


const controller2 = new ScrollMagic.Controller();


// HAMBURGER



$('.header__hamburger').click(function(){
  $('.header-menu__wrap').addClass('header-menu__wrap--active');
  $(this).addClass('header-hamburger--active');
});

$('.header-menu__close').click(function(){
  $('.header-menu__wrap').removeClass('header-menu__wrap--active');
  $('.header__hamburger').removeClass('header-hamburger--active');
});




// IPHONE ANIMATIONS



var w = window.innerWidth;
var tween = new TimelineMax();
// var controller;
// var size = w > 815 ? "big" : "small";
// if (size === "big") {
//   makeScrollMagic();
// }

const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: '.page__section--get',
    duration: 2000,
    triggerHook: 0
  })
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
    .setClassToggle(".page-get__img--step-1", "active")
    .on('start', function (event) {
      if(event.scrollDirection == 'FORWARD') {
        $('.page-get__item--1').removeClass('active');
        $('.page-get__item--2').addClass('active');
        $('.page-get__item--3').removeClass('active');
      } else {
        $('.page-get__item--1').addClass('active');
        $('.page-get__item--2').removeClass('active');
        $('.page-get__item--3').removeClass('active');

      }
    })
    // .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: ".page__section--get", 
    offset: 1500,
  })
      .setClassToggle(".page-get__img--step-2", "active")
      .on('start', function (event) {
        if(event.scrollDirection == 'FORWARD') {
          $('.page-get__item--1').removeClass('active');
          $('.page-get__item--2').removeClass('active');
          $('.page-get__item--3').addClass('active');
        } else {
          $('.page-get__item--1').removeClass('active');
          $('.page-get__item--2').addClass('active');
          $('.page-get__item--3').removeClass('active');
        }
      })
      // .addIndicators()
      .addTo(controller);
  
  
  new ScrollMagic.Scene({
    triggerElement: ".page__section--get", 
    offset: 2000,
  })
      .setClassToggle(".page-get-success", "active")
      // .addIndicators()
      .addTo(controller);

// function makeScrollMagic() {
//   const controller = new ScrollMagic.Controller();

//   new ScrollMagic.Scene({
//     triggerElement: '.page__section--get',
//     duration: 2000,
//     triggerHook: 0
//   })
//     .setPin('.page__section--get')
//     .on('start', function (event) {
//       $('.page-get__bg').toggleClass('page-get__bg--active');
    
//       // if(event.scrollDirection == 'FORWARD') {
//       //   $('.page-get__bg').addClass('page-get__bg--active');
//       //   console.log("av")
//       // }
//     })
//     .addTo(controller);
  
//   new ScrollMagic.Scene({
//     triggerElement: ".page__section--get",
//     offset: 900,
//   })
//       .setClassToggle(".page-get__img--step-1", "active")
//       .on('start', function (event) {
//         if(event.scrollDirection == 'FORWARD') {
//           $('.page-get__item--1').removeClass('active');
//           $('.page-get__item--2').addClass('active');
//           $('.page-get__item--3').removeClass('active');
//         } else {
//           $('.page-get__item--1').addClass('active');
//           $('.page-get__item--2').removeClass('active');
//           $('.page-get__item--3').removeClass('active');

//         }
//       })
//       // .addIndicators()
//       .addTo(controller);
  
// // $(".page-get__item--1").click(function (){
// //   $('html, body').animate({
// //     scrollTop: $(".page__section--get").offset().top-300
// //   }, 0);
// // });

// // $(".page-get__item--2").click(function (){
// //   $('body').scrollTo(3500);
// // });

// // $(".page-get__item--3").click(function (){
// //   $('body').scrollTo(4000);
// // });

 
// // $(".page-get__item--1").click(function (event){
// //   $('html, body').animate({
// //     scrollTop: $(".page__section--get").offset().top+300
// //   }, 0);
// // });

// // $(".page-get__item--2").click(function (event){
// //   $('html, body').animate({
// //     scrollTop: $(".page__section--get").offset().top+1000
// //   }, 0);
// // });

// // $(".page-get__item--3").click(function (event){
// //   $('html, body').animate({
// //     scrollTop: $(".page__section--get").offset().top+1600
// //   }, 0);
// // });


// // $(document).ready(function(){
// //   $( "a" ).click(function( event ) {
// //       event.preventDefault();
// //       $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
// //   });
// // });

  
//   new ScrollMagic.Scene({
//     triggerElement: ".page__section--get", 
//     offset: 1500,
//   })
//       .setClassToggle(".page-get__img--step-2", "active")
//       .on('start', function (event) {
//         if(event.scrollDirection == 'FORWARD') {
//           $('.page-get__item--1').removeClass('active');
//           $('.page-get__item--2').removeClass('active');
//           $('.page-get__item--3').addClass('active');
//         } else {
//           $('.page-get__item--1').removeClass('active');
//           $('.page-get__item--2').addClass('active');
//           $('.page-get__item--3').removeClass('active');
//         }
//       })
//       // .addIndicators()
//       .addTo(controller);
  
  
//   new ScrollMagic.Scene({
//     triggerElement: ".page__section--get", 
//     offset: 2000,
//   })
//       .setClassToggle(".page-get__img--step-5", "active")
//       // .addIndicators()
//       .addTo(controller);
// }

// function sizeIt() {
//   w = window.innerWidth;
//   var newSize = w > 815 ? "big" : "small";
//   if (newSize != size) {
//     size = newSize;
//     if (newSize === "small") {
//       TweenMax.set("#target", { clearProps: "all" });
//       tween.clear();
//       controller.destroy(true);
//     } else {
//       makeScrollMagic();
//     }
//   }
// }

// window.addEventListener("resize", sizeIt);


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
  offset: 0,
  
})
  .setTween(text3)
  // .addIndicators() 
  .addTo(controller2);

new ScrollMagic.Scene({
  triggerElement: '.page-compensation-people__person--4',
  duration: 300,
  triggerHook: 1,
  offset: -30,
  
})
  .setTween(person4)
  // .setTween(person4)
  // .addIndicators() 
  .addTo(controller2);

  new ScrollMagic.Scene({
    triggerElement: '.page-compensation-people__person--4',
    duration: 300,
    triggerHook: 1,
    offset: -30,
    
  })
    .setTween(text4)
    // .setTween(person4)
    // .addIndicators() 
    .addTo(controller2);
  
  



$(document).on("click", "a[href^='#']", function (e) {
  var id = $(this).attr("href");
  if ($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

      // if supported by the browser we can even update the URL.
    // if (window.history && window.history.pushState) {
    //   history.pushState("", document.title, id);
    // }
  }
});