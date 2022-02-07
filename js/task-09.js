function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanValue = document.querySelector('.color');
console.log(spanValue);
const changeColorButton = document.querySelector('.change-color');
console.log(changeColorButton);

changeColorButton.addEventListener('click', changeBodyColor);

function spanTextChange(color) {
  spanValue.textContent = color;
}



function changeBodyColor(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
spanTextChange(newColor);
}

