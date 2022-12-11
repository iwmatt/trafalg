const customer_swiper = new Swiper('.customer__swiper', {
    slidesPerView: 1,
    allowTouchMove: true,
    spaceBetween: 600,
    speed: 500,
    pagination: {
        el: '.customer__swiper-nav',
        type: 'bullets',
      },
  });

  const swipe_left = document.getElementById('customer__swiper-left');
  const swipe_right = document.getElementById('customer__swiper-right');

  swipe_right.addEventListener('click', function() {
    customer_swiper.slideNext();
  });

  swipe_left.addEventListener('click', function() {
    customer_swiper.slidePrev();
  })