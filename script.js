// for menu ============================================================================================
var iconMenu = document.querySelector('.mdi-menu')
var menuRight = document.querySelector('.menu-open')
var ul = document.querySelector('ul')

iconMenu.addEventListener('click' , function(){
    // iconMenu.classList('animate__animated animate__shakeX')
    menuRight.style.width = '400px'
    menuRight.style.opacity = 1
    menuRight.style.visibility = 'visible'
    ul.style.opacity = 1
})

var closeMenu = document.querySelector('.mdi-close')
closeMenu.addEventListener('click' , function(){
    menuRight.style.width = '0px'
    menuRight.style.opacity = 0
    menuRight.style.visibility = 'hidden'
})








