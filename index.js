const svgInfo = document.querySelector('.svg_info');
const hiddenInfo = document.querySelector('.hidden_info');

const swiper = new Swiper('#productSwiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  centeredSlides: true,
  slideActiveClass: 'swiper-slide-active', 
  initialSlide: 1,
  spaceBetween: -80,
  speed: 1500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
  
const swiper2 = new Swiper('#factorySwiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  slideActiveClass: 'swiper-slide-active preview', 
  initialSlide: 0,
  speed: 1500,
  navigation: {
    nextEl: '.factory_slider_next',
    prevEl: '.factory_slider_prev',
  },
});

const swiper3 = new Swiper('#pharmacySwiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  slideActiveClass: 'swiper-slide-active preview',
  clickable: true,
  speed: 1500,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2000,
  },
});

svgInfo.onmouseover = () => hiddenInfo.style.display = 'block';
svgInfo.onmouseout = () => hiddenInfo.style.display = 'none';
