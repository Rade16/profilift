document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("http://localhost:3000/api/comment/getAll");

    if (!response.ok) {
      throw new Error("Ошибка при получении комментариев");
    }

    const comments = await response.json();
    const commentContainer = document.getElementById("commentContainer");

    commentContainer.innerHTML = "";

    comments.forEach((comment) => {
      const date = new Date(comment.date);
      const formattedDate = date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      const commentDiv = document.createElement("div");
      commentDiv.classList.add("feedback__comment-line-block");
      commentDiv.innerHTML = `
        <div class="feedback__comment-line-block-header">
          <p class="feedback__comment-line-block-header-name">${comment.name}</p>
          <p class="feedback__comment-line-block-header-date">${formattedDate}</p>
        </div>
        <p class="feedback__comment-line-block-text">${comment.text}</p>
      `;

      commentContainer.appendChild(commentDiv);
    });

    const commentLine = document.querySelector(
      ".feedback__comment-line"
    ).offsetWidth;
    console.log("Линия комментарий: ", commentLine);

    const commentSlider = document.querySelector(
      ".feedback__comment-slider"
    ).offsetWidth;
    console.log("Слайдер комментарий: ", commentSlider);

    const maxScrollWidthComment = commentSlider - commentLine;
    console.log("Максимальная прокрутка комментарий: ", maxScrollWidthComment);
    function getCommentWidth() {
      return commentContainer.children[0].offsetWidth + 10;
    }
    const leftArrowCommentSlider = document.getElementById(
      "leftArrowCommentSlider"
    );
    const rightArrowCommentSlider = document.getElementById(
      "rightArrowCommentSlider"
    );
    let currentCommentIndex = 0;
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
  } catch (error) {
    console.error("Ошибка загрузки комментариев:", error);
  }
});
