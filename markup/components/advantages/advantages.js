// import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
// import { TweenMax, TimelineMax, Linear } from "gsap"; // Also works with TweenLite and TimelineLite
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
//
// const images = [
//     'static/img/content/sequence-dkc-model/1.jpg',
//     'static/img/content/sequence-dkc-model/2.jpg',
//     'static/img/content/sequence-dkc-model/3.jpg',
//     'static/img/content/sequence-dkc-model/4.jpg',
//     'static/img/content/sequence-dkc-model/5.jpg',
//     'static/img/content/sequence-dkc-model/6.jpg',
//     'static/img/content/sequence-dkc-model/7.jpg',
//     'static/img/content/sequence-dkc-model/8.jpg',
//     'static/img/content/sequence-dkc-model/9.jpg',
//     'static/img/content/sequence-dkc-model/10.jpg',
//     'static/img/content/sequence-dkc-model/11.jpg',
//     'static/img/content/sequence-dkc-model/12.jpg',
//     'static/img/content/sequence-dkc-model/13.jpg',
//     'static/img/content/sequence-dkc-model/14.jpg',
//     'static/img/content/sequence-dkc-model/15.jpg',
//     'static/img/content/sequence-dkc-model/16.jpg',
//     'static/img/content/sequence-dkc-model/17.jpg',
//     'static/img/content/sequence-dkc-model/18.jpg',
//     'static/img/content/sequence-dkc-model/19.jpg',
//     'static/img/content/sequence-dkc-model/20.jpg',
//     'static/img/content/sequence-dkc-model/21.jpg',
//     'static/img/content/sequence-dkc-model/22.jpg',
//     'static/img/content/sequence-dkc-model/23.jpg',
//     'static/img/content/sequence-dkc-model/24.jpg',
//     'static/img/content/sequence-dkc-model/25.jpg',
//     'static/img/content/sequence-dkc-model/26.jpg',
//     'static/img/content/sequence-dkc-model/27.jpg',
//     'static/img/content/sequence-dkc-model/28.jpg',
//     'static/img/content/sequence-dkc-model/29.jpg',
//     'static/img/content/sequence-dkc-model/30.jpg',
//     'static/img/content/sequence-dkc-model/31.jpg',
//     'static/img/content/sequence-dkc-model/32.jpg',
//     'static/img/content/sequence-dkc-model/33.jpg',
//     'static/img/content/sequence-dkc-model/34.jpg',
//     'static/img/content/sequence-dkc-model/35.jpg',
//     'static/img/content/sequence-dkc-model/36.jpg',
//     'static/img/content/sequence-dkc-model/37.jpg',
//     'static/img/content/sequence-dkc-model/38.jpg',
//     'static/img/content/sequence-dkc-model/39.jpg',
//     'static/img/content/sequence-dkc-model/40.jpg',
//     'static/img/content/sequence-dkc-model/41.jpg',
//     'static/img/content/sequence-dkc-model/42.jpg',
//     'static/img/content/sequence-dkc-model/43.jpg',
//     'static/img/content/sequence-dkc-model/44.jpg',
//     'static/img/content/sequence-dkc-model/45.jpg',
//     'static/img/content/sequence-dkc-model/46.jpg',
//     'static/img/content/sequence-dkc-model/47.jpg',
//     'static/img/content/sequence-dkc-model/48.jpg',
//     'static/img/content/sequence-dkc-model/49.jpg',
//     'static/img/content/sequence-dkc-model/50.jpg',
//     'static/img/content/sequence-dkc-model/51.jpg',
//     'static/img/content/sequence-dkc-model/52.jpg',
//     'static/img/content/sequence-dkc-model/53.jpg',
//     'static/img/content/sequence-dkc-model/54.jpg',
//     'static/img/content/sequence-dkc-model/55.jpg',
//     'static/img/content/sequence-dkc-model/56.jpg',
//     'static/img/content/sequence-dkc-model/57.jpg',
//     'static/img/content/sequence-dkc-model/58.jpg',
//     'static/img/content/sequence-dkc-model/59.jpg',
//     'static/img/content/sequence-dkc-model/60.jpg',
//     'static/img/content/sequence-dkc-model/61.jpg',
//     'static/img/content/sequence-dkc-model/62.jpg',
//     'static/img/content/sequence-dkc-model/63.jpg',
//     'static/img/content/sequence-dkc-model/64.jpg',
//     'static/img/content/sequence-dkc-model/65.jpg',
//     'static/img/content/sequence-dkc-model/66.jpg',
//     'static/img/content/sequence-dkc-model/67.jpg',
//     'static/img/content/sequence-dkc-model/68.jpg',
//     'static/img/content/sequence-dkc-model/69.jpg',
//     'static/img/content/sequence-dkc-model/70.jpg',
//     'static/img/content/sequence-dkc-model/71.jpg',
//     'static/img/content/sequence-dkc-model/72.jpg',
//     'static/img/content/sequence-dkc-model/73.jpg',
// ];
// const obj = { curImg: 0 };
//
// const tween = TweenMax.to(obj, 0.5, {
//     curImg: images.length - 1, // animate propery curImg to number of images
//     roundProps: 'curImg', // only integers so it can be used as an array index
//     repeat: 0, // repeat 3 times
//     immediateRender: true, // load first image automatically
//     ease: Linear.easeNone, // show every image the same ammount of time
//     onUpdate: function () {
//         document
//             .querySelector('.advantages__video')
//             .setAttribute('src', images[obj.curImg]);
//     },
// });
//
// // init controller
// const controller = new ScrollMagic.Controller();
//
// // build scene
// const scene = new ScrollMagic.Scene({
//     triggerElement: '.advantages__wrapper',
//     duration: '100%',
//     offset: 200
// })
//     .setTween(tween)
//     .addTo(controller);
