(() => {
    let yOffset = 0;
    const companyTitle = document.querySelector(".sub_contents > h1");
    const contImg = document.querySelectorAll('.cont_img');
    const contHeader = document.querySelectorAll('.cont_text > h1');
    const contText = document.querySelectorAll('.cont_text > p');
    const cont2Title = document.querySelector('.company_title');
    const cont2Header = document.querySelector('.content02 > h2');
    const cont2Text = document.querySelector('.content02 > p');
    
    function sectionAni(index){
        yOffset = window.pageYOffset;
        let currentTop = index.offsetTop - window.innerHeight;
        for(let i = 0; i < index.length; i++){
            let currentTop = index[i].offsetTop - window.innerHeight;
            if(currentTop < 0){
                currentTop = index[i].getBoundingClientRect().top + (yOffset - window.innerHeight);
            }
            if(yOffset >= currentTop) {
                index[i].classList.add('active');
            }
        }
        if(currentTop < 0){
            currentTop = index.getBoundingClientRect().top + (yOffset - window.innerHeight);
        }
        if(yOffset >= currentTop) {
            index.classList.add('active');
        }
        return;
    }
    window.addEventListener('load', () => {
        sectionAni(companyTitle);
        sectionAni(contImg);
        sectionAni(contText);
        sectionAni(contHeader);
    });

    window.addEventListener('scroll', () => {
        sectionAni(companyTitle);
        sectionAni(contImg);
        sectionAni(contText);
        sectionAni(contHeader);
        sectionAni(cont2Title);
        sectionAni(cont2Header);
        sectionAni(cont2Text);
    });
})();