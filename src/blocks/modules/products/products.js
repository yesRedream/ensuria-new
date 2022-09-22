import $ from 'jquery';

$('.page-products-toggle__label--business, .link-js--business, .link-footer-js--business').click(function () {
  $('.page-products__list--personal').css("display", "none");
  $('.page-products__list--business').css("display", "flex");
  console.log('aboba');
});

$('.page-products-toggle__label--personal, .link-js--personal, .link-footer-js--personal').click(function () {
  $('.page-products__list--personal').css("display", "flex");
  $('.page-products__list--business').css("display", "none");
});