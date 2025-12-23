document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  if (!loginForm) {
    console.error("Форма з класом 'login-form' не знайдена!");
    return;
  }

  loginForm.addEventListener("submit", function (event) {
    // Запобігаємо перезагрузці сторінки
    event.preventDefault();

    const emailValue = loginForm.elements.email.value.trim();
    const passwordValue = loginForm.elements.password.value.trim();

    if (emailValue === "" || passwordValue === "") {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);

    // Очищаємо форму
    loginForm.reset();
  });
});