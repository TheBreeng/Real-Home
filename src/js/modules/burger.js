function burger() {
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
}

export default burger;