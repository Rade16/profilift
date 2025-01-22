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

function loadImagesAdmin() {
  const container = document.getElementById("imageList");

  const imagesHTML = imageArray
    .map((url) => {
      return `<img src="${url}" alt="Image" class="admin__add-images-list-item">`;
    })
    .join("");

  container.innerHTML = imagesHTML;
}
loadImagesAdmin();
