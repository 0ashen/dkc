document
    .querySelectorAll('.welcome__list-item, .welcome__empty-option')
    .forEach((el) => {
        el.addEventListener('click', () => {
            document
                .querySelector('body')
                // @ts-ignore
                .classList.add(el.dataset.disableClass);
            document
                .querySelector('.welcome')
                // @ts-ignore
                .classList.add('welcome--hide');
        });
    });
