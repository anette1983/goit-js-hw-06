const inputEl = document.querySelector('#font-size-control');
const outputEl = document.querySelector('#text');

inputEl.addEventListener('input', onIputChange);

function onIputChange() {
    outputEl.style.fontSize = `${Number(inputEl.value)}px`;
    
    console.log("🚀 ~ file: task-07.js:9 ~ onIputChange ~ outputEl.style.fontSize", outputEl.style.fontSize)
    
}


