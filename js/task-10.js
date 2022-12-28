const inputEl = document.querySelector('#controls > input');

const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');



createBtnEl.addEventListener('click', onClickCreateBtn);

destroyBtnEl.addEventListener('click', onClickDestroyBtn);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {
  const elementsToAdd = [];

  for (let i = 0; i < amount; i += 1) {
    
    
    const newDiv = document.createElement('div');
    const size = `${30 + 10 * i}px`;
    
    
    newDiv.style.width = size;
    newDiv.style.height = size;
    newDiv.style.backgroundColor = getRandomHexColor();
  
    // elementsToAdd.push(newDiv);
  }
  return elementsToAdd.push(newDiv);
 }
  
function onClickDestroyBtn() {
  boxesEl.innerHTML = '';
}


function onClickCreateBtn() {
  let boxesToAdd = createBoxes(Number(inputEl.value));
  boxesEl.append(...boxesToAdd);
}
