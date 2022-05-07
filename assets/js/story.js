(() => {
    let yOffset = 0;
    const conTitle = document.querySelectorAll('.con h1');
    const conSubTitle = document.querySelectorAll('.con h2');
    const conDesc = document.querySelectorAll('.con p');
    const contImg = document.querySelectorAll('.con > ul > li');

    function tabMove() {
        var brandTab = $('.story_tab > ul > li');
        brandTab.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index();
            var content = $('.con').eq(index);
            var offset = content.offset().top - 100;
            $("html,body").animate({ scrollTop: offset }, 1500, "easeInOutExpo");
        });
    }

    function sectionAni(index){
        yOffset = window.pageYOffset;
        let currentTop = index.offsetTop - window.innerHeight;
        if(index.length >= 2) {
            for(let i = 0; i < index.length; i++){
                currentTop = index[i].getBoundingClientRect().top + (yOffset - window.innerHeight);
                if(yOffset >= currentTop) {
                    index[i].classList.add('active');
                }
            }
        }
        if(yOffset >= currentTop && index.length === 1) {
            index.classList.add('active');
        }
    }

    window.addEventListener('load', () => {
        tabMove();
    });

    window.addEventListener('scroll', () => {
        sectionAni(conTitle);
        sectionAni(conSubTitle);
        sectionAni(conDesc);
        sectionAni(contImg);
    });
})();