//DOM
const body = document.querySelector('body');
const ImgSlides = document.querySelectorAll('.slide__img');
const LeftBtnSwitchSlides = document.querySelector('.left__switch');
const RightBtnSwitchSlides = document.querySelector('.right__switch');
const Slider = document.querySelector('.slider-line');
const SwipperSpans = document.querySelectorAll('.swipper__span');
const cards = document.querySelectorAll('.card');
const headerBtnCatalog = document.querySelector('.header__main__catalog-button');
const catalog = document.querySelector('.catalog');
let percentLeft=0;
const header = document.querySelector('.header');
const svgHeaderLinesBtn = document.querySelector('.header__main__catalog-button-lines');
const svgHeaderCrossBtn = document.querySelector('.header__main__catalog-button-cross');
const searchBtnAdaptive = document.querySelector('.header__main__item-adaptive');
const searchHeadAdaptive = document.querySelector('.header__search_adaptive')
const headerMain = document.querySelector('.header__main');
const searchHeadAdaptiveCross = document.querySelector('.header__search_adaptive-cross');
const swipperSpansSlider = document.querySelectorAll('.swipper__span');
const width = window.innerWidth;

for (let swipperSpan of swipperSpansSlider) {
    swipperSpan.addEventListener('click', ()=> {
        if (swipperSpan.id == 1) {
            percentLeft = 0;
        } else if (swipperSpan.id == 2) {
            percentLeft = -100;
        } else if (swipperSpan.id == 3) {
            percentLeft = -200;
        } else if (swipperSpan.id == 4) {
            percentLeft = -300;
        }
        controlPercentLeft();
    })
}

searchBtnAdaptive.addEventListener('click',()=>{
    if (!searchHeadAdaptive.matches('.active')) {
        searchHeadAdaptive.style.display = 'flex';
        headerMain.style.display = 'none';
        searchHeadAdaptive.classList.add('active');
    }
})
searchHeadAdaptiveCross.addEventListener('click',()=>{
    if (searchHeadAdaptive.matches('.active')) {
        searchHeadAdaptive.style.display = 'none';
        headerMain.style.display = 'flex';
        searchHeadAdaptive.classList.remove('active');
    }
})
headerBtnCatalog.addEventListener('click', ()=> {
    if (header.matches('.fixed')) {
        catalog.style.cssText = `
        margin-left: calc((100vw - 1564px) / 2);
        top: 85px;
        `;
        if (catalog.matches('.open')) {
                catalog.classList.remove('open');
                svgHeaderCrossBtn.style.display = 'none';
                svgHeaderLinesBtn.style.display = 'block';
                svgHeaderCrossBtn.classList.remove('open')
                svgHeaderLinesBtn.classList.add('open');
                catalog.style.display = 'none';
        } else {
                catalog.classList.add('open');
                catalog.style.display = 'flex';
                svgHeaderLinesBtn.style.display = 'none';
                svgHeaderCrossBtn.style.display = 'block';
                svgHeaderCrossBtn.classList.add('open')
                svgHeaderLinesBtn.classList.remove('open');
        }
    } else{ 
        if (catalog.matches('.open')) {
            catalog.classList.remove('open');
            svgHeaderCrossBtn.style.display = 'none';
            svgHeaderLinesBtn.style.display = 'block';
            catalog.style.display = 'none';
            svgHeaderCrossBtn.classList.remove('open')
            svgHeaderLinesBtn.classList.add('open');
    } else {
            catalog.classList.add('open');
            catalog.style.display = 'flex';
            svgHeaderLinesBtn.style.display = 'none';
            svgHeaderCrossBtn.style.display = 'block';
            svgHeaderCrossBtn.classList.add('open')
            svgHeaderLinesBtn.classList.remove('open');
    }
    }
})

RightBtnSwitchSlides.addEventListener('click', ()=>{
    if (percentLeft> -300 ) {
        percentLeft = percentLeft-100;
        Slider.style.left = `${percentLeft}%`;
        controlSwipperSpanColor(percentLeft);
        renderInfoAboutGameInSlider(percentLeft);
    } else {
        percentLeft = 0;
        Slider.style.left = `${percentLeft}%`;
        controlSwipperSpanColor(percentLeft);
        renderInfoAboutGameInSlider(percentLeft);
    }
    console.log(percentLeft);
})


LeftBtnSwitchSlides.addEventListener('click', ()=>{
    if (percentLeft< 0 ) {
        percentLeft = percentLeft+100;
        Slider.style.left = `${percentLeft}%`;
        controlSwipperSpanColor(percentLeft);
        renderInfoAboutGameInSlider(percentLeft);
    } else {
        percentLeft = -300;
        Slider.style.left = `${percentLeft}%`;
        controlSwipperSpanColor(percentLeft);
        renderInfoAboutGameInSlider(percentLeft);
    }
    console.log(percentLeft);
})
const controlPercentLeft = () => {
    Slider.style.left = `${percentLeft}%`;
    controlSwipperSpanColor(percentLeft);
    renderInfoAboutGameInSlider(percentLeft);
}
const controlSwipperSpanColor = (percentLeft) => {
    
    if (percentLeft == 0){
        for (let SwipperSpan of SwipperSpans) {
            SwipperSpan.classList.remove('active');
           } 
       SwipperSpans[0].classList.add('active');
    } else if (percentLeft == -100) {
        for (let SwipperSpan of SwipperSpans) {
            SwipperSpan.classList.remove('active');
           } 
        SwipperSpans[1].classList.add('active');
    } else if (percentLeft == -200) {
        for (let SwipperSpan of SwipperSpans) {
            SwipperSpan.classList.remove('active');
           } 
        SwipperSpans[2].classList.add('active');
    } else if (percentLeft == -300) {
        for (let SwipperSpan of SwipperSpans) {
            SwipperSpan.classList.remove('active');
           } 
        SwipperSpans[3].classList.add('active');
    }
    
}

for (let card of cards) {
    const additionalInfoCard = card.querySelector('.card__info-additional-information');
    const firstPlatformBtn= card.querySelector('.select__platform__btns-ps4');
    const secondPlatformBtn= card.querySelector('.select__platform__btns-ps5');
    const cardInfoName = card.querySelector('.card__info-name');
    const platform = card.querySelector('.second-platform-text');
    card.addEventListener('mouseover', ()=> {
        if (width>1000) {
            additionalInfoCard.style.display = `flex`;
        }
    })
    card.addEventListener('mouseout', ()=> {
        if (width>1000) {
            additionalInfoCard.style.display = `none`;
        }
    })
    firstPlatformBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        secondPlatformBtn.classList.remove('selected');
        firstPlatformBtn.classList.add('selected');
        const content = cardInfoName.innerText;
        const contentArr = content.split('');
        let lastIdx=contentArr[contentArr.length-1];
        lastIdx = 4;
        contentArr[contentArr.length-1] = lastIdx.toString();
        const newNameGame = contentArr.join('');
        cardInfoName.innerHTML= `${newNameGame}`;
        platform.innerHTML= `PS${lastIdx}`;
    })
    secondPlatformBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        firstPlatformBtn.classList.remove('selected');
        secondPlatformBtn.classList.add('selected');
        const content = cardInfoName.innerText;
        const contentArr = content.split('');
        let lastIdx=contentArr[contentArr.length-1];
        lastIdx = 5;
        contentArr[contentArr.length-1] = lastIdx.toString();
        const newNameGame = contentArr.join('');
        cardInfoName.innerHTML= `${newNameGame}`;
        platform.innerHTML= `PS${lastIdx}`;
    })
}
window.onscroll = function(){
    const height = window.pageYOffset;
    const el = document.querySelector('.scroll-to-top');
    const newEl = document.querySelector('.scroll-toTop');
    const headerTop = document.querySelector('.header__top');
    const headerContainer = document.querySelector('.header__container');
    const catalog = document.querySelector('.catalog');
    if (height<300) {
        el.classList.add('hidden');
    } else if (height>300 && height<2197 && el) {
        el.classList.remove('hidden');
        newEl.style.display = 'none';
    } else if (height>2197 && el) {
        el.classList.add('hidden');
        newEl.style.display = 'flex';
    } else if (height<2197 && newEl) {
        newEl.style.display = 'none';
        el.classList.remove('hidden');
    }
    if (height>50) {
        headerTop.style.display ='none';
        headerContainer.style.opacity = '1';
        header.classList.add('fixed');
        header.style.cssText = `
        border: none;
        position:fixed;
        background: #121212;
        z-index: 11;
        max-width:100vw;
        left: 0px;
        opacity: 1;
        `;
        svgHeaderCrossBtn.style.display = 'none';
        svgHeaderLinesBtn.style.display = 'block';
        if (header.matches('.fixed') && catalog.matches('.open')) {
            console.log(1);
            catalog.style.cssText = `
            margin-left: calc((100vw - 1564px) / 2);
            top: 85px;
            display: flex;
            `;
        }
        if(svgHeaderCrossBtn.matches('.open')) {
            svgHeaderLinesBtn.style.display = 'none';
            svgHeaderCrossBtn.style.display = 'block';
        } else {
            svgHeaderCrossBtn.style.display = 'none';
            svgHeaderLinesBtn.style.display = 'block';
        }
    } else if (height<50) {
        if (width<=1000) {
            header.style.cssText = `
            border: none;
            position:fixed;
            background: #121212;
            z-index: 11;
            max-width:100vw;
            left: 0px;
            opacity: 1;
            `;
            header.classList.remove('fixed');
            if (catalog.matches('.open')) {
                catalog.style.cssText = `
                margin-left: 0;
                top: 125px;
                display: flex;
                `; 
            }
            if(svgHeaderCrossBtn.matches('.open')) {
                svgHeaderLinesBtn.style.display = 'none';
                svgHeaderCrossBtn.style.display = 'block';
            } else {
                svgHeaderCrossBtn.style.display = 'none';
                svgHeaderLinesBtn.style.display = 'block';
            }
        } else{
            headerTop.style.display ='block';
            header.style.cssText = `
            position:relative;
            border-bottom: 1px solid rgb(255 255 255 / 100%);
            background: transparent;
            z-index: 11;
            `;
            header.classList.remove('fixed');
            if (catalog.matches('.open')) {
                catalog.style.cssText = `
                margin-left: 0;
                top: 125px;
                display: flex;
                `; 
            }
            if(svgHeaderCrossBtn.matches('.open')) {
                svgHeaderLinesBtn.style.display = 'none';
                svgHeaderCrossBtn.style.display = 'block';
            } else {
                svgHeaderCrossBtn.style.display = 'none';
                svgHeaderLinesBtn.style.display = 'block';
            }
        }
        }
       
  };
// data about first__screen game 
const InfoGames = [
    {
        name: 'Dead Island 2',
        release: 'Дата релиза: 21.04.2023',
        text: `Возвращение любимой зомби-саги, в которой объединились
        хоррор, черный юмор, неистовое истребление зомби и ошеломительный сюжет.`,
        buttons: {firstButton: 'Dead island 2',
                    secondButton:'DI2 Deluxe Edition'},
    },
    {
        name: 'Horizon Forbidden West™: Burning Shores',
        release: 'Дата релиза: 29.04.2023',
        text: `К югу от земель кланов Тенакт лежат руины Лос-Анджелеса,
        за сотни лет вулканических извержений и землетрясений
        превратившиеся в опасный архипелаг.`,
        buttons: {firstButton: 'Приобрести'},
    },
    {
        name: 'Resident Evil 4',
        release: 'Дата релиза: 24.04.2023',
        text: `После биологической катастрофы в Раккун-Сити прошло шесть лет.
        Агента Леона С. Кеннеди, пережившего те события, отправили на
        задание по спасению похищенной дочери президента. В попытках
        отыскать ее он оказывается в укромной европейской деревеньке,
        где с местными жителями творится что-то не то. Сорвите занавес
        с этой увлекательной и жуткой истории о смелом герое и познайте
        жизнь и смерть, ужас и восхищение.`,
        buttons: {firstButton: 'Для Xbox',
                    secondButton:'Для PS'},
    },
    {
        name: 'Star Wars: Jedi Survivor',
        release: 'Дата релиза: 28.04.2023',
        text: `История Кэла Кестиса продолжается в игре Star Wars Jedi: Survivor™
        — приключенческом экшне галактического масштаба с видом от третьего лица,
        созданном Respawn Entertainment совместно с Lucasfilm Games.`,
        buttons: {firstButton: 'Playstation',
                    secondButton:'Xbox'},
    },
]

const renderInfoAboutGameInSlider = (percentLeft) => {
    const divWithInfoAboutGame = document.querySelector('.infoAboutGame');
    const title = document.querySelector('.infoAboutGame-title');
    const release = document.querySelector('.infoAboutGame-release');
    const text = document.querySelector('.infoAboutGame-text');
    const firstBtn = document.querySelector('.infoAboutGame-buttons-first');
    const secondBtn = document.querySelector('.infoAboutGame-buttons-second');
    if (percentLeft == 0){
        title.innerHTML = InfoGames[0]?.name;
        release.innerHTML = InfoGames[0]?.release;
        text.innerHTML = InfoGames[0]?.text;
        if (Object.keys(InfoGames[0]?.buttons).length == 2) {
            firstBtn.innerHTML = InfoGames[0]?.buttons?.firstButton;
            secondBtn.classList.remove('hidden');
            secondBtn.innerHTML = InfoGames[0]?.buttons?.secondButton;
        } else if (Object.keys(InfoGames[0]?.buttons).length == 1) {
            firstBtn.innerHTML = InfoGames[0]?.buttons?.firstButton;
            secondBtn.classList.add('hidden');
        }
    } else if (percentLeft == -100) {
        title.innerHTML = InfoGames[1]?.name;
        release.innerHTML = InfoGames[1]?.release;
        text.innerHTML = InfoGames[1]?.text;
        if (Object.keys(InfoGames[1]?.buttons).length == 2) {
            firstBtn.innerHTML = InfoGames[1]?.buttons?.firstButton;
            secondBtn.classList.remove('hidden');
            secondBtn.innerHTML = InfoGames[1]?.buttons?.secondButton;
        } else if (Object.keys(InfoGames[1]?.buttons).length == 1) {
            firstBtn.innerHTML = InfoGames[1]?.buttons?.firstButton;
            secondBtn.classList.add('hidden');
        }
    } else if (percentLeft == -200) {
        title.innerHTML = InfoGames[2]?.name;
        release.innerHTML = InfoGames[2]?.release;
        text.innerHTML = InfoGames[2]?.text;
        if (Object.keys(InfoGames[2]?.buttons).length == 2) {
            firstBtn.innerHTML = InfoGames[2]?.buttons?.firstButton;
            secondBtn.classList.remove('hidden');
            secondBtn.innerHTML = InfoGames[2]?.buttons?.secondButton;
        } else if (Object.keys(InfoGames[2]?.buttons).length == 1) {
            firstBtn.innerHTML = InfoGames[2]?.buttons?.firstButton;
            secondBtn.classList.add('hidden');
        }
    } else if (percentLeft == -300) {
        title.innerHTML = InfoGames[3]?.name;
        release.innerHTML = InfoGames[3]?.release;
        text.innerHTML = InfoGames[3]?.text;
        if (Object.keys(InfoGames[3]?.buttons).length == 2) {
            firstBtn.innerHTML = InfoGames[3]?.buttons?.firstButton;
            secondBtn.classList.remove('hidden');
            secondBtn.innerHTML = InfoGames[3]?.buttons?.secondButton;
        } else if (Object.keys(InfoGames[3]?.buttons).length == 1) {
            firstBtn.innerHTML = InfoGames[3]?.buttons?.firstButton;
            secondBtn.classList.add('hidden');
        }
    }
}
    window.onload = controlSwipperSpanColor(percentLeft);
    window.onload = renderInfoAboutGameInSlider(percentLeft);

