document
  .getElementById("addCommentForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("formName").value;
    const date = document.getElementById("formDate").value;
    const text = document.getElementById("formComment").value;
    if (!name || !date || !text) {
      alert("Все поля должны быть заполнены!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, date, text }),
      });
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      alert("Отзыв успешно добавлен!");
    } catch (error) {
      console.error("Ошибка добавления отзыва:", error);
      alert("Не удалось добавить отзыв");
    }
  });

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("http://localhost:3000/api/comment/getAll");
    if (!response.ok) {
      throw new Error("Ошибка при получении отзывов");
    }
    const comments = await response.json();
    const commentListElement = document.getElementById("commentList");
    commentListElement.innerHTML = "";
    comments.forEach((comment) => {
      const date = new Date(comment.date);
      const formattedDate = date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const commentWrapper = document.createElement("div");
      commentWrapper.classList.add("admin__add-comments-list-item-wrapper");
      const commentElement = document.createElement("div");
      commentElement.classList.add("admin__add-comments-list-item");
      commentElement.innerHTML = `  
        <div class="admin__add-comments-list-item-name">${comment.name}</div>
        <div class="admin__add-comments-list-item-date">${formattedDate}</div>
        <div class="admin__add-comments-list-item-text">${comment.text}</div>
        `;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Удалить";
      deleteButton.classList.add("admin__add-comments-list-item-delete");

      deleteButton.addEventListener("click", async function () {
        try {
          const deleteResponse = await fetch(
            `http://localhost:3000/api/comment/delete/${comment.id}`,
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
      commentListElement.appendChild(commentWrapper);
      commentWrapper.appendChild(commentElement);
      commentWrapper.appendChild(deleteButton);
    });
  } catch (error) {
    console.error("Ошибка получения отзывов:", error);
  }
});
