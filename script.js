// for menu ============================================================================================
var iconMenu = document.querySelector('.mdi-menu')
var menuRight = document.querySelector('.menu-open')
var ul = document.querySelector('ul')

iconMenu.addEventListener('click' , function(){
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



// dark mode & light mode ==========================================================================
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
const me = document.querySelector('.general-left img')
const myLogo = document.querySelector('.header-left img')
const select = document.querySelector('#select')
const iconPallete = document.querySelector('.mdi-palette')

const banafshMedium = document.querySelectorAll('.banafsh-color-md')
const textBlack = document.querySelectorAll('.text-black')
const bgLight = document.querySelectorAll('.bg-white')
const bgBanafshMd = document.querySelectorAll('.bgd-banafsh-md')
const brdrBanafshMd = document.querySelectorAll('.brdr-banafsh-md')
const chooseColor = document.querySelectorAll('.choose-color')
const options = document.querySelectorAll('option')
const corrects = document.querySelectorAll('.list-unstyled img')
const cashs = document.querySelectorAll('.gp-title-price img')
const hovers = document.querySelectorAll('.hovers')

function showOptionsSelect (){
    select.classList.toggle("show") 
}
iconPallete.addEventListener('click' , showOptionsSelect)

function changMoon() {
    if (select.value == 'blue') {
        myLogo.src = 'assets/bg-blue-dark.png'
        corrects.forEach(element => {
            element.src = 'assets/c-dark-blue.png'
        });
        cashs.forEach(el2 => {
            el2.src = 'assets/cash-blue.png'
        });
        banafshMedium.forEach(t1 =>{
            t1.classList.remove('red-color-md' , 'yellow-color-md', 'green-color-md', 'banafsh-color-md' ,'pink-color-md' ,'blue-color-lit')
            t1.classList.remove('red-color-lit' , 'yellow-color-lit', 'green-color-lit', 'banafsh-color-lit' ,'pink-color-lit')
            t1.classList.add('blue-color-lit')
        })
        bgBanafshMd.forEach(t2 =>{
            t2.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-green-md', 'bgd-yellow-md' , 'bgd-blue-md')
            t2.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit', 'bgd-red-lit' , 'bgd-banafsh-lit')
            t2.classList.add('bgd-blue-lit')
            t2.classList.remove('text-black')
            t2.classList.add('text-white')
        })
        brdrBanafshMd.forEach( t3 =>{
            t3.classList.remove('brdr-banafsh-md' , 'brdr-pink-md', 'brdr-red-md', 'brdr-blue-md', 'brdr-yellow-md', 'brdr-green-md')
            t3.classList.remove('brdr-banafsh-lit' , 'brdr-pink-lit', 'brdr-red-lit', 'brdr-yellow-lit', 'brdr-green-lit')
            t3.classList.add('brdr-blue-lit')
        })
        hovers.forEach(itemHover => {
            itemHover.addEventListener('mouseenter' , function(){
                itemHover.classList.add('bgd-blue-lit')
                itemHover.classList.remove('bgd-dark')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit','bgd-red-lit' , 'bgd-banafsh-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
            itemHover.addEventListener('mouseleave' , function(){
                itemHover.classList.add('bgd-dark')
                itemHover.classList.remove('bg-white')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
        });
    }
    if (select.value == 'red') {
        myLogo.src = 'assets/bg-red-dark.png'
        corrects.forEach(element => {
            element.src = 'assets/c-dark-red.png'
        });
        cashs.forEach(el2 => {
            el2.src = 'assets/cash-red.png'
        });
        banafshMedium.forEach(t1 =>{
            t1.classList.remove('yellow-color-md', 'blue-color-md', 'green-color-md', 'banafsh-color-md' ,'pink-color-md' ,'red-color-md')
            t1.classList.remove('yellow-color-lit', 'blue-color-lit', 'green-color-lit', 'banafsh-color-lit' ,'pink-color-lit')
            t1.classList.add('red-color-lit')
        })
        bgBanafshMd.forEach(t2 =>{
            t2.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-green-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-yellow-md')
            t2.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit', 'bgd-blue-lit', 'bgd-banafsh-lit')
            t2.classList.add('bgd-red-lit')
            t2.classList.remove('text-black')
            t2.classList.add('text-white')
        })
        brdrBanafshMd.forEach( t3 =>{
            t3.classList.remove('brdr-banafsh-md' , 'brdr-pink-md', 'brdr-red-md', 'brdr-blue-md', 'brdr-yellow-md', 'brdr-green-md')
            t3.classList.remove('brdr-banafsh-lit' , 'brdr-pink-lit', 'brdr-blue-lit', 'brdr-yellow-lit', 'brdr-green-lit')
            t3.classList.add('brdr-red-lit')
        })
        hovers.forEach(itemHover => {
            itemHover.addEventListener('mouseenter' , function(){
                itemHover.classList.add('bgd-red-lit')
                itemHover.classList.remove('bgd-dark')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
            itemHover.addEventListener('mouseleave' , function(){
                itemHover.classList.add('bgd-dark')
                itemHover.classList.remove('bg-white')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
        });
    }
    if (select.value == 'yellow') {
        myLogo.src = 'assets/bg-yellow-dark.png'
        corrects.forEach(element => {
            element.src = 'assets/c-dark-yellow.png'
        });
        cashs.forEach(el2 => {
            el2.src = 'assets/cash-yellow.png'
        });
        banafshMedium.forEach(t1 =>{
            t1.classList.remove('red-color-md' , 'blue-color-md', 'green-color-md', 'banafsh-color-md' ,'pink-color-md' ,'yellow-color-md')
            t1.classList.remove('red-color-lit' , 'blue-color-lit', 'green-color-lit', 'banafsh-color-lit' ,'pink-color-lit')
            t1.classList.add('yellow-color-lit')
        })
        bgBanafshMd.forEach(t2 =>{
            t2.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-green-md', 'bgd-blue-md','bgd-red-md' ,'bgd-yellow-md')
            t2.classList.remove('bgd-pink-lit' , 'bgd-green-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit')
            t2.classList.add('bgd-yellow-lit')
            t2.classList.add('text-black')
            t2.classList.remove('text-white')

        })
        brdrBanafshMd.forEach( t3 =>{
            t3.classList.remove('brdr-banafsh-md' , 'brdr-pink-md', 'brdr-red-md', 'brdr-blue-md', 'brdr-yellow-md', 'brdr-green-md')
            t3.classList.remove('brdr-banafsh-lit' , 'brdr-pink-lit', 'brdr-red-lit', 'brdr-blue-lit', 'brdr-green-lit')
            t3.classList.add('brdr-yellow-lit')     
        })
        hovers.forEach(itemHover => {
            itemHover.addEventListener('mouseenter' , function(){
                itemHover.classList.add('bgd-yellow-lit')
                itemHover.classList.remove('bgd-dark')
                itemHover.classList.remove('bgd-pink-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
            itemHover.addEventListener('mouseleave' , function(){
                itemHover.classList.add('bgd-dark')
                itemHover.classList.remove('bg-white')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
        });
    }
    if (select.value == 'green') {
        myLogo.src = 'assets/bg-green-dark.png'
        corrects.forEach(element => {
            element.src = 'assets/c-dark-green.png'
        });
        cashs.forEach(el2 => {
            el2.src = 'assets/cash-green.png'
        });
        banafshMedium.forEach(t1 =>{
            t1.classList.remove('red-color-md' , 'yellow-color-md', 'blue-color-md', 'banafsh-color-md' ,'pink-color-md' ,'green-color-md')
            t1.classList.remove('red-color-lit' , 'yellow-color-lit', 'blue-color-lit', 'banafsh-color-lit' ,'pink-color-lit')
            t1.classList.add('green-color-lit')
        })
        bgBanafshMd.forEach(t2 =>{
            t2.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            t2.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit')
            t2.classList.add('bgd-green-lit')
            t2.classList.remove('text-black')
            t2.classList.add('text-white')
        })
        brdrBanafshMd.forEach( t3 =>{
            t3.classList.remove('brdr-banafsh-md' , 'brdr-pink-md', 'brdr-red-md', 'brdr-blue-md', 'brdr-yellow-md', 'brdr-green-md')
            t3.classList.remove('brdr-banafsh-lit' , 'brdr-pink-lit', 'brdr-red-lit', 'brdr-blue-lit', 'brdr-yellow-lit')
            t3.classList.add('brdr-green-lit')
        })
        hovers.forEach(itemHover => {
            itemHover.addEventListener('mouseenter' , function(){
                itemHover.classList.add('bgd-green-lit')
                itemHover.classList.remove('bgd-dark')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
            itemHover.addEventListener('mouseleave' , function(){
                itemHover.classList.add('bgd-dark')
                itemHover.classList.remove('bg-white')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
        });
    }
    if (select.value == 'pink') {
        myLogo.src = 'assets/bg-pink-dark.png'
        corrects.forEach(element => {
            element.src = 'assets/c-dark-pink.png'
        });
        cashs.forEach(el2 => {
            el2.src = 'assets/cash-pink.png'
        });
        banafshMedium.forEach(t1 =>{
            t1.classList.remove('red-color-md' , 'yellow-color-md', 'blue-color-md', 'green-color-md', 'banafsh-color-md' ,'pink-color-md')
            t1.classList.remove('red-color-lit' , 'yellow-color-lit', 'blue-color-lit', 'green-color-lit', 'banafsh-color-lit')
            t1.classList.add('pink-color-lit')
        })
        bgBanafshMd.forEach(t2 =>{
            t2.classList.remove('bgd-banafsh-md' , 'bgd-yellow-md', 'bgd-green-md', 'bgd-blue-md', 'bgd-red-md' ,'bgd-pink-md')
            t2.classList.remove('bgd-yellow-lit', 'bgd-green-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit')
            t2.classList.add('bgd-pink-lit')
            t2.classList.remove('text-black')
            t2.classList.add('text-white')
        })
        brdrBanafshMd.forEach( t3 =>{
            t3.classList.remove('brdr-banafsh-md' , 'brdr-pink-md', 'brdr-red-md', 'brdr-blue-md', 'brdr-yellow-md', 'brdr-green-md')
            t3.classList.remove('brdr-banafsh-lit' , 'brdr-red-lit', 'brdr-blue-lit', 'brdr-yellow-lit', 'brdr-green-lit')
            t3.classList.add('brdr-pink-lit')
        })
        hovers.forEach(itemHover => {
            itemHover.addEventListener('mouseenter' , function(){
                itemHover.classList.add('bgd-pink-lit')
                itemHover.classList.remove('bgd-dark')
                itemHover.classList.remove('bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
            itemHover.addEventListener('mouseleave' , function(){
                itemHover.classList.add('bgd-dark')
                itemHover.classList.remove('bg-white')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
        });
    }
    if (select.value == 'purple') {
        myLogo.src = 'assets/bg-banafsh-dark.png'
        corrects.forEach(element => {
            element.src = 'assets/c-dark-banafsh.png'
        });
        cashs.forEach(el2 => {
            el2.src = 'assets/cash-banafsh.png'
        });
        banafshMedium.forEach(t1 =>{
            t1.classList.remove('red-color-md' , 'yellow-color-md', 'blue-color-md', 'green-color-md', 'pink-color-md' ,'banafsh-color-md')
            t1.classList.remove('red-color-lit' , 'yellow-color-lit', 'blue-color-lit', 'green-color-lit', 'pink-color-lit')
            t1.classList.add('banafsh-color-lit')
        })
        bgBanafshMd.forEach(t2 =>{
            t2.classList.remove('bgd-pink-md' , 'bgd-yellow-md', 'bgd-green-md', 'bgd-blue-md','bgd-red-md' ,'bgd-banafsh-md')
            t2.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit', 'bgd-blue-lit','bgd-red-lit')
            t2.classList.add('bgd-banafsh-lit')
            t2.classList.remove('text-black')
            t2.classList.add('text-white')
        })
        brdrBanafshMd.forEach( t3 =>{
            t3.classList.remove('brdr-banafsh-md' , 'brdr-pink-md', 'brdr-red-md', 'brdr-blue-md', 'brdr-yellow-md', 'brdr-green-md')
            t3.classList.remove('brdr-pink-lit', 'brdr-red-lit', 'brdr-blue-lit', 'brdr-yellow-lit', 'brdr-green-lit')
            t3.classList.add('brdr-banafsh-lit')
        })
        hovers.forEach(itemHover => {
            itemHover.addEventListener('mouseenter' , function(){
                itemHover.classList.add('bgd-banafsh-lit')
                itemHover.classList.remove('bgd-dark')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
            itemHover.addEventListener('mouseleave' , function(){
                itemHover.classList.add('bgd-dark')
                itemHover.classList.remove('bg-white')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
        });
    }
}
function changSun(){
    if (select.value == 'blue') {
        me.src = 'assets/ax-blue.png'
        myLogo.src = 'assets/bg-blue-lit.png'
        corrects.forEach(element => {
            element.src = 'assets/c-lit-blue.png'
        });
        cashs.forEach(el2 => {
            el2.src = 'assets/cash-blue.png'
        });
        banafshMedium.forEach(t1 =>{
            t1.classList.remove('red-color-lit' , 'yellow-color-lit', 'blue-color-lit', 'green-color-lit', 'banafsh-color-lit' ,'pink-color-lit')
            t1.classList.remove('red-color-md' , 'yellow-color-md', 'green-color-md', 'banafsh-color-md' ,'pink-color-md')
            t1.classList.add('blue-color-md')
        })
        bgBanafshMd.forEach(t2 =>{
            t2.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit')
            t2.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-green-md','bgd-yellow-md')
            t2.classList.add('bgd-blue-md')
        })
        brdrBanafshMd.forEach( t3 =>{
            t3.classList.remove('brdr-banafsh-lit' , 'brdr-pink-lit', 'brdr-red-lit', 'brdr-yellow-lit', 'brdr-green-lit' , 'brdr-blue-lit')
            t3.classList.remove('brdr-banafsh-md' , 'brdr-pink-md', 'brdr-red-md', 'brdr-yellow-md', 'brdr-green-md')
            t3.classList.add('brdr-blue-md')
        })
        hovers.forEach(itemHover => {
            itemHover.addEventListener('mouseenter' , function(){
                itemHover.classList.add('bgd-blue-md')
                itemHover.classList.remove('bg-white')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit','bgd-red-lit' , 'bgd-banafsh-lit' , 'bgd-blue-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md','bgd-yellow-md' ,'bgd-green-md')
            })
            itemHover.addEventListener('mouseleave' , function(){
                itemHover.classList.add('bg-white')
                itemHover.classList.remove('bgd-dark')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
        });
    }
    if (select.value == 'red') {
        me.src = 'assets/ax-red.png'
        myLogo.src = 'assets/bg-red-lit.png'
        corrects.forEach(element => {
            element.src = 'assets/c-lit-red.png'
        });
        cashs.forEach(el2 => {
            el2.src = 'assets/cash-red.png'
        });
        banafshMedium.forEach(t1 =>{
            t1.classList.remove('red-color-lit' , 'yellow-color-lit', 'blue-color-lit', 'green-color-lit', 'banafsh-color-lit' ,'pink-color-lit')
            t1.classList.remove('yellow-color-md', 'blue-color-md', 'green-color-md', 'banafsh-color-md' ,'pink-color-md')
            t1.classList.add('red-color-md')
        })
        bgBanafshMd.forEach(t2 =>{
            t2.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit', 'bgd-blue-lit', 'bgd-red-lit' , 'bgd-banafsh-lit')
            t2.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-green-md', 'bgd-blue-md','bgd-yellow-md')
            t2.classList.add('bgd-red-md')
        })
        brdrBanafshMd.forEach( t3 =>{
            t3.classList.remove('brdr-banafsh-lit' , 'brdr-pink-lit', 'brdr-blue-lit', 'brdr-yellow-lit', 'brdr-green-lit' , 'brdr-red-lit')
            t3.classList.remove('brdr-banafsh-md' , 'brdr-pink-md', 'brdr-blue-md', 'brdr-yellow-md', 'brdr-green-md')
            t3.classList.add('brdr-red-md')
        })
        hovers.forEach(itemHover => {
            itemHover.addEventListener('mouseenter' , function(){
                itemHover.classList.add('bgd-red-md')
                itemHover.classList.remove('bg-white')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit','bgd-red-lit' , 'bgd-banafsh-lit' , 'bgd-blue-lit')
                itemHover.classList.remove('bgd-banafsh-md', 'bgd-blue-md' , 'bgd-pink-md', 'bgd-yellow-md' ,'bgd-green-md')
            })
            itemHover.addEventListener('mouseleave' , function(){
                itemHover.classList.add('bg-white')
                itemHover.classList.remove('bgd-dark')
                itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
            })
        });
    }
    if (select.value == 'yellow') {
        me.src = 'assets/ax-yellow.png'
                myLogo.src = 'assets/bg-yellow-lit.png'
                corrects.forEach(element => {
                    element.src = 'assets/c-lit-yellow.png'
                });
                cashs.forEach(el2 => {
                    el2.src = 'assets/cash-yellow.png'
                });
                banafshMedium.forEach(t1 =>{
                    t1.classList.remove('red-color-lit' , 'yellow-color-lit', 'blue-color-lit', 'green-color-lit', 'banafsh-color-lit' ,'pink-color-lit')
                    t1.classList.remove('red-color-md' , 'blue-color-md', 'green-color-md', 'banafsh-color-md' ,'pink-color-md')
                    t1.classList.add('yellow-color-md')
                })
                bgBanafshMd.forEach(t2 =>{
                    t2.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit')
                    t2.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-green-md', 'bgd-blue-md','bgd-red-md')
                    t2.classList.add('bgd-yellow-md')
                })
                brdrBanafshMd.forEach( t3 =>{
                    t3.classList.remove('brdr-banafsh-lit' , 'brdr-pink-lit', 'brdr-red-lit', 'brdr-blue-lit', 'brdr-green-lit' , 'brdr-yellow-lit')
                    t3.classList.remove('brdr-banafsh-md' , 'brdr-pink-md', 'brdr-red-md', 'brdr-blue-md', 'brdr-green-md')
                    t3.classList.add('brdr-yellow-md')     
                })
                hovers.forEach(itemHover => {
                    itemHover.addEventListener('mouseenter' , function(){
                        itemHover.classList.add('bgd-yellow-md')
                        itemHover.classList.remove('bg-white')
                        itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit','bgd-red-lit' , 'bgd-banafsh-lit' , 'bgd-blue-lit')
                        itemHover.classList.remove('bgd-banafsh-md', 'bgd-red-md', 'bgd-blue-md' , 'bgd-pink-md' ,'bgd-green-md')
                    })
                    itemHover.addEventListener('mouseleave' , function(){
                        itemHover.classList.add('bg-white')
                        itemHover.classList.remove('bgd-dark')
                        itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                        itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
                    })
                });
    }
    if (select.value == 'green') {
        me.src = 'assets/ax-green.png'
                myLogo.src = 'assets/bg-green-lit.png'
                corrects.forEach(element => {
                    element.src = 'assets/c-lit-green.png'
                });
                cashs.forEach(el2 => {
                    el2.src = 'assets/cash-green.png'
                });
                banafshMedium.forEach(t1 =>{
                    t1.classList.remove('red-color-lit' , 'yellow-color-lit', 'blue-color-lit', 'green-color-lit', 'banafsh-color-lit' ,'pink-color-lit')
                    t1.classList.remove('red-color-md' , 'yellow-color-md', 'blue-color-md', 'banafsh-color-md' ,'pink-color-md')
                    t1.classList.add('green-color-md')
                })
                bgBanafshMd.forEach(t2 =>{
                    t2.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit')
                    t2.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md')
                    t2.classList.add('bgd-green-md')
                })
                brdrBanafshMd.forEach( t3 =>{
                    t3.classList.remove('brdr-banafsh-lit' , 'brdr-pink-lit', 'brdr-red-lit', 'brdr-blue-lit', 'brdr-yellow-lit' ,'brdr-green-lit')
                    t3.classList.remove('brdr-banafsh-md' , 'brdr-pink-md', 'brdr-red-md', 'brdr-blue-md', 'brdr-yellow-md')
                    t3.classList.add('brdr-green-md')
                })
                hovers.forEach(itemHover => {
                    itemHover.addEventListener('mouseenter' , function(){
                        itemHover.classList.add('bgd-green-md')
                        itemHover.classList.remove('bg-white')
                        itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit','bgd-red-lit' , 'bgd-banafsh-lit' , 'bgd-blue-lit')
                        itemHover.classList.remove('bgd-banafsh-md', 'bgd-red-md', 'bgd-blue-md' , 'bgd-pink-md' ,'bgd-yellow-md')
                    })
                    itemHover.addEventListener('mouseleave' , function(){
                        itemHover.classList.add('bg-white')
                        itemHover.classList.remove('bgd-dark')
                        itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                        itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
                    })
                });
    }
    if (select.value == 'pink') {
        me.src = 'assets/ax-pink.png'
                myLogo.src = 'assets/bg-pink-lit.png'
                corrects.forEach(element => {
                    element.src = 'assets/c-lit-pink.png'
                });
                cashs.forEach(el2 => {
                    el2.src = 'assets/cash-pink.png'
                });
                banafshMedium.forEach(t1 =>{
                    t1.classList.remove('red-color-lit' , 'yellow-color-lit', 'blue-color-lit', 'green-color-lit', 'banafsh-color-lit' ,'pink-color-lit')
                    t1.classList.remove('red-color-md' , 'yellow-color-md', 'blue-color-md', 'green-color-md', 'banafsh-color-md')
                    t1.classList.add('pink-color-md')
                })
                bgBanafshMd.forEach(t2 =>{
                    t2.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit')
                    t2.classList.remove('bgd-banafsh-md' , 'bgd-yellow-md', 'bgd-green-md', 'bgd-blue-md','bgd-red-md')
                    t2.classList.add('bgd-pink-md')
                })
                brdrBanafshMd.forEach( t3 =>{
                    t3.classList.remove('brdr-banafsh-lit' , 'brdr-red-lit', 'brdr-blue-lit', 'brdr-yellow-lit', 'brdr-green-lit' ,'brdr-pink-lit')
                    t3.classList.remove('brdr-banafsh-md' , 'brdr-red-md', 'brdr-blue-md', 'brdr-yellow-md', 'brdr-green-md')
                    t3.classList.add('brdr-pink-md')
                })
                hovers.forEach(itemHover => {
                    itemHover.addEventListener('mouseenter' , function(){
                        itemHover.classList.add('bgd-pink-md')
                        itemHover.classList.remove('bg-white')
                        itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit','bgd-red-lit' , 'bgd-banafsh-lit' , 'bgd-blue-lit')
                        itemHover.classList.remove('bgd-banafsh-md', 'bgd-yellow-md' , 'bgd-red-md', 'bgd-blue-md' , 'bgd-green-md')
                    })
                    itemHover.addEventListener('mouseleave' , function(){
                        itemHover.classList.add('bg-white')
                        itemHover.classList.remove('bgd-dark')
                        itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                        itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
                    })
                });
    }
    if (select.value == 'purple') {
        me.src = 'assets/ax-purple.png'
                myLogo.src = 'assets/bg-banafsh-lit.png'
                corrects.forEach(element => {
                    element.src = 'assets/c-lit-banafsh.png'
                });
                cashs.forEach(el2 => {
                    el2.src = 'assets/cash-banafsh.png'
                });
                banafshMedium.forEach(t1 =>{
                    t1.classList.remove('red-color-lit' , 'yellow-color-lit', 'blue-color-lit', 'green-color-lit', 'banafsh-color-lit' ,'pink-color-lit')
                    t1.classList.remove('red-color-md' , 'yellow-color-md', 'blue-color-md', 'green-color-md', 'pink-color-md')
                    t1.classList.add('banafsh-color-md')
                })
                bgBanafshMd.forEach(t2 =>{
                    t2.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit')
                    t2.classList.remove('bgd-pink-md' , 'bgd-yellow-md', 'bgd-green-md', 'bgd-blue-md','bgd-red-md')
                    t2.classList.add('bgd-banafsh-md')
                })
                brdrBanafshMd.forEach( t3 =>{
                    t3.classList.remove('brdr-pink-lit', 'brdr-red-lit', 'brdr-blue-lit', 'brdr-yellow-lit', 'brdr-green-lit' ,'brdr-banafsh-lit')
                    t3.classList.remove('brdr-pink-md', 'brdr-red-md', 'brdr-blue-md', 'brdr-yellow-md', 'brdr-green-md')
                    t3.classList.add('brdr-banafsh-md')
                })
                hovers.forEach(itemHover => {
                    itemHover.addEventListener('mouseenter' , function(){
                        itemHover.classList.add('bgd-banafsh-md')
                        itemHover.classList.remove('bg-white')
                        itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-green-lit','bgd-red-lit' , 'bgd-banafsh-lit' , 'bgd-blue-lit')
                        itemHover.classList.remove('bgd-pink-md' , 'bgd-yellow-md' , 'bgd-red-md', 'bgd-blue-md' , 'bgd-green-md')
                    })
                    itemHover.addEventListener('mouseleave' , function(){
                        itemHover.classList.add('bg-white')
                        itemHover.classList.remove('bgd-dark')
                        itemHover.classList.remove('bgd-pink-lit' , 'bgd-yellow-lit', 'bgd-blue-lit','bgd-red-lit' , 'bgd-banafsh-lit' ,'bgd-green-lit')
                        itemHover.classList.remove('bgd-banafsh-md' , 'bgd-pink-md', 'bgd-red-md', 'bgd-blue-md','bgd-yellow-md' ,'bgd-green-md')
                    })
                });
    }
}

select.addEventListener('change' , function(){
    if (moon.classList != 'd-none') {
        changMoon()
    }
    if (sun.classList != 'd-none') {
        changSun()
    }
})

moon.addEventListener('click' , function(){
    sun.classList.remove('d-none')
    moon.classList.add('d-none')
    me.src = 'assets/ax-bg-white.png'

    bgLight.forEach(item0 =>{
        item0.classList.remove('bg-white')
        item0.classList.add('bgd-dark')
    })
    textBlack.forEach( item2 => {
        item2.classList.remove('text-black')
        item2.classList.add('text-white')
    })
    changMoon()

    select.addEventListener('change' , function(){
        me.src = 'assets/ax-bg-white.png'
        changMoon()
    })
})

sun.addEventListener('click' , function(){
    sun.classList.add('d-none')
    moon.classList.remove('d-none')

    textBlack.forEach( item2 => {
        item2.classList.add('text-black')
        item2.classList.remove('text-white')
    })
    bgLight.forEach(item0 =>{
        item0.classList.add('bg-white')
        item0.classList.remove('bgd-dark')
    })
    changSun()
    select.addEventListener('change' , function(){
        changSun()
    })
})

