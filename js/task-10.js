const inputEl = document.querySelector('#controls > input');

const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');



createBtnEl.addEventListener('click', onClickCreateBtn);

destroyBtnEl.addEventListener('click', onClickDestroyBtn);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// function createBoxes(amount) {
//   const elementsToAdd = [];

//   for (let i = 0; i < amount; i += 1) {
    
    
//     const newDiv = document.createElement('div');
//     const size = `${30 + 10 * i}px`;
    
    
//     newDiv.style.width = size;
//     newDiv.style.height = size;
//     newDiv.style.backgroundColor = getRandomHexColor();
  
//     elementsToAdd.push(newDiv);
//   }
//   return elementsToAdd;
//  }

function createBoxes(amount) {
  return new Array(amount).fill('').map((item, i) => {
    // створився новий масив з тієї к-ті елтів, яку ввели, а філ їх заповнив пустими строками, потім перебрали і на кожн ітерації додали нові елти
    const newDiv = document.createElement('div');
    const size = `${30 + 10 * i}px`;

    newDiv.style.width = size;
    newDiv.style.height = size;
    newDiv.style.backgroundColor = getRandomHexColor();
    return newDiv;

})
}
  
function onClickDestroyBtn() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}


function onClickCreateBtn() {
  let boxesToAdd = createBoxes(Number(inputEl.value));
  boxesEl.append(...boxesToAdd);
}


// Метод fill
// const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
// console.log(array1.fill(5, 1));
// expected output: Array [1, 5, 5, 5]

// console.log(array1.fill(6));
// expected output: Array [6, 6, 6, 6]
