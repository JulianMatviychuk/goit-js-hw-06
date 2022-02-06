const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


input.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value === ""
    ? nameOutput.textContent = "Anonymous"
    : (nameOutput.textContent = event.currentTarget.value);
};