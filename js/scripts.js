$(document).ready(function() {
    $('.galeria').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
    });
});

/*-------------------- LEFT EFFECT ------------------*/
const observer = new IntersectionObserver((left) => {
    left.forEach((entryleft) => {
        console.log(entryleft);
        if (entryleft.isIntersecting) {
            entryleft.target.classList.add('showleft')
        } else {
            entryleft.target.classList.remove('showleft')
        }
    })
})

const hiddenleft = document.querySelectorAll('.hiddenleft');
hiddenleft.forEach((el) => observer.observe(el))

/*------------------- RIGHT EFFECT -------------------*/

const observerright = new IntersectionObserver((entriesright) => {
    entriesright.forEach((entryright) => {
        console.log(entryright);
        if (entryright.isIntersecting) {
            entryright.target.classList.add('showright')
        } else {
            entryright.target.classList.remove('showright')
        }
    })
})

const hiddenright = document.querySelectorAll('.hiddenright');
hiddenright.forEach((elright) => observerright.observe(elright))

/*------------------- FADE IN -------------------*/

const fades = new IntersectionObserver((fades) => {
    fades.forEach((fade) => {
        console.log(fade);
        if (fade.isIntersecting) {
            fade.target.classList.add('fadein')
        } else {
            fade.target.classList.remove('fadein')
        }
    })
})

const fade = document.querySelectorAll('.fade');
fade.forEach((el) => fades.observe(el))

/*----------- NAV BAR MOBILE -------------*/

function mudar() {
    let mudar = document.querySelector('.hamburguer')
    mudar.classList.toggle('mudar')
}

function menu() {
    let menu = document.querySelector('.hamburguermenu')
    menu.classList.toggle('ativar')
}
