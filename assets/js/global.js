(() => {
    const globalMarker = document.querySelectorAll('.cont03_con li');
    const globalMarkerLink = document.querySelectorAll('.cont03_con li a');
    const globalBtn = document.querySelectorAll('.con03_btn ul li');
    const globalBtnLink = document.querySelectorAll('.con03_btn ul li a');
    const contImg = document.querySelectorAll('.content01 > img');
    const contDesc = document.querySelectorAll('.content02 > p');
    const cont03 = document.querySelector('.content03');

    function Marker() {
        for (let i = 0; i < globalMarkerLink.length; i++) {
            globalMarkerLink[i].addEventListener('click', (e) => {
                e.preventDefault();
                for(let j = 0; j <globalMarkerLink.length; j++) {
                    globalMarker[j].classList.remove('active');
                    globalBtn[j].classList.remove('active');
                }
                globalMarker[i].classList.add('active');
                globalBtn[i].classList.add('active');
            });
        }
        for (let i = 0; i < globalBtnLink.length; i++) {
            globalBtnLink[i].addEventListener('click', (e) => {
                e.preventDefault();
                for(let j = 0; j < globalBtnLink.length; j++) {
                    globalMarker[j].classList.remove('active');
                    globalBtn[j].classList.remove('active');
                }
                globalMarker[i].classList.add('active');
                globalBtn[i].classList.add('active');
            });
        }
    }
        
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
        Marker();
        sectionAni(cont03);
        sectionAni(contImg);
        sectionAni(contDesc);
    });
})();