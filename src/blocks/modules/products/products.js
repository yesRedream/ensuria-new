import $ from 'jquery';

$('.page-products-toggle__label--business, .link-js--business, .link-footer-js--business').click(function () {
  $('.page-products__list--personal').removeClass("active");
  $('.page-products__list--business').addClass("active");
  $('#business').prop("checked", true);
  $('.header-menu__wrap').removeClass('header-menu__wrap--active');
  $('.header-hamburger').removeClass('header-hamburger--active');

  
});

$('.page-products-toggle__label--personal, .link-js--personal, .link-footer-js--personal').click(function () {
  $('.page-products__list--personal').addClass("active");
  $('.page-products__list--business').removeClass("active");
  $('#personal-use').prop("checked", true);
  $('.header-menu__wrap').removeClass('header-menu__wrap--active');
  $('.header-hamburger').removeClass('header-hamburger--active');
});