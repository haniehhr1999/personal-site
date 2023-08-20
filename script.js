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
// for sliders =========================================================================================
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    loopedSlides:40,
    loopPreventSliding: true ,
    slidesPerView: "3",
    maxBackFaceHiddenSlides : "10",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.t1',
      prevEl: '.t2',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


// var arrR = document.querySelector('.arrR')
// var arrL = document.querySelector('.arrL')
// var boxSlider = document.querySelectorAll('.box-slider')

// var x = 0
// var y = 0
// arrR.addEventListener('click' , function(){
//     if ( x == 0 ) {
//         x = 1
//         y += 300
//         boxSlider.forEach(item => {
//             item.style.transform = `translateX(${y}px)`
//         });
//     } else if ( x == 1){
//         x = 0
//         y += 300
//         boxSlider.forEach(item => {
//             item.style.transform = `translateX(${y}px)`
//         });
//     }
// })


// arrL.addEventListener('click' , function(){
//     if ( x == 0 ) {
//         x = 1
//         y -= 300
//         boxSlider.forEach(item => {
//             item.style.transform = `translateX(${y}px)`
//         });
//     } else if ( x == 1){
//         x = 0
//         y -= 300
//         boxSlider.forEach(item => {
//             item.style.transform = `translateX(${y}px)`
//         });
//     }
// })
// for resume =========================================================================================
var item1 = document.querySelector('.item1')
var item2 = document.querySelector('.item2')
var item3 = document.querySelector('.item3')
var item4 = document.querySelector('.item4')
var item5 = document.querySelector('.item5')
var item6 = document.querySelector('.item6')

var mdi1 = document.querySelector('.mdi1')
var mdi2 = document.querySelector('.mdi2')
var mdi3 = document.querySelector('.mdi3')
var mdi4 = document.querySelector('.mdi4')
var mdi5 = document.querySelector('.mdi5')
var mdi6 = document.querySelector('.mdi6')

var par1 = document.querySelector('.par1')
var par2 = document.querySelector('.par2')
var par3 = document.querySelector('.par3')
var par4 = document.querySelector('.par4')
var par5 = document.querySelector('.par5')
var par6 = document.querySelector('.par6')

var lorem1 = document.querySelector('.lorem1')
var lorem2 = document.querySelector('.lorem2')
var lorem3 = document.querySelector('.lorem3')
var lorem4 = document.querySelector('.lorem4')
var lorem5 = document.querySelector('.lorem5')
var lorem6 = document.querySelector('.lorem6')

function beMinus1(){
    var mdiMinus1 = document.querySelector('.mdi-1')
    mdiMinus1.addEventListener('click' , function(){
        item1.style.height = '82px'
        mdiMinus1.classList.remove("mdi-minus")
        mdiMinus1.classList.add("mdi" , "mdi-plus")
        par1.style.opacity = 0
        par1.style.visibility = 'hidden'
        lorem1.style.opacity = 0
        lorem1.style.visibility = 'hidden'
        var mdi1 = document.querySelector('.mdi1')
    })

}
function beMinus2(){
    var mdiMinus2 = document.querySelector('.mdi-2')
    mdiMinus2.addEventListener('click' , function(){
        item2.style.height = '82px'
        mdiMinus2.classList.remove("mdi-minus")
        mdiMinus2.classList.add("mdi" , "mdi-plus")
        par2.style.opacity = 0
        par2.style.visibility = 'hidden'
        lorem2.style.opacity = 0
        lorem2.style.visibility = 'hidden'
    })
}
function beMinus3(){
    var mdiMinus3 = document.querySelector('.mdi-3')
    mdiMinus3.addEventListener('click' , function(){
        item3.style.height = '82px'
        mdiMinus3.classList.remove("mdi-minus")
        mdiMinus3.classList.add("mdi" , "mdi-plus")
        par3.style.opacity = 0
        par3.style.visibility = 'hidden'
        lorem3.style.opacity = 0
        lorem3.style.visibility = 'hidden'
    })
}
function beMinus4(){
    var mdiMinus4 = document.querySelector('.mdi-4')
    mdiMinus4.addEventListener('click' , function(){
        item4.style.height = '82px'
        mdiMinus4.classList.remove("mdi-minus")
        mdiMinus4.classList.add("mdi" , "mdi-plus")
        par4.style.opacity = 0
        par4.style.visibility = 'hidden'
        lorem4.style.opacity = 0
        lorem4.style.visibility = 'hidden'
    })
}
function beMinus5(){
    var mdiMinus5 = document.querySelector('.mdi-5')
    mdiMinus5.addEventListener('click' , function(){
        item5.style.height = '82px'
        mdiMinus5.classList.remove("mdi-minus")
        mdiMinus5.classList.add("mdi" , "mdi-plus")
        par5.style.opacity = 0
        par5.style.visibility = 'hidden'
        lorem5.style.opacity = 0
        lorem5.style.visibility = 'hidden'
    })
}
function beMinus6(){
    var mdiMinus6 = document.querySelector('.mdi-6')
    mdiMinus6.addEventListener('click' , function(){
        item6.style.height = '82px'
        mdiMinus6.classList.remove("mdi-minus")
        mdiMinus6.classList.add("mdi" , "mdi-plus")
        par6.style.opacity = 0
        par6.style.visibility = 'hidden'
        lorem6.style.opacity = 0
        lorem6.style.visibility = 'hidden'
    })
}




mdi1.addEventListener('click' , function(){
    item1.style.height = '163.2px'
    mdi1.classList.remove("mdi-plus")
    mdi1.classList.add("mdi" , "mdi-minus" , "mdi-1")
    par1.style.opacity = 1
    par1.style.visibility = 'visible'
    lorem1.style.opacity = 1
    lorem1.style.visibility = 'visible'
    beMinus1()
})
mdi2.addEventListener('click' , function(){
    item2.style.height = '163.2px'
    mdi2.classList.remove("mdi-plus")
    mdi2.classList.add("mdi" , "mdi-minus" , "mdi-2")
    par2.style.opacity = 1
    par2.style.visibility = 'visible'
    lorem2.style.opacity = 1
    lorem2.style.visibility = 'visible'
    beMinus2()
})
mdi3.addEventListener('click' , function(){
    item3.style.height = '163.2px'
    mdi3.classList.remove("mdi-plus")
    mdi3.classList.add("mdi" , "mdi-minus" , "mdi-3")
    par3.style.opacity = 1
    par3.style.visibility = 'visible'
    lorem3.style.opacity = 1
    lorem3.style.visibility = 'visible'
    beMinus3()
})
mdi4.addEventListener('click' , function(){
    item4.style.height = '163.2px'
    mdi4.classList.remove("mdi-plus")
    mdi4.classList.add("mdi" , "mdi-minus" , "mdi-4")
    par4.style.opacity = 1
    par4.style.visibility = 'visible'
    lorem4.style.opacity = 1
    lorem4.style.visibility = 'visible'
    beMinus4()
})
mdi5.addEventListener('click' , function(){
    item5.style.height = '163.2px'
    mdi5.classList.remove("mdi-plus")
    mdi5.classList.add("mdi" , "mdi-minus" , "mdi-5")
    par5.style.opacity = 1
    par5.style.visibility = 'visible'
    lorem5.style.opacity = 1
    lorem5.style.visibility = 'visible'
    beMinus5()
})
mdi6.addEventListener('click' , function(){
    item6.style.height = '163.2px'
    mdi6.classList.remove("mdi-plus")
    mdi6.classList.add("mdi" , "mdi-minus" , "mdi-6")
    par6.style.opacity = 1
    par6.style.visibility = 'visible'
    lorem6.style.opacity = 1
    lorem6.style.visibility = 'visible'
    beMinus6()
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

iconPallete.addEventListener('click' , showOptionsSelect)
function showOptionsSelect (){
    select.classList.toggle("show") 
}

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









