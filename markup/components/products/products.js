import Flickity from 'flickity-fade';

const labelsParentNode = document.querySelector('.products__groups .inner');
document.querySelectorAll('.products__hidden .group').forEach((el, idx) => {
    labelsParentNode.innerHTML =
        labelsParentNode.innerHTML +
        `<div class='item ${idx === 0 ? 'is-active' : ''}'>${el.querySelector(
            '.title',
        ).textContent}</div>`;
    if (idx === 0) {
        document.querySelector('.products__slider').innerHTML =
            el.querySelector('.group .body').innerHTML;
    }
});

const slider = new Flickity('.products__slider', {
    prevNextButtons: false,
    cellAlign: 'left',
    pageDots: false,
    // groupCells: true
    // fade: true,
    // wrapAround: true
});
document
    .querySelector('.products__slider-prev')
    .addEventListener('click', function () {
        slider.previous();
    });
document
    .querySelector('.products__slider-next')
    .addEventListener('click', function () {
        slider.next();
    });

document
    .querySelectorAll('.products__groups .inner .item')
    .forEach((el, idx) => {
        el.addEventListener('click', () => {
            document
                .querySelector('.products__groups .inner .item.is-active')
                .classList.remove('is-active');
            el.classList.add('is-active');
            slider.remove(
                slider.cells.map((el) => {
                    return el.element;
                }),
            );
            slider.insert(
                [
                    // @ts-ignore
                    ...document
                        .querySelectorAll('.products__hidden .group')
                        [idx].querySelectorAll('.body > *'),
                ].map((el) => el.cloneNode(true)),
                0,
            );
            slider.select(0);
        });
    });
