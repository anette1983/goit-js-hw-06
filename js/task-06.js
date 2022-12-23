const inputEl = document.querySelector('#validation-input');
console.log("🚀 ~ file: task-06.js:2 ~ inputEl", inputEl)
const validationCondition = Number(inputEl.dataset.length);
console.log("🚀 ~ file: task-06.js:4 ~ validationCondition", validationCondition)


inputEl.addEventListener("blur", onFocusChange);



function onFocusChange() {
    if (inputEl.value.length === validationCondition) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
        

    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
        
    }
}

