const btnEl = document.querySelector('.change-color');
const colorTextEl = document.querySelector('.color');
const bodyBG = document.body;


btnEl.addEventListener('click', changeBgOnclick);




function changeBgOnclick() {
  bodyBG.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = bodyBG.style.backgroundColor;

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
