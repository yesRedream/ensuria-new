import $ from 'jquery';

$('.page-products-toggle__label--business').click(function () {
  $('.page-products__list--personal').css("display", "none");
  $('.page-products__list--business').css("display", "flex");
});

$('.page-products-toggle__label--personal').click(function () {
  $('.page-products__list--personal').css("display", "flex");
  $('.page-products__list--business').css("display", "none");
});