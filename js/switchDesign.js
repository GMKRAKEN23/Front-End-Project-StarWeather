const boxDesignOne = document.getElementById('box_design_one');
const boxDesignThree = document.getElementById('box_design_three');

const body = document.querySelector('body');
const imgLogo = document.querySelector('.header_image');
const headerTitle = document.querySelector('.header_title');
const headerTitleS = document.querySelector('.header_title_s');
const headerTitleW = document.querySelector('.header_title_w');
const mainTitle = document.querySelector('.main_title');
const inputMain = document.querySelector('.main_input');

const titleAutorBy = document.querySelector('.header_title_autor_by');
const titleAutor = document.querySelector('.header_title_autor');
const containerPainting = document.querySelector('.header_painting_container');
const paintingIcon = document.querySelector('.bxs-palette');
const articleTitle = document.querySelector('.main_section_card_city_weather_article_title');
let isLogo1 = true;

boxDesignOne.addEventListener('click', function () {
    body.classList.toggle('active_design_one');
    headerTitle.classList.toggle('active_design_one');
    headerTitleS.classList.toggle('active_design_one');
    headerTitleW.classList.toggle('active_design_one');
    inputMain.classList.toggle('active_design_one');
    mainTitle.classList.toggle('active_design_one');
    titleAutorBy.classList.toggle('active_design_one');
    titleAutor.classList.toggle('active_design_one');
    containerPainting.classList.toggle('active_design_one');
    paintingIcon.classList.toggle('active_design_one');
    isLogo1 = !isLogo1;
    imgLogo.src = isLogo1 ? 'asset/logo.png' : 'asset/logo_2.png';
})

boxDesignThree.addEventListener('click', function () {
    body.classList.toggle('active_design_three');
    headerTitle.classList.toggle('active_design_three');
    headerTitleS.classList.toggle('active_design_three');
    headerTitleW.classList.toggle('active_design_three');
    inputMain.classList.toggle('active_design_three');
    mainTitle.classList.toggle('active_design_three');    
    titleAutorBy.classList.toggle('active_design_three');
    titleAutor.classList.toggle('active_design_three');
    containerPainting.classList.toggle('active_design_three');
    paintingIcon.classList.toggle('active_design_three');
    isLogo1 = !isLogo1;
    imgLogo.src = isLogo1 ? 'asset/logo.png' : 'asset/logo_3.png';
})