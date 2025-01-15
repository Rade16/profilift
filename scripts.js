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

  // Создаем строку с HTML для всех изображений
  const imagesHTML = imageArray
    .map((url) => {
      return `<img src="${url}" alt="Image" class="image">`;
    })
    .join(""); // join() используется для объединения всех строк в одну

  // Вставляем HTML в контейнер
  container.innerHTML = imagesHTML;
}

loadImages();

function loadImages1() {
  const container = document.getElementById("imageContainer1");

  // Создаем строку с HTML для всех изображений
  const imagesHTML = imageArray
    .map((url) => {
      return `<img src="${url}" alt="Image" class="image">`;
    })
    .join(""); // join() используется для объединения всех строк в одну

  // Вставляем HTML в контейнер
  container.innerHTML = imagesHTML;
}

loadImages1();
