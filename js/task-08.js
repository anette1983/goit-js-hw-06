const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);
let formDataObject = {};

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    console.log(email.value, password.value);
   
    if (email.value === "" || password.value === "") {
        alert('Всі поля мають бути заповнені!');
    } else {
        formDataObject = { email: email.value, password: password.value };
        console.log(formDataObject);
        event.currentTarget.reset();
    }
        
} 
 

