var cabecalhoMenu = document.querySelector('.cabecalho__menu');
var menu = document.querySelector('.menu');

cabecalhoMenu.addEventListener('click', ()=>{
    menu.classList.toggle('menu__item--aberto')
})

