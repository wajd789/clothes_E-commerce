// ==== Swiper (Home section) ====
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// ==== Change Backgorund Header ====
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// ==== Swiper (New section) ====
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: 'true',
});



// ==== Shwo menu ====
const navMenu = document.querySelector('#nav-menu'),
    navToggleBtn = document.querySelector('.nav__toggle'),
    navCloseBtn = document.querySelector('.nav__close');

// ==== menu show ====
// ==== validate if constant exists ====
if (navCloseBtn) {
    navToggleBtn.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}


// ==== Hide menu ====
// ==== validate if constant exists ====
if (navMenu) {
    navCloseBtn.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}



// ==== Show cart ====
const cart = document.querySelector('.cart'),
    cartShop = document.querySelector('.nav__shop'),
    cartClose = document.querySelector('.cart__close');

// ==== Cart show ====
// ==== Valiabate if constant exists ====
if (cartShop) {
    cartShop.addEventListener('click', () => {
        cart.classList.add('show-cart');
    });
}


// ==== Cart Hide ====
// ==== Validate if constant exists ====
if (cartShop) {
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-cart');
    });
}


// ==== Show login ====
const login = document.querySelector('.login'),
    loginBtn = document.querySelector('.login__toggle'),
    loginClose = document.querySelector('.login__close');

// ==== login show ====
// ==== Validate if constant exists ====
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        login.classList.add('show-login');
    });
}

// ==== login Hide ====
// ==== Validate if constant exists ====
if (loginClose) {
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login');
    });
}

// ==== Show Scroll up ====
function scrollUp() {
    const scrollUp = document.querySelector('.scrollup');
    // when the scroll is higher than 350 viewport height, add the show-scroll calss
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);
