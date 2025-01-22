//выгрузка изображений

const imageArray = [
  "./assets/img/image (1).jpg",
  "./assets/img/image (2).jpg",
  "./assets/img/image (3).jpg",
  "./assets/img/image (4).jpg",
  "./assets/img/image (5).jpg",
  "./assets/img/image (6).jpg",
  "./assets/img/image (1).jpg",
  "./assets/img/image (2).jpg",
  "./assets/img/image (3).jpg",
  "./assets/img/image (4).jpg",
  "./assets/img/image (5).jpg",
  "./assets/img/image (6).jpg",
  "./assets/img/image (1).jpg",
  "./assets/img/image (2).jpg",
  "./assets/img/image (3).jpg",
  "./assets/img/image (4).jpg",
  "./assets/img/image (5).jpg",
  "./assets/img/image (6).jpg",
];

function loadImages() {
  const container = document.getElementById("imageContainer");

  const imagesHTML = imageArray
    .map((url) => {
      return `<img src="${url}" alt="Image" class="portfolio__image-line-image" id="slider-image">`;
    })
    .join("");

  container.innerHTML = imagesHTML;
}

loadImages();

//слайдер

const container = document.getElementById("imageContainer");
const leftArrowImageSlider = document.getElementById("leftArrowImageSlider");
const rightArrowImageSlider = document.getElementById("rightArrowImageSlider");
let currentIndex = 0;

//получаем длину слайдера
const imageSlider = document.querySelector(
  ".portfolio__image-slider"
).offsetWidth;
console.log(imageSlider);

//получаем длину контейнера изображений
const imageLine = document.querySelector(".portfolio__image-line").offsetWidth;
console.log(imageLine);

//высчитываем максимальную прокрутку
const maxScrollWidth = imageSlider - imageLine;

function getImageWidth() {
  return container.children[0].offsetWidth + 10;
}

function updateSlider() {
  const offset = currentIndex;
  container.style.transition = "transform 0.75s ease-out";
  container.style.transform = `translateX(${offset}px)`;
}

leftArrowImageSlider.addEventListener("click", () => {
  const imageWidth = getImageWidth();
  currentIndex = currentIndex + imageWidth;

  if (currentIndex + imageWidth > 0) {
    currentIndex = 0;
  }

  updateSlider();
});

rightArrowImageSlider.addEventListener("click", () => {
  const imageWidth = getImageWidth();
  currentIndex = currentIndex - imageWidth;

  if (currentIndex - imageWidth < maxScrollWidth) {
    currentIndex = maxScrollWidth;
  }

  updateSlider();
});

//слайдер комментариев
const commentContainer = document.getElementById("commentContainer");
const leftArrowCommentSlider = document.getElementById(
  "leftArrowCommentSlider"
);
const rightArrowCommentSlider = document.getElementById(
  "rightArrowCommentSlider"
);

let currentCommentIndex = 0;

const commentSlider = document.querySelector(
  ".feedback__comment-slider"
).offsetWidth;
console.log(commentSlider);

const commentLine = document.querySelector(
  ".feedback__comment-line"
).offsetWidth;

console.log(commentLine);

let maxScrollWidthComment = commentSlider - commentLine;

console.log(maxScrollWidthComment);

function getCommentWidth() {
  return document.querySelector(".feedback__comment-line-block").offsetWidth;
}

function updateCommentSlider() {
  const offset = currentCommentIndex;
  commentContainer.style.transition = "transform 0.75s ease-out";
  commentContainer.style.transform = `translateX(${offset}px)`;
}

leftArrowCommentSlider.addEventListener("click", () => {
  const commentWidth = getCommentWidth();
  currentCommentIndex = currentCommentIndex + commentWidth;

  if (currentCommentIndex + commentWidth > 0) {
    currentCommentIndex = 0;
  }

  updateCommentSlider();
});

rightArrowCommentSlider.addEventListener("click", () => {
  const commentWidth = getCommentWidth();
  currentCommentIndex = currentCommentIndex - commentWidth;
  console.log(getCommentWidth());
  if (currentCommentIndex - commentWidth < maxScrollWidthComment) {
    currentCommentIndex = maxScrollWidthComment;
  }

  updateCommentSlider();
});
