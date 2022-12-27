const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


// textInput.addEventListener("input", (event) => {
//     if (event.currentTarget.value) {
//         output.textContent = event.currentTarget.value;
//     } else {
//        output.textContent = "Anonymous"; 
//     }
// });


textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.trim()) {
        output.textContent = event.currentTarget.value;
    } else {
       output.textContent = "Anonymous"; 
    }
}

