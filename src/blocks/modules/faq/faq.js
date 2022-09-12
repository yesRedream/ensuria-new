// const items = document.querySelectorAll(".accordion__button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('aria-expanded');
  
//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute('aria-expanded', 'false');
//   }
  
//   if (itemToggle == 'false') {
//     this.setAttribute('aria-expanded', 'true');
//   }
// }

// items.forEach(item => item.addEventListener('click', toggleAccordion));

// var $titleTab = $('.accordion__tab');
// // $('.accordion__item:eq(0)').find('.accordion__tab').addClass('accordion__tab--active').next().stop().slideDown(300);
// // $('.accordion__item:eq(0)').find('.accordion__content').find('p').addClass('show');
// $titleTab.on('click', function(e) {
// e.preventDefault();
//   if ( $(this).hasClass('accordion__tab--active') ) {
//     $(this).removeClass('accordion__tab--active');
//     $(this).next().stop().slideUp(300);
//     $(this).next().find('p').removeClass('show');
//   } else {
//     $(this).addClass('accordion__tab--active');
//     $(this).next().stop().slideDown(300);
//     $(this).parent().siblings().children('.accordion__tab').removeClass('accordion__tab--active');
//     $(this).parent().siblings().children('.accordion__content').slideUp(300);
//     $(this).parent().siblings().children('.accordion__content').find('p').removeClass('show');
//     $(this).next().find('p').addClass('show');
//   }
// });

