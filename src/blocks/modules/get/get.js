import $ from 'jquery';
window.$ = window.jQuery = $;
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, TweenLite } from "gsap";
import { ScrollMagicPluginGsap, ScrollMagicPluginIndicator } from "scrollmagic-plugins";
 
ScrollMagicPluginIndicator(ScrollMagic);
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);






if ($( window ).width() >= 815) {

  
}












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