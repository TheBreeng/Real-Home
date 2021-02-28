import slider from './modules/slider';
import cards from './modules/cards';
import burger from './modules/burger';
import fixedWhenScroll from './modules/fixedWhenScroll';
import showElement from './modules/showElement';
import scrollToTop from './modules/scrollToTop';

window.addEventListener('DOMContentLoaded', function () {
    slider('.main-slider__slide', '.main-slider__wrapper', '.main-slider__inner', '.main-slider__indicators');

    slider('.our-agents__slide', '.our-agents__wrapper', '.our-agents__inner', '.our-agents__indicators');

    slider('.testimonials__slide', '.testimonials__wrapper', '.testimonials__inner', '.testimonials__indicators', 
    '.testimonials__next', '.testimonials__prev');

    cards('.cards__wrapper', 'card');

    fixedWhenScroll('header', '.main-slider', 'showAnimation', 'hideAnimation');

    showElement('.toTopButton', 'showAnimation', 'hideAnimation');

    scrollToTop('.toTopButton');

    burger('.burger-label', '.menu-mobile');
});