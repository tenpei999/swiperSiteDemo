const swiper = new Swiper(".swiper", {
  direction: 'vertical',
  mousewheel: true,
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

const swiperVideo = new Swiper(".swiper-video", {
  direction: 'horizontal',
  // ページネーションが必要なら追加
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