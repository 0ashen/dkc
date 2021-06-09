import Flickity from 'flickity-fade';

const labelsParentNode = document.querySelector('.resources__groups .inner');
document.querySelectorAll('.resources__hidden .group').forEach((el, idx) => {
    labelsParentNode.innerHTML =
        labelsParentNode.innerHTML +
        `<div class='item ${idx === 0 ? 'is-active' : ''}'>${el.querySelector(
            '.title',
        ).textContent}</div>`;
    if (idx === 0) {
        document.querySelector('.resources__slider').innerHTML =
            el.querySelector('.group .body').innerHTML;
    }
});

const slider = new Flickity('.resources__slider', {
    prevNextButtons: false,
    cellAlign: 'left',
    pageDots: false,
    adaptiveHeight: true,
    // groupCells: true
    // fade: true,
    // wrapAround: true
});
document
    .querySelector('.resources__slider-prev')
    .addEventListener('click', function () {
        slider.previous();
    });
document
    .querySelector('.resources__slider-next')
    .addEventListener('click', function () {
        slider.next();
    });

document
    .querySelectorAll('.resources__groups .inner .item')
    .forEach((el, idx) => {
        el.addEventListener('click', () => {
            document
                .querySelector('.resources__groups .inner .item.is-active')
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
                        .querySelectorAll('.resources__hidden .group')
                        [idx].querySelectorAll('.body > *'),
                ].map((el) => el.cloneNode(true)),
                0,
            );
        });
    });
