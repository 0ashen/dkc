document.querySelectorAll('.configurator__row-option')!.forEach((el) => {
    el.addEventListener('click', () => {
        el.closest('.configurator__row-inner')!
            .querySelectorAll('.configurator__row-option')
            .forEach((el) => {
                el.classList.remove('is-active');
            });
        el.classList.add('is-active');
    });
});
