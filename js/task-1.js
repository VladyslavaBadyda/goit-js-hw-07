// 1. Отримуємо всі елементи з класом item у списку #categories
const categoryItems = document.querySelectorAll('#categories .item');

// 2. Виводимо кількість категорій
console.log(`Кількість категорій: ${categoryItems.length}`);

// 3. Для кожного елемента .item виводимо заголовок і кількість його елементів
categoryItems.forEach((item) => {
  // Знаходимо заголовок <h2> всередині поточного .item
  const title = item.querySelector('h2').textContent;
  
  // Знаходимо всі <li> у вкладеному <ul> (без урахування самого .item)
  const itemsCount = item.querySelectorAll('ul li').length;
  
  // Виводимо інформацію
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});