const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

ingredients.map((ingredient) => {
  const newItemRef = document.createElement("li");
  newItemRef.textContent = `${ingredient}`;
  newItemRef.classList.add('item');
  ingredientsRef.append(newItemRef);
  console.log(newItemRef);
});
