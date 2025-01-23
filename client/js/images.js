document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("http://localhost:3000/api/image/getAll");

    if (!response.ok) {
      throw new Error("Ошибка при получении изображений");
    }

    const images = await response.json();
    const container = document.getElementById("imageContainer");

    container.innerHTML = "";

    const imagePromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = document.createElement("img");
        img.classList.add("portfolio__image-line-image");
        img.id = "slider-image";
        img.src = image.url;
        img.alt = "Image";

        img.onload = () => {
          container.appendChild(img);
          resolve();
        };
        img.onerror = () => resolve();
      });
    });

    await Promise.all(imagePromises);

    const imageLine = document.querySelector(
      ".portfolio__image-line"
    ).offsetWidth;
    const imageSlider = document.querySelector(
      ".portfolio__image-slider"
    ).offsetWidth;

    const maxScrollWidth = imageSlider - imageLine;

    function getImageWidth() {
      return container.children[0].offsetWidth + 10;
    }

    const leftArrowImageSlider = document.getElementById(
      "leftArrowImageSlider"
    );
    const rightArrowImageSlider = document.getElementById(
      "rightArrowImageSlider"
    );
    let currentIndex = 0;

    function updateSlider() {
      const offset = currentIndex;
      container.style.transition = "transform 0.75s ease-out";
      container.style.transform = `translateX(${offset}px)`;
    }

    leftArrowImageSlider.addEventListener("click", () => {
      const imageWidth = getImageWidth();
      currentIndex = Math.min(currentIndex + imageWidth, 0);
      updateSlider();
    });

    rightArrowImageSlider.addEventListener("click", () => {
      const imageWidth = getImageWidth();
      currentIndex = Math.max(currentIndex - imageWidth, maxScrollWidth);
      updateSlider();
    });
  } catch (error) {
    console.error("Ошибка загрузки изображений:", error);
  }
});
