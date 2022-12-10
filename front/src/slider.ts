import Swiper from "swiper";

const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    breakpoints: {
        941:{
            slidesPerView: 4.6,
        },
        633:{
            slidesPerView: 2.6,
        }
    }
})
