const inputEl = document.querySelector('#controls > input');

const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const amount = Number(inputEl.value);



createBtnEl.addEventListener('click', onClickCreateBtn);

destroyBtnEl.addEventListener('click', onClickDestroyBtn);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {
  const elementsToAdd = [];

  for (let i = 0; i < amount; i += 1) {
    
    
    const newDiv = document.createElement('div');
    
    
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
  
    elementsToAdd.push(newDiv);
  }
  return elementsToAdd;
 }
  
function onClickDestroyBtn() {
  boxesEl.innerHTML = '';
}


function onClickCreateBtn() {
  let boxesToAdd = createBoxes(inputEl.value);
  boxesEl.append(...boxesToAdd);
}
