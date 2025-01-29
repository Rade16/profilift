document.addEventListener("DOMContentLoaded", async function () {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Вы не авторизованы!");
    window.location.href = "login.html";
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/user/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Токен недействителен");
    }
  } catch (error) {
    console.error("Ошибка проверки токена:", error);
    alert("Вы не авторизованы!");
    window.location.href = "login.html";
  }
});
