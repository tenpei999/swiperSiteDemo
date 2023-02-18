const swiper = new Swiper(".swiper--main", {
  direction: 'vertical',
  mousewheel: true,
  touchRatio: 3,
  shortSwipes: false,
  resistance: false,

  hashNavigation: {
    watchState: true
  },

  on: {
    init: function () {
      this.slideTo(this.hashNavigation);
      if (this.activeIndex == 0) {
        document.querySelector('.u-button-totop').classList.add('is-top')
      } else {
        document.querySelector('.u-button-totop').classList.remove('is-top')
      }
    },
    slideChange: function () {
      //スライドが変わった時の処理
      if (this.activeIndex != 0) {
        document.querySelector('.u-button-totop').classList.remove('is-top')
        document.querySelector('.u-button-totop').style.display = 'block';
      } else {
        document.querySelector('.u-button-totop').classList.add('is-top')
      };

      if (this.activeIndex !== 2) {
        document.querySelectorAll('.c-tb').forEach(item => item.classList.add('js-fadeIn'));
      } else {
        document.querySelectorAll('.c-tb.js-fadeIn').forEach(item => item.classList.remove('js-fadeIn'));
      };
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

//swiperでボタンを押したらtopに戻るjavascriptの記述

// イベント関数
function goTop() {
  // Swiperオブジェクトを取得
  const mySwiper = document.querySelector('.swiper--main').swiper;
  // Swiperのスクロールを最上部に移動
  mySwiper.slideTo(0);
}

// HTML要素を取得
const btn = document.querySelector('.u-button-totop');
// イベントリスナーを設定
btn.addEventListener('click', goTop);