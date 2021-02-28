import slider from './modules/slider';
import cards from './modules/cards';
import burger from './modules/burger';
import fixedWhenScroll from './modules/fixedWhenScroll';

window.addEventListener('DOMContentLoaded', function () {
    slider('.main-slider__slide', '.main-slider__wrapper', '.main-slider__inner', '.main-slider__indicators');

    slider('.our-agents__slide', '.our-agents__wrapper', '.our-agents__inner', '.our-agents__indicators');

    slider('.testimonials__slide', '.testimonials__wrapper', '.testimonials__inner', '.testimonials__indicators', 
    '.testimonials__next', '.testimonials__prev');

    cards('.cards__wrapper', 'card');

    fixedWhenScroll('header', '.main-slider', 'fadeIn', 'comeOn');

    burger();


    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= document.documentElement.clientHeight) {
                document.querySelector('.toTopButton').style.display = 'block';
                document.querySelector('.toTopButton').style.animationName = 'fadeIn';
        } else {
            document.querySelector('.toTopButton').style.animationName = 'comeOn';
            setTimeout(() => document.querySelector('.toTopButton').style.display = '', 700);
        }
    });
});