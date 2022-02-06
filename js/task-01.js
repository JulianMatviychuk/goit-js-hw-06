const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesRef.length}`);
console.log("");

categoriesRef.forEach(function (category) {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Element: ${category.lastElementChild.children.length}`);
  console.log("");
});