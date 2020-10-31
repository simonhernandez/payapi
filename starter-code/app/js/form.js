// Variables
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const company = document.getElementById('company');
const title = document.getElementById('title');
const text = document.getElementById('text');

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
    const textValue = text.value.trim();

    if (nameValue === ''){
        setErrorFor(name, 'Name cannot be blank');
    }

    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isValid(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }

    if (companyValue === ''){
        setErrorFor(company, 'Company cannot be blank');
    }

    if (titleValue === ''){
        setErrorFor(title, 'Title cannot be blank');
    }

    if (textValue === ''){
        setErrorFor(text, 'Text cannot be blank');
    }


}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = 'block';
    small.innerText = message;
}

function isValid(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}