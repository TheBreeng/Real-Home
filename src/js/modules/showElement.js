function showElement(element, showAnimation, hideAnimation) {
    const elem = document.querySelector(element);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= document.documentElement.clientHeight) {
            elem.style.display = 'block';
            elem.style.animationName = showAnimation;
        } else {
            elem.style.animationName = hideAnimation;
        }
    });
}

export default showElement;