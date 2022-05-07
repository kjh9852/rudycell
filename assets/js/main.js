(() => {
    const brandSlider = document.querySelectorAll('.brand_slider > .swiper-wrapper > .swiper-slide');
    const bannerSlider = document.querySelectorAll('.banner_swiper > .swiper-wrapper > .swiper-slide');
    const swiper = new Swiper('.banner_swiper', {
        pagination: { // 페이징
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5300,
            disableOnInteraction: false,
        },
        speed: 300,
        loop: true,
        on : {
            init: function() {
                let thisSlide = this;
                let slideBtn = document.querySelector('.banner_swiper .slide_btn > i');
                slideBtn.addEventListener('click', (e) => {
                    let slideBtnTitle = slideBtn.getAttribute('title');
                    if (slideBtnTitle === '정지하기') {
                        slideBtn.setAttribute('title', '재생하기');
                        slideBtn.setAttribute('alt', '재생하기');
                        slideBtn.classList.remove('icon_pause');
                        slideBtn.classList.add('icon_play');
                        thisSlide.autoplay.stop();
                    } else if (slideBtnTitle === '재생하기') {
                        slideBtn.setAttribute('title', '정지하기');
                        slideBtn.setAttribute('alt', '정지하기');
                        slideBtn.classList.remove('icon_play');
                        slideBtn.classList.add('icon_pause');
                        thisSlide.autoplay.start();
                        thisSlide.slideNext();
                    };
                });
            }
        }
    });
    const swiper2 = new Swiper('.brand_slider', {
        autoplay: {
            delay: 5300,
            disableOnInteraction: false,
        },
        pagination: { // 페이징
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 300,
        loop: true,
        on : {
            init: function() {
                let thisSlide = this;
                let slideBtn = document.querySelector('.brand_slider .slide_btn > i');
                slideBtn.addEventListener('click', (e) => {
                    let slideBtnTitle = slideBtn.getAttribute('title');
                    if (slideBtnTitle === '정지하기') {
                        slideBtn.setAttribute('title', '재생하기');
                        slideBtn.setAttribute('alt', '재생하기');
                        slideBtn.classList.remove('icon_pause');
                        slideBtn.classList.add('icon_play');
                        thisSlide.autoplay.stop();
                    } else if (slideBtnTitle === '재생하기') {
                        slideBtn.setAttribute('title', '정지하기');
                        slideBtn.setAttribute('alt', '정지하기');
                        slideBtn.classList.remove('icon_play');
                        slideBtn.classList.add('icon_pause');
                        thisSlide.autoplay.start();
                        thisSlide.slideNext();
                    };
                });
            }
        }
    });
    const swiper3 = new Swiper('.best_slide', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 10,
        autoplay: {
            delay: 4000,
        },
        speed: 300,
        loop: true,
    });
    const swiper4 = new Swiper('.new_slide', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 10,
        autoplay: {
            delay: 4000,
        },
        speed: 300,
    });
    const swiper5 = new Swiper('.vod_slide', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
        },
        speed: 300,
        loop: true,
    });

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

    const brand = document.querySelector('.brand');
    const textBg = document.querySelectorAll('.text_bg');
    const brandTitle = document.querySelector('.title');
    const brandSlide = document.querySelector('.brand_slider');
    let brandTop = (brand.offsetTop - window.innerHeight);
    console.log(brandTop);

    const story = document.querySelector('.story');
    const storyTop = (story.offsetTop + 100 - window.innerHeight);
    const storyTitle = document.querySelector('.story h1');
    const storyItem = document.querySelectorAll('.main_story > ul > li');

    const productinfoItem = document.querySelectorAll('.productinfo_item');
    const productinfoItem03 = document.querySelector('.productinfo_item03');
    const itme03Img = document.querySelectorAll('.productinfo_img.c > img');
    const productInfoImg = document.querySelectorAll('.productinfo_img');
    const productInfoTitle = document.querySelectorAll('.productinfo_item > h2');
    const productInfoDesc = document.querySelectorAll('.productinfo_item > p');
    const productInfoBtn = document.querySelectorAll('.productinfo_item > a');

    const bestProduct = document.querySelector('.best');
    const newProduct = document.querySelector('.new');
    const bestProductTop = bestProduct.getBoundingClientRect().top + (yOffset - window.innerHeight);
    const newProductTop = newProduct.getBoundingClientRect().top + (yOffset - window.innerHeight);

    const vod = document.querySelector('.vod');
    const vodTop = vod.offsetTop - window.innerHeight;
    const vodTitle = document.querySelector('.vod_wrap > h1');
    const vodTitleTop = vodTitle.getBoundingClientRect().top + (yOffset - window.innerHeight);

    const noticeImg = document.querySelector('.notice_top');
    const noticeImgTop = noticeImg.offsetTop - window.innerHeight;
    const notice = document.querySelector('.notice_bottom');
    const noticeTop = notice.offsetTop - window.innerHeight;

    const magazineTitle = document.querySelectorAll('.magazine_wrap > ul > li > h1');
    const magazineDesc = document.querySelectorAll('.magazine_wrap > ul > li > span');
    const magazineImg = document.querySelectorAll('.magazine_wrap > ul > li > a');

    const footer = document.querySelector('footer');
    const footerSNS = document.querySelector('.footer_sns');
    const toTopBtn = document.querySelector('.top_btn');

    toTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
    
    function sectionAni() {
        yOffset = window.pageYOffset;
        let offsetLeft = yOffset;
        if (yOffset >= brandTop) {
            brandTitle.classList.add('active');
            brandSlide.classList.add('active', 'd04');
        }
        for (let i = 0; i < textBg.length; i++) {
            let textBgTop = (textBg[i].offsetTop + brandTop);
            if (yOffset >= textBgTop) {
                textBg[i].style.left = `${-(offsetLeft / brandTop) * 100}%`;
            }
        }
        if (yOffset >= storyTop) {
            storyTitle.classList.add('active');
        }
        for (let i = 0; i < storyItem.length; i++) {
            let storyItemTop = storyItem[i].offsetTop + 100;
            if (yOffset >= storyItemTop) {
                storyItem[i].classList.add('active');
            }
        }

        for (let i = 0; i < productinfoItem.length; i++) {
            let productImgTop = productInfoImg[i].offsetTop - window.innerHeight;
            let productInfoTitleTop = productInfoTitle[i].offsetTop - window.innerHeight;
            let productInfoDescTop = productInfoDesc[i].offsetTop - window.innerHeight;
            let productInfoBtnTop = productInfoBtn[i].offsetTop - window.innerHeight;

            if (yOffset >= productImgTop) {
                productInfoImg[i].classList.add('active');
            }
            if (yOffset >= productInfoTitleTop) {
                productInfoTitle[i].classList.add('active');
            }
            if (yOffset >= productInfoDescTop) {
                productInfoDesc[i].classList.add('active');
            }
            if (yOffset >= productInfoBtnTop) {
                productInfoBtn[i].classList.add('active');
            }
        }
        for (let i = 0; i < itme03Img.length; i++) {
            const itme03ImgTop = itme03Img[i].getBoundingClientRect().top + (yOffset - window.innerHeight);
            // console.log(yOffset,itme03ImgTop);
            if (yOffset >= itme03ImgTop) {
                itme03Img[i].classList.add('active', 'd0' + [i + 1]);
            }
        }
        if (yOffset >= bestProductTop) {
            bestProduct.classList.add('active');
        }
        if (yOffset >= newProductTop) {
            newProduct.classList.add('active');
        }
        if (yOffset >= vodTop) {
            document.querySelector('.vod_wrap').classList.add('active');
        }
        if (yOffset >= vodTitleTop) {
            vodTitle.classList.add('active');
            document.querySelector('.vod_wrap > span').classList.add('active', 'd04');
        }
        if (yOffset >= noticeImgTop) {
            noticeImg.classList.add('active');
        }
        if (yOffset >= noticeTop) {
            notice.classList.add('active');
        }
        for (let i = 0; i < magazineTitle.length; i++) {
            const magazineTitleTop = magazineTitle[i].offsetTop - window.innerHeight;
            const magazineDescTop = magazineDesc[i].offsetTop - window.innerHeight;
            const magazineImgTop = magazineImg[i].offsetTop - window.innerHeight;
            if(yOffset >= magazineTitleTop) {
                magazineTitle[i].classList.add('active');
            }
            if(yOffset >= magazineDescTop) {
                magazineDesc[i].classList.add('active');
            }
            if(yOffset >= magazineImgTop) {
                magazineImg[i].classList.add('active');
            }
        }
        const footerTop = footer.getBoundingClientRect().top + (yOffset - window.innerHeight);
        if (yOffset >= footerTop) {
            footerSNS.classList.remove('fixed');
        }else {
            footerSNS.classList.add('fixed');
        }
    }

    let bannerCounting = document.querySelector('.banner_swiper .count');
    let bannerTotal = document.querySelector('.banner_swiper .total');
    let brandCounting = document.querySelector('.brand_slider .count');
    let brandTotal = document.querySelector('.brand_slider .total');
    let bannerReal = swiper.realIndex;
    let brandReal = swiper2.realIndex;
    bannerTotal.innerHTML = bannerSlider.length;
    brandTotal.innerHTML = brandSlider.length;
    bannerCounting.innerHTML = bannerReal + 1;
    brandCounting.innerHTML = brandReal + 1;
    
    swiper.on('slideChange', function() {
        let real = swiper.realIndex;
        bannerCounting.innerHTML = real + 1 ;
    });
    swiper2.on('slideChange', function() {
        let real = swiper2.realIndex;
        brandCounting.innerHTML = real + 1 ;
    });

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

    window.addEventListener('scroll', () => {
        header.classList.add('scroll');
        footerSNS.classList.add('fade');
        if (window.pageYOffset === 0) {
            header.classList.remove('scroll');
            footerSNS.classList.remove('fade');
        }
        sectionAni();
    });

    window.addEventListener('load', () => {

    });

})();