let btnMenu = document.querySelector('.btn_menu');
let menu = document.querySelector ('.menu');


btnMenu.addEventListener('click', function() {
    menu.classList.toggle('active');
})