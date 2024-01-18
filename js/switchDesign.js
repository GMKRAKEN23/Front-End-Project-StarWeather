const boxDesignOne = document.getElementById('box_design_one');
const boxDesignTwo = document.getElementById('box_design_two');
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

const designs = ['active_design_one', 'active_design_two', 'active_design_three'];
const elementsToToggle = [body, headerTitle, headerTitleS, headerTitleW, inputMain, mainTitle, titleAutorBy, titleAutor, containerPainting, paintingIcon];

let isLogoDefault = true;

boxDesignOne.addEventListener('click', () => applyDesign('active_design_one', 'asset/logo_1.png'));
boxDesignTwo.addEventListener('click', () => applyDesign('active_design_two', 'asset/logo_2.png'));
boxDesignThree.addEventListener('click', () => applyDesign('active_design_three', 'asset/logo_3.png'));

function applyDesign(activeClass, logoPath) {
  const isAlreadyActive = body.classList.contains(activeClass);

  designs.forEach(design => {
    elementsToToggle.forEach(element => {
      element.classList.remove(design);
    });
  });

  if (!isAlreadyActive) {
    elementsToToggle.forEach(element => {
      element.classList.add(activeClass);
    });

    isLogoDefault = false;
    imgLogo.src = logoPath;
  } else {
    elementsToToggle.forEach(element => {
      element.classList.remove(activeClass);
    });

    isLogoDefault = true;
    imgLogo.src = 'asset/logo.png';
  }
}