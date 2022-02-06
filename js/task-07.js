const inputFontSizeControl = document.querySelector("#font-size-control");
const textChangeFontSize = document.querySelector("#text");
console.dir(textChangeFontSize);

inputFontSizeControl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  textChangeFontSize.style.fontSize = `${event.currentTarget.value}px`;
}