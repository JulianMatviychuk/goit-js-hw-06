const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const arrayOfIngredients = ingredients.map(ingredient => {
  const newItemRef = document.createElement("li");
  newItemRef.textContent = `${ingredient}`;
  newItemRef.classList.add('item');
  return newItemRef;
});

document.querySelector("#ingredients").append(...arrayOfIngredients);