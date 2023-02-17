const swiper = new Swiper(".swiper--main", {
  direction: 'vertical',
  mousewheel: true,
  touchRatio: 3,
  shortSwipes: false,

  hashNavigation: {
    watchState: true
  },

  on: {
    init: function () {
      this.slideTo(this.hashNavigation.getCurrentIndex());
    }
  },

  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination",
    clickable: true, //この行を追記する
  },
});

const swiperVideo = new Swiper(".swiper--video", {
  direction: 'horizontal',
  // ページネーションが必要なら追加
  loop: 'true',

  effect: 'slide',
  slidesPerView: 1, // 画像の表示枚数
  spaceBetween: 0, // 画像間の余白（px）
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: 'true',
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  }
});
console.log(swiperVideo);
