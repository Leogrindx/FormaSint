new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: "swiper-pagination-hidden",
    },

    slidesPerView: "auto",

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: "",
    },

    scrollbar: {
      dragClass: "swiper-scrollbar-drag",
      el: ".swiper-scrollbar",
      dragSize: window.innerWidth > 600 ? 441 : "auto",
      draggable: true,
    },
  });