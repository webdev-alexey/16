import Timer from "./classes/timers/base";
import TimerFormatted from "./classes/timers/formatted";
import Swiper from "swiper";
import Slider from "./classes/sliders/base";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", function () {
  new Timer(".timer1", 200);
  new TimerFormatted(".timer2", 100);
  new Slider(".gallery-1");

  const swiper = new Swiper(".products", {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      780: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
});

import "./assets/style.css";
