//@ts-ignore
import Flickity from 'flickity-as-nav-for';

new Flickity('.projectsSlider__slider', {
    prevNextButtons: false,
    pageDots: false,
    // adaptiveHeight: true,
    // cellAlign: 'left',
    // groupCells: true
    // fade: true,
    // wrapAround: true
    setGallerySize: false,
    asNavFor: document.querySelector('.contentSlider'),
});

const slider = new Flickity('.contentSlider', {
    prevNextButtons: false,
    pageDots: false,
    adaptiveHeight: true,
    // cellAlign: 'left',
    // groupCells: true
    // fade: true,
    // wrapAround: true
});

document
    .querySelector('.projectsSlider__wrapper .arrows .prev')!
    .addEventListener('click', function () {
        slider.previous();
    });
document
    .querySelector('.projectsSlider__wrapper .arrows .next')!
    .addEventListener('click', function () {
        slider.next();
    });
