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
// for sliders =========================================================================================
var arrR = document.querySelector('.arrR')
var arrL = document.querySelector('.arrL')
var boxSlider = document.querySelectorAll('.box-slider')

var x = 0
var y = 0
arrR.addEventListener('click' , function(){
    if ( x == 0 ) {
        x = 1
        y += 300
        boxSlider.forEach(item => {
            item.style.transform = `translateX(${y}px)`
        });
    } else if ( x == 1){
        x = 0
        y += 300
        boxSlider.forEach(item => {
            item.style.transform = `translateX(${y}px)`
        });
    }
})


arrL.addEventListener('click' , function(){
    if ( x == 0 ) {
        x = 1
        y -= 300
        boxSlider.forEach(item => {
            item.style.transform = `translateX(${y}px)`
        });
    } else if ( x == 1){
        x = 0
        y -= 300
        boxSlider.forEach(item => {
            item.style.transform = `translateX(${y}px)`
        });
    }
})







