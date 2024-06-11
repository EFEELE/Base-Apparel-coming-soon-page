const message = document.getElementById('message');
const form = document.getElementById('form');
const emailInput = document.getElementById('email');

const button = document.querySelector('button');

var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener('click', checkEmaiil);

function checkEmaiil(){
    if(emailInput.value.match(mailFormat)){
        form.classList.remove('error');
        
    }else{
        form.classList.add('error');
    }
}