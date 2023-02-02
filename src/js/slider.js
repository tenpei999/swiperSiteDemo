const swiper = new Swiper('.swiper-concept', {

  direction: 'vertical',
  slidesPerView: 1,
  loop: false,
  speed: 1500,
  mousewheel: true,
  visibilityFullFit: true,
  onlyExternal: false,
  scrollContainer: true,
  touchRatio: 3,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },


  on: {
    // 切り替わりのアニメーションが終了したとき
    slideChangeTransitionEnd: function () {

      swipe_action(),
        swipe_actionText();
    }
  }

});

function swipe_action() {

  if (swiperConcept.activeIndex == 3) {
    jQuery('.p-concept__bg.bg-3-before').css('animation', 'Scale 10s ease-in');
    jQuery('.p-concept__bg.bg-3-before').css('scale', '2.5');
  } else {
    jQuery('.p-concept__bg.bg-3-before').css('animation', '');
    jQuery('.p-concept__bg.bg-3-before').css('scale', '0');
  }
}

function swipe_actionText() {
  media();
  jQuery(window).on("resize", function () { media(); });

  // メディアクエリ
  function media() {
    // 横幅を取得
    let width = $(window).width();
    if (width > 767) {

      if (swiperConcept.activeIndex == 1) {
        jQuery('.slide-1 .slide-inner .p-concept__title--flip.first').css('animation', 'conceptTextSecondTitle 10s ease-in-out');
        jQuery('.slide-1 .slide-inner .p-concept__title--flip.first').css('opacity', '1');
        jQuery('.p-concept__text.second').css('animation', 'conceptTextSecondText 10s ease-in-out');
        jQuery('.p-concept__text.second').css('opacity', '1');
      } else {
        jQuery('.slide-1 .slide-inner .p-concept__title--flip.first').css('animation', '');
        jQuery('.slide-1 .slide-inner .p-concept__title--flip.first').css('opacity', '0');
        jQuery('.p-concept__text.second').css('animation', '');
        jQuery('.p-concept__text.second').css('opacity', '0');
      }
      if (swiperConcept.activeIndex == 2) {
        jQuery('.slide-2 .slide-inner .p-concept__title--flip.second').css('animation', 'conceptTextThirdTitle 10s ease-in-out');
        jQuery('.slide-2 .slide-inner .p-concept__title--flip.second').css('opacity', '1');
        jQuery('.p-concept__text.third').css('animation', 'conceptTextThirdText 10s ease-in-out');
        jQuery('.p-concept__text.third').css('opacity', '1');
      } else {
        jQuery('.slide-2 .slide-inner .p-concept__title--flip.second').css('animation', '');
        jQuery('.slide-2 .slide-inner .p-concept__title--flip.second').css('opacity', '0');
        jQuery('.p-concept__text.third').css('animation', '');
        jQuery('.p-concept__text.third').css('opacity', '0');
      }
      if (swiperConcept.activeIndex == 3) {
        jQuery('.slide-3 .slide-inner .p-concept__title--flip.third').css('animation', 'conceptTextFourthTitle 10s ease-in-out');
        jQuery('.slide-3 .slide-inner .p-concept__title--flip.third').css('opacity', '1');
        jQuery('.p-concept__text.fourth').css('animation', 'conceptTextFourthText 10s ease-in-out');
        jQuery('.p-concept__text.fourth').css('opacity', '1');
        jQuery('.p-concept__to-front-page span').css('animation', 'toFrontText 10s');
        jQuery('.p-concept__to-front-page span').css('opacity', '1');
      } else {
        jQuery('.slide-3 .slide-inner .p-concept__title--flip.third').css('animation', '');
        jQuery('.slide-3 .slide-inner .p-concept__title--flip.third').css('opacity', '0');
        jQuery('.p-concept__text.fourth').css('animation', '');
        jQuery('.p-concept__text.fourth').css('opacity', '0');
      }
    }
  }
}
