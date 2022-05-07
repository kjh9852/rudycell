let yOffset = 0;
let subMenu = document.querySelectorAll('.nav_sub');
let navSubList = document.querySelectorAll('.nav_menu > ul > li');
let navSub = document.querySelectorAll('.nav_menu > ul');
let navList = document.querySelectorAll('.nav_menu');

const menu = document.querySelector('.menu');
const totalMenu = document.querySelector('.total_menu');
const closeBtn = document.querySelector('.total_menu > a');
const search = document.querySelector('.search');
const searchForm = document.querySelector('.search_form');
const searchClose = document.querySelector('.search_form > a');
const footer = document.querySelector('footer');
const footerSNS = document.querySelector('.footer_sns');
const toTopBtn = document.querySelector('.top_btn');


function MenuOpen(index,openMenu,close){
        index.addEventListener('click', (e) => {
            e.preventDefault();
            if(index.classList.contains('active') === false) {
                index.classList.add('active');
                openMenu.classList.add('active');
            }else if(index.classList.contains('active') === true) {
                index.classList.remove('active');
            }
        });
        close.addEventListener('click', (e) => {
            e.preventDefault();
            openMenu.classList.remove('active');
            index.classList.remove('active');
        });
}
search.addEventListener('click', MenuOpen(search,searchForm,searchClose));
menu.addEventListener('click',MenuOpen(menu,totalMenu,closeBtn));

function Footer(){
    const footerTop = footer.getBoundingClientRect().top + (yOffset - window.innerHeight);
    if (yOffset >= footerTop) {
        footerSNS.classList.remove('fixed');
    }else {
        footerSNS.classList.add('fixed');
    }
}

let header = document.querySelector('header');
header.addEventListener('mouseover', () => {
    header.classList.add('hover');
});
header.addEventListener('mouseleave', () => {
    header.classList.remove('hover');
});


for (let i = 0; i < navList.length; i++) {
    for (let j = 0; j < navList.length; j++) {
        navList[i].addEventListener('mouseleave', () => {
            navSub[i].classList.remove('active');
        });
    }
    navList[i].addEventListener('mouseover', () => {
        navSub[i].classList.add('active');

    });
}
for (let i = 0; i < navSubList.length; i++) {
    for (let j = 0; j < navSubList.length; j++) {
        navSubList[j].addEventListener('mouseleave', () => {
            subMenu[j].classList.remove('active');
        });
    }
    navSubList[i].addEventListener('mouseover', () => {
        subMenu[i].classList.add('active');
    });
}
toTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
window.addEventListener('scroll', () => {
    header.classList.add('scroll');
    footerSNS.classList.add('fade');
    if (window.pageYOffset === 0) {
        header.classList.remove('scroll');
        footerSNS.classList.remove('fade');
    }
    Footer();
});