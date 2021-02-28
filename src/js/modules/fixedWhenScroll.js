function fixedWhenScroll(element, paddingFrom, firstAnimation, secondAnimation) {
    const elem = document.querySelector(element),
        clientHeight = document.documentElement.clientHeight,
        padding = document.querySelector(paddingFrom);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= clientHeight) {
                padding.style.paddingTop = `${elem.clientHeight}px`;
            elem.style.position = 'fixed';
            elem.style.animationName = firstAnimation;
        } else if (window.pageYOffset < clientHeight && window.pageYOffset > elem.clientHeight) {
            elem.style.animationName = secondAnimation;
        } else {
            elem.style.position = '';
            elem.style.animationName = '';
            padding.style.paddingTop = '';
        }
    });
}

export default fixedWhenScroll;