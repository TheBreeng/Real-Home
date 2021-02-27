// import {getResource} from '../services/services';

function slider(slide, wrapper, field, indicator, nextArrow, prevArrow) {
    let slideIndex = 1,
        offset = 0;

    const slides = document.querySelectorAll(slide),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width,
          indicators = document.querySelector(indicator),
          next = document.querySelector(nextArrow),
          prev = document.querySelector(prevArrow),
          dots = [];


    // class Slide {
    //     constructor(src, alt, classes, parentSelector) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.classes = classes;
    //         this.parent = document.querySelector(parentSelector);
    //     }

    //     render() {
    //         const element = document.createElement('div');
    //         element.classList.add(this.classes);
    //         element.innerHTML = `
    //             <img src=${this.src} alt=${this.alt}>
    //         `;
    //         this.parent.append(element);
    //     }
    // }

    // getResource('http://localhost:3000/slides')
    //     .then(data => {
    //         data.forEach(({
    //             img,
    //             altimg
    //         }) => {
    //             new Slide(img, altimg, 'slide', '.slider_inner').render();
    //     });
    // });

    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
        slide.style.width = width;
    });

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    function dotActive() {
        dots.forEach(dot => dot.classList.remove('dot__active'));
        dots[slideIndex - 1].classList.add('dot__active');
    }


    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i === 0) {
            dot.classList.add('dot__active');
        }

        indicators.append(dot);
        dots.push(dot);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            dotActive();
        });
    });

    if (nextArrow) {
        next.addEventListener('click', () => {
            if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2);
            }
    
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }

            dotActive();
        });
    
        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            } else {
                offset -= +width.slice(0, width.length - 2);
            }
    
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }

            dotActive();
        });
    }
    
    // window.onresize = function(){window.location.reload();};
}

export default slider;