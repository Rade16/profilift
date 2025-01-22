document
  .getElementById("addImageForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById("addImage");
    const file = fileInput.files[0];

    if (!file) {
      alert("Пожалуйста, выберите изображение");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:3000/api/image/create", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      alert("Изображение успешно загружено!");
    } catch (error) {
      console.error("Ошибка загрузки:", error);
      alert("Не удалось загрузить изображение");
    }
  });

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("http://localhost:3000/api/image/getAll");

    if (!response.ok) {
      throw new Error("Ошибка при получении изображений");
    }

    const images = await response.json();
    const imageListElement = document.getElementById("imageList");

    imageListElement.innerHTML = "";

    images.forEach((image) => {
      const imageElement = document.createElement("div");
      imageElement.classList.add("admin__add-images-list-item");

      const img = document.createElement("img");
      img.src = image.url;
      img.alt = "Image";

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Удалить";
      deleteButton.classList.add("admin__add-images-list-item-delete");

      deleteButton.addEventListener("click", async function () {
        try {
          const deleteResponse = await fetch(
            `http://localhost:3000/api/image/delete/${image.id}`,
            {
              method: "DELETE",
            }
          );

          if (!deleteResponse.ok) {
            throw new Error("Ошибка при удалении изображения");
          }

          imageElement.remove();
          alert("Изображение успешно удалено!");
        } catch (error) {
          console.error("Ошибка удаления:", error);
          alert("Не удалось удалить изображение");
        }
      });

      imageElement.appendChild(img);
      imageElement.appendChild(deleteButton);
      imageListElement.appendChild(imageElement);
    });
  } catch (error) {
    console.error("Ошибка загрузки изображений:", error);
  }
});

document
  .getElementById("addImage")
  .addEventListener("change", function (event) {
    const file = event.target.files[0]; // Получаем выбранный файл
    const previewContainer = document.getElementById("previewContainer");
    const imagePreview = document.getElementById("imagePreview");

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Устанавливаем путь к изображению в атрибут src для предварительного просмотра
        imagePreview.src = e.target.result;
        imagePreview.style.display = "block"; // Показываем изображение
      };

      // Читаем файл как URL для предварительного просмотра
      reader.readAsDataURL(file);
    } else {
      imagePreview.style.display = "none"; // Скрываем предварительный просмотр, если файл не выбран
    }
  });
