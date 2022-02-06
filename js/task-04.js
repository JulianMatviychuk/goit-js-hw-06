let counterValue = 0;

const counter = document.querySelector('#counter');
const btnDecrement = counter.querySelector('button[data-action="decrement"]');
const btnIncrement = counter.querySelector('button[data-action="increment"]');
const value = counter.querySelector('#value');

const onBtnIncrementClick = (event) => {
  value.textContent = counterValue += 1;
};
const onBtnDecrementClick = (event) => {
  value.textContent = counterValue -= 1;
};

btnDecrement.addEventListener("click", onBtnDecrementClick);
btnIncrement.addEventListener("click", onBtnIncrementClick);
