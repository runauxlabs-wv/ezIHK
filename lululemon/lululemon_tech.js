var swiper = new Swiper(".productSlide", {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
});
