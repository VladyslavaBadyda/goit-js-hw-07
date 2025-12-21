
document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.querySelector("#name-input");
  const nameOutput = document.querySelector("#name-output");

  nameInput.addEventListener("input", (event) => {
    // Отримуємо значення з інпуту та обрізаємо пробіли по краях
    const trimmedValue = event.currentTarget.value.trim();

    // Якщо після обрізання рядок порожній — ставимо "Anonymous"
    if (trimmedValue === "") {
      nameOutput.textContent = "Anonymous";
    } else {
      nameOutput.textContent = trimmedValue;
    }
  });
});