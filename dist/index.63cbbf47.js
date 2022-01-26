const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/ if (navToggle) navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu');
});
/*===== MENU HIDDEN =====*/ if (navClose) navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu');
});
/*==================== REMOVE MENU MOBILE ====================*/ const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu1 = document.getElementById('nav-menu');
    navMenu1.classList.remove('show-menu');
}
navLink.forEach((n)=>n.addEventListener('click', linkAction)
);
/*==================== ACCORDION SKILLS ====================*/ const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');
function toggleSkills() {
    let itemClass = this.parentNode.className;
    for(i = 0; i < skillsContent.length; i++)skillsContent[i].className = 'skills__content skills__close';
    if (itemClass === 'skills__content skills__close') this.parentNode.className = 'skills__content skills__open';
}
skillsHeader.forEach((e)=>{
    e.addEventListener('click', toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/ const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');
tabs.forEach((tab1)=>{
    tab1.addEventListener('click', ()=>{
        const target = document.querySelector(tab1.dataset.target);
        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');
        tabs.forEach((tab)=>{
            tab.classList.remove('qualification__active');
        });
        tab1.classList.add('qualification__active');
    });
});
/*==================== SERVICES MODAL ====================*/ const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalClose = document.querySelectorAll('.services__modal-close');
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};
modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i);
    });
});
modalClose.forEach((modalClose1)=>{
    modalClose1.addEventListener('click', ()=>{
        modalViews.forEach((modalViews1)=>{
            modalViews1.classList.remove('active-modal');
        });
    });
});
/*==================== PORTFOLIO SWIPER  ====================*/ let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});
/*==================== TESTIMONIAL ====================*/ let swiperTestmonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        568: {
            slidesPerView: 2
        }
    }
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/ const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        else document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    });
}
window.addEventListener('scroll', scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/ function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/ function scrollup() {
    const scrollup1 = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollup1.classList.add('show-scroll');
    else scrollup1.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollup);
/*==================== DARK LIGHT THEME ====================*/ const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';
// Previously selected theme
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// Obtain the current theme
const getCurrentTheme = ()=>document.body.classList.contains(darkTheme) ? 'dark' : 'light'
;
const getCurrentIcon = ()=>themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
;
// validate if  user previously choose a theme
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Save the theme and the current icon
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

//# sourceMappingURL=index.63cbbf47.js.map
