let lightButton = document.querySelector('.theme-button-light');
let darkButton = document.querySelector('.theme-button-dark');

darkButton.onclick = function () {
	document.body.classList.add('dark');
	darkButton.classList.add('active');
	lightButton.classList.remove('active');
};

lightButton.onclick = function () {
	document.body.classList.remove('dark');
	lightButton.classList.add('active');
	darkButton.classList.remove('active');
};

let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

serifButton.onclick = function () {
	document.body.classList.add('serif');
	serifButton.classList.add('active');
	sansSerifButton.classList.remove('active');
};

sansSerifButton.onclick = function () {
	document.body.classList.remove('serif');
	sansSerifButton.classList.add('active');
	serifButton.classList.remove('active');
}; 

let blogArticles = document.querySelectorAll('.blog-article');

for (let blogArticle of blogArticles) {
  let moreButton = blogArticle.querySelector('.more');
  moreButton.onclick = function () {
    blogArticle.classList.remove('short');
  };
};

let gridButton = document.querySelector('.card-view-button-grid');
let listButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards')

listButton.onclick = function () {
	cards.classList.add('list');
	listButton.classList.add('active');
	gridButton.classList.remove('active');
};

gridButton.onclick = function () {
	cards.classList.remove('list');
	gridButton.classList.add('active');
	listButton.classList.remove('active');
};

let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');


for (let activeImage of previews) {
activeImage.onclick = function (evt) {
  evt.preventDefault();
  mainImage.src = activeImage.href;

  let currentActive = document.querySelector('.preview-list .active-item');
  currentActive.classList.remove('active-item');
  activeImage.classList.add('active-item');
};
}

