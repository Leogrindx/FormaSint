import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
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
    dragSize: window.innerHeight > 600 ? 441 : "auto",
    draggable: true,
  },
});
