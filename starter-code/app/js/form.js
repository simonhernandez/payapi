// Variables
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const company = document.getElementById('company');
const title = document.getElementById('title');

// Main
form.addEventListener('submit', e => {
    e.preventDefault();

    // TODO: call checkInput function
    checkInputs();
});

// Functions
function checkInputs(){
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const companyValue = company.value.trim();
    const titleValue = title.value.trim();

    if (nameValue === ''){
        alert('error');
    }

}