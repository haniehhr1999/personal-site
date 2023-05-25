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







