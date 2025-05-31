$(function () {
   
    initialAnimation();
});

function initialAnimation() {
    const demo = document.querySelector('#tabInicial');
    const ruby = demo.querySelectorAll('.ruby');

    animate(ruby, { x: '23rem' });
}