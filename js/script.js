let btnMenu = document.querySelector('.btn_menu');
let menu = document.querySelector ('.menu');


btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('active');
    menu.classList.toggle('active');
})
// let btnMenu = document.querySelector('.burger')
// let navMenu = document.querySelector('.wrap-top-right')

// btnMenu.addEventListener('click', function() {
//     navMenu.classList.toggle('active')
//     btnMenu.classList.toggle('active')
// })