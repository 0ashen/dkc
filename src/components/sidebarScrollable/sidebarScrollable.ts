document
    .querySelector('.sidebarScrollable__menu')!
    .addEventListener('click', () => {
        document.querySelector('.menu')!.classList.toggle('menu--open');
        document.querySelector('.sidebarScrollable__menu')!.classList.toggle('sidebarScrollable__menu--open');
        document.querySelector('.sidebarScrollable__mobile-logo')!.classList.toggle('sidebarScrollable__mobile-logo--hide');
    });
