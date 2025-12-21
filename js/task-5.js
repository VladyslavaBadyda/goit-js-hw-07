function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const colorSpan = document.querySelector("span.color");
  const changeButton = document.querySelector("button.change-color");

  changeButton.addEventListener("click", () => {
    // Генеруємо випадковий колір
    const newColor = getRandomHexColor();

    // Змінюємо фон 
    body.style.backgroundColor = newColor;

    // Оновлюємо текст у span.color
    colorSpan.textContent = newColor;
  });
});