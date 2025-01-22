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
