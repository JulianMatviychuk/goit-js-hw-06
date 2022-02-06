function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector('#controls').firstElementChild;
const listOfBoxes = document.querySelector('#boxes');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

let firstSizeBox = 30;

createBtn.addEventListener('click', createAnotherBoxes);
destroyBtn.addEventListener('click', destroyAllBoxes);

function createAnotherBoxes() {
  const amountOfBoxes = createBoxes(inputRef.value);
    listOfBoxes.append(...amountOfBoxes);
}


function createBoxes(amount) {
  let sizeOfBox = 0;
  const boxElements = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.display = 'block';
    sizeOfBox = firstSizeBox + i * 10;
    boxEl.style.width = `${sizeOfBox}px`;
    boxEl.style.height = `${sizeOfBox}px`;
    boxElements.push(boxEl);
  }
  firstSizeBox = sizeOfBox + 10;
  return boxElements;
}

function destroyAllBoxes() {
  listOfBoxes.innerHTML = "";
  firstSizeBox = 30;
  inputRef.value = null;
}