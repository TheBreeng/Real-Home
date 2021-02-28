function burger(target, element) {
    const burger = document.querySelector(target),
          elem = document.querySelector(element);

    burger.addEventListener('click', () => {

        if (elem.style.display == 'none') {
            elem.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            elem.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

export default burger;