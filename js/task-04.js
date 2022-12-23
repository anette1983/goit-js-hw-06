const decrBtnEl = document.querySelector('[data-action="decrement"]');
const incrBtnEl = document.querySelector('[data-action="increment"]');
let valueLabelEl = document.querySelector('#value');
let counterValue = 0;

decrBtnEl.addEventListener('click', onDecrBtnClick);
incrBtnEl.addEventListener('click', onIncrBtnClick);


function onDecrBtnClick() {
    counterValue -= 1;
    valueLabelEl.textContent = `${counterValue}`;
}

function onIncrBtnClick() {
    counterValue += 1;
    valueLabelEl.textContent = `${counterValue}`;
}

