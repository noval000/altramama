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