// Maintain a supported Language List
var langList = ['en', 'ru', 'ua'];
// Get browser Language
var userLang = navigator.language || navigator.userLanguage;
// extract Language (en-US => en)
userLang = userLang.substring(0, 2);
// Call the function to set language

// checkLang(userLang);


// function checkLang(lang) {
//   if (lang === "en" || lang === "ru" || lang === "ua") {
//     changeLang(lang);
//   }
//   else {
//     changeLang('en');
//   }
// }

changeLang('en');

// function to change language
function changeLang(lang) {
  langList.forEach((langEle) => {
    // if language matches, display
    if (langEle == lang) {
      var langElems = document.querySelectorAll('.' + langEle)
      langElems.forEach((elem) => {
        elem.style.display = "block"
      })
    }
    // hide the language text
    else {
      hideLang(langEle)
    }
  })
}

// function to hide language
function hideLang(lang) {
  var langElems = document.querySelectorAll('.' + lang)
  langElems.forEach((elem) => {
    elem.style.display = "none"
  })
}

$('.header-lang__link--en').click(function(){
  changeLang('en');
  $('.header-lang__link--ua').removeClass('header-lang__link--active');
  $('.header-lang__link--ru').removeClass('header-lang__link--active');
  $(this).addClass('header-lang__link--active');
});

$('.header-lang__link--ua').click(function(){
  changeLang('ua');
  $('.header-lang__link--ru').removeClass('header-lang__link--active');
  $('.header-lang__link--en').removeClass('header-lang__link--active');
  $(this).addClass('header-lang__link--active');
});

$('.header-lang__link--ru').click(function(){
  changeLang('ru');
  $('.header-lang__link--ua').removeClass('header-lang__link--active');
  $('.header-lang__link--en').removeClass('header-lang__link--active');
  $(this).addClass('header-lang__link--active');
});

$('.footer-en-js').click(function(){
  changeLang('en');
});

$('.footer-ru-js').click(function(){
  changeLang('ru');
});

$('.footer-ua-js').click(function(){
  changeLang('ua');
});



var navigationSelect = document.querySelector('.select-wrapper');
var navigationSelect2 = document.querySelector('.select-wrapper2');

function initSelect(elem){
  var selectHolder = elem.querySelector('.holder');
  var selectOptions = elem.querySelectorAll('.dropdownOption li');
  var dropHolder = elem.querySelector('.dropdown');
  var selectedOption = selectOptions[0];

  selectedOption.classList.add('current');

  selectHolder.addEventListener('click', function () {
    dropHolder.classList.toggle('active');
   });

  selectOptions.forEach(function(currentElement) {
    currentElement.addEventListener('click', function(){
      selectedOption.classList.remove('current');
      selectedOption = currentElement;
      currentElement.classList.add('current');
      selectHolder.innerText = currentElement.textContent;
      dropHolder.classList.toggle('active');
    });
  });
};

initSelect(navigationSelect);
initSelect(navigationSelect2);