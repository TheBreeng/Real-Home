import slider from './modules/slider';
import cards from './modules/cards';

window.addEventListener('DOMContentLoaded', function () {
    slider('.main-slider__slide', '.main-slider__wrapper', '.main-slider__inner', '.main-slider__indicators');

    slider('.our-agents__slide', '.our-agents__wrapper', '.our-agents__inner', '.our-agents__indicators');

    slider('.testimonials__slide', '.testimonials__wrapper', '.testimonials__inner', '.testimonials__indicators', 
    '.testimonials__next', '.testimonials__prev');

    cards('.cards__wrapper', 'card');
});


const burger = document.querySelector('.burger-label');
burger.addEventListener('click', () => {
    let display = document.querySelector('.menu-mobile').style.display;
    if (display == 'none') {
        document.querySelector('.menu-mobile').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        document.querySelector('.menu-mobile').style.display = 'none';
        document.body.style.overflow = '';
    }
});