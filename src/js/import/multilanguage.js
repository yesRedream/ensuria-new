// Maintain a supported Language List
var langList = ['en', 'ru', 'ua'];
// Get browser Language
var userLang = navigator.language || navigator.userLanguage;
// extract Language (en-US => en)
userLang = userLang.substring(0, 2);
// Call the function to set language
changeLang(userLang);

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
