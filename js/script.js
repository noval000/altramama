const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
});


if(window.innerWidth < 1111) {
    $('.nameCardGallery').readmore({
        speed: 2000, //в миллисекундах
        collapsedHeight: 250, //в пикселях, можно задать, как атрибут непосредственно на самом блоке
        heightMargin: 16, //в пикселях, позволяет избежать ломания блоков, которые лишь немного больше заданной высоты - collapsedHeight
        lessLink: '<p class="more"><a href="#" class="">Свернуть</a></p>',
        moreLink: '<p class="more"><a href="#" class="">Читать полностью</a></p>',
        embedCSS: true, //вставляет динамический CSS стили, установите false, если все стили вы будете подключаать сами в своём файле стилей
        blockCSS: 'display: block; width: 100%;', //устанавливает стиль блоков
        startOpen: false, //по дефолту блок скрыт, при параметре true - текст будет показан полностью, но с возможностью скрыть
        blockProcessed: function() {}, //функция вызываемая во время инициализации плагина для каждого блока
        afterToggle: function() {}, //функция вызываемая после того, как блок развернется или свернется
        beforeToggle: function() {} //функция вызываемая после нажатия на кнопку "Подробнее" или "Скрыть", но до того, как блок свернется или развернется
    });
} else {
    $('.nameCardGallery').readmore({
        speed: 2000, //в миллисекундах
        collapsedHeight: 300, //в пикселях, можно задать, как атрибут непосредственно на самом блоке
        heightMargin: 16, //в пикселях, позволяет избежать ломания блоков, которые лишь немного больше заданной высоты - collapsedHeight
        lessLink: '<p class="more"><a href="#" class="">Свернуть</a></p>',
        moreLink: '<p class="more"><a href="#" class="">Читать полностью</a></p>',
        embedCSS: true, //вставляет динамический CSS стили, установите false, если все стили вы будете подключаать сами в своём файле стилей
        blockCSS: 'display: block; width: 100%;', //устанавливает стиль блоков
        startOpen: false, //по дефолту блок скрыт, при параметре true - текст будет показан полностью, но с возможностью скрыть
        blockProcessed: function() {}, //функция вызываемая во время инициализации плагина для каждого блока
        afterToggle: function() {}, //функция вызываемая после того, как блок развернется или свернется
        beforeToggle: function() {} //функция вызываемая после нажатия на кнопку "Подробнее" или "Скрыть", но до того, как блок свернется или развернется
    });
}



if (window.innerWidth < 814) {
    $('.nameCardGalleryPage2').readmore({
        speed: 2000, //в миллисекундах
        collapsedHeight: 250, //в пикселях, можно задать, как атрибут непосредственно на самом блоке
        heightMargin: 16, //в пикселях, позволяет избежать ломания блоков, которые лишь немного больше заданной высоты - collapsedHeight
        lessLink: '<p class="more2" style="margin-bottom: 10px;"><a href="#" class="">Свернуть</a></p>',
        moreLink: '<p class="more2" style="margin-bottom: 10px;"><a href="#" class="">Читать полностью</a></p>',
        embedCSS: false, //вставляет динамический CSS стили, установите false, если все стили вы будете подключаать сами в своём файле стилей
        blockCSS: 'display: block; width: 100%;', //устанавливает стиль блоков
        startOpen: false, //по дефолту блок скрыт, при параметре true - текст будет показан полностью, но с возможностью скрыть
        blockProcessed: function() {}, //функция вызываемая во время инициализации плагина для каждого блока
        afterToggle: function() {}, //функция вызываемая после того, как блок развернется или свернется
        beforeToggle: function() {} //функция вызываемая после нажатия на кнопку "Подробнее" или "Скрыть", но до того, как блок свернется или развернется
    });

}



/*    выезжающее меню    */


const menuBurger = document.querySelector('.burgerMenu');
const btnCloseMenu = document.querySelector('.btnCloseMenu');
const mobileNav = document.querySelector('.mobileNav');


menuBurger.addEventListener('click' , e => {
    mobileNav.classList.remove('noneMenu');
    mobileNav.classList.add('active');
})

btnCloseMenu.addEventListener('click' , e => {
    mobileNav.classList.remove('active');
    mobileNav.classList.add('noneMenu');
})




const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    mousewheel: true,
    mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
    },
    longSwipesMs: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    edgeSwipeDetection: 'prevent',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
//
// const point_wrap  = document.querySelector('.ourProgramms ');
// var w_height = document.documentElement.clientHeight;
// var point_wrapSourceBottom = point_wrap.getBoundingClientRect().bottom + window.pageYOffset - w_height;
// let y = 0; // Initialize a variable to keep track of the scroll position
//
// window.onscroll = function() {
//
//     if(window.pageYOffset > point_wrapSourceBottom) {
//         window.addEventListener("scroll", function(e) {
//             // Check if the window has been scrolled down
//             if (window.scrollY > y) {
//                 swiper.slideNext(); // Scroll the slider to the next slide
//             } else {
//                 swiper.slidePrev(); // Scroll the slider to the previous slide
//             }
//
//             // Update the scroll position variable
//             y = window.scrollY;
//         });
//     }
// };




