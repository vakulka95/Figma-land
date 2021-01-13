let burgerBtn = document.querySelector('.header-inner-burger');
let cards = document.querySelectorAll('.main-product-card')
let left  = document.querySelector('.left');
let right  = document.querySelector('.right');

// Progress Bar
function progressMove() {
    let facebook = 36959,
        twitter = 15854,
        behance = 1829,
        instagram = 49943;

    let count = 0;
    let percentFacebook = countPercent(facebook, 70000);
    let percentTwitter = countPercent(twitter, 70000);
    let percentBehance = countPercent(behance, 2000);
    let percentInstagram = countPercent(instagram, 1000000);

    let progressFacebook = document.querySelectorAll('.facebook .progress-line');
    progressFacebook.forEach(el => {
        const updateFacebook = setInterval(() => {
            if (count > percentFacebook) {
                clearInterval(updateFacebook);
            }
            el.style.width = ++count + '%';
        }, 15);
    })
    let progressCountFacebook = document.querySelectorAll('.facebook .progress-count');
    progressCountFacebook.forEach(el => {
        el.textContent = facebook;
    })





    let progressTwitter = document.querySelector('.twitter .progress-line')
    let progressCountTwitter = document.querySelector('.twitter .progress-count');
    let progressBehance = document.querySelector('.behance .progress-line')
    let progressCountBehance = document.querySelector('.behance .progress-count');
    let progressInstagram = document.querySelector('.instagram .progress-line')
    let progressCountInstagram = document.querySelector('.instagram .progress-count');

    const updateTwitter = setInterval(() => {
        if (count > percentTwitter) {
            clearInterval(updateTwitter);
        }
        progressTwitter.style.width = ++count + '%';
    }, 15);
    const updateBehance = setInterval(() => {
        if (count > percentBehance) {
            clearInterval(updateBehance);
        }
        progressBehance.style.width = ++count + '%';
    }, 15);
    const updateInstagram = setInterval(() => {
        if (count > percentInstagram) {
            clearInterval(updateInstagram);
        }
        progressInstagram.style.width = ++count + '%';
    }, 15);


    progressCountTwitter.textContent = twitter;
    progressCountBehance.textContent = behance;
    progressCountInstagram.textContent = instagram;


}



const countPercent = (network, max) => {
    let per = network / max * 100;
    return per;
}


progressMove()
// Burger menu

if(burgerBtn){
    burgerBtn.onclick = () => {
        let burgerMenu = document.querySelector('.burger-menu');
        let burgerCross = document.querySelector('.burger-cross');
        let mobile = document.querySelector('.main-mobile');
        let body = document.querySelector('body');
        let links = document.querySelectorAll('.mobile-link');
        burgerMenu.classList.toggle('_active');
        burgerCross.classList.toggle('_active');
        mobile.classList.toggle('_active')
        body.style.overflow = 'hidden';
        links.forEach(el => {
            el.onclick = () => {
                burgerMenu.classList.toggle('_active');
                burgerCross.classList.toggle('_active');
                mobile.classList.toggle('_active')
                body.style.overflow = 'scroll';

            }
        })
        if(burgerMenu.classList.contains('_active')){
            body.style.overflow = 'scroll';

        }
    }
}

// slider

if(cards){
    
    if(window.screen.width > 990 && right.classList.contains('right') && left.classList.contains('left')){
        left.onclick = () => {
            null
        }
        right.onclick = () => {
            null
        }
    }else{
        right.onclick = () => {
            right.style.transform = 'translateX(50px)';
            left.style.transform = 'translateX(-360px)';
            left.onclick = () => {
                right.style.transform = 'translateX(360px)';
                left.style.transform = 'translateX(-50px)';
            }
        }
    }
}


let animItems = document.querySelectorAll('.anim');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params){
        for(let i = 0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('-active');
            }else{
                animItem.classList.remove('-active');
            }
        }
    }

    function offset(el){
        const rect  = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}
animOnScroll()