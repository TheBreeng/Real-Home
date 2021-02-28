function scrollToTop(targetBtn) {
    const target = document.querySelector(targetBtn);

    target.addEventListener('click', () => {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
    });
}

export default scrollToTop;