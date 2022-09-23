import $ from 'jquery';


// var restartAos = $(".restartAos");
// restartAos.on("click", function() {
//   $(restartAos).removeClass('aos-animate');
//   setTimeout(function() {
//       $(restartAos).addClass('aos-animate');
//   }, 400);
// });

$('.page-products-toggle__label--business, .link-js--business, .link-footer-js--business').click(function () {
  setTimeout(function() {
    $('.page-products__list--personal').removeClass("active");
    $('.page-products__list--business').addClass("active");
    $('#business').prop("checked", true);
    $('.header-menu__wrap').removeClass('header-menu__wrap--active');
    $('.header-hamburger').removeClass('header-hamburger--active');
  }, 300);

  $('.restartAos2').each(function(index) {
    $(this).removeClass('aos-animate');
    setTimeout(function() {
        $('.restartAos2').addClass('aos-animate');
      }, 300);
    });

  $('.restartAos').each(function(index) {
    $(this).removeClass('aos-animate');
    setTimeout(function() {
        $('.restartAos').addClass('aos-animate');
      }, 300);
    });
  });


  



$('.page-products-toggle__label--personal, .link-js--personal, .link-footer-js--personal').click(function () {
  setTimeout(function() {
    $('.page-products__list--personal').addClass("active");
    $('.page-products__list--business').removeClass("active");
    $('#personal-use').prop("checked", true);
    $('.header-menu__wrap').removeClass('header-menu__wrap--active');
    $('.header-hamburger').removeClass('header-hamburger--active');
  }, 300);

  $('.restartAos').each(function(index) {
    $(this).removeClass('aos-animate');
    setTimeout(function() {
        $('.restartAos').addClass('aos-animate');
      }, 300);
    });


  $('.restartAos2').each(function(index) {
    $(this).removeClass('aos-animate');
    setTimeout(function() {
        $('.restartAos2').addClass('aos-animate');
      }, 300);
    });
});


