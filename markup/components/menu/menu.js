document.querySelectorAll('.menu .menu__list-link').forEach((el) => {
    el.addEventListener('click', () => {
        document
            .querySelector('.sidebarScrollable__mobile-logo--hide')
            .classList.remove('sidebarScrollable__mobile-logo--hide');
        document
            .querySelector('.sidebarScrollable__menu--open')
            .classList.remove('sidebarScrollable__menu--open');
        document.querySelector('.menu--open').classList.remove('menu--open');
    });
});
