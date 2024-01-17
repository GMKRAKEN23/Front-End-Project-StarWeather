const boxDesignOne = document.getElementById('box_design_one');
const body = document.querySelector('body');
const headerTitle = document.querySelector('.header_title');
const headerTitleS = document.querySelector('.header_title_s');
const headerTitleW = document.querySelector('.header_title_w');
const mainTitle = document.querySelector('.main_title');
const inputMain = document.querySelector('.main_input');
const titleAutorBy = document.querySelector('.header_title_autor_by');
const containerPainting = document.querySelector('.header_painting_container');

boxDesignOne.addEventListener('click', function(){
    body.classList.toggle('active_design_one');
    headerTitle.classList.toggle('active_design_one');
    headerTitleS.classList.toggle('active_design_one');
    headerTitleW.classList.toggle('active_design_one');
    inputMain.classList.toggle('active_design_one');
    mainTitle.classList.toggle('active_design_one');
    titleAutorBy.classList.toggle('active_design_one');
    containerPainting.classList.toggle('active_design_one');
})