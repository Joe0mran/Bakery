loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', theme);

const form = document.getElementById('form');
const email_input = document.getElementById('email_input');
const password_input = document.getElementById('password_input');

form.addEventListener('submit', (e) => {
  let errors = [];
  if (email_input){
    errors = getLoginFormErrors(email.value,password.value);
  }
  if (errors.length > 0) {
    e.preventDefault();
  }
})
function getLoginFormErrors(email, password) {
  let errors = [];
      
    if (email === '' || email == null) {
      errors.push('Email is required');
      email.parentElement.classList.add('incorrect');
    }
  
    if (password === '' || password == null || password.length < 8) {
      errors.push('Password is required');
      password.parentElement.classList.add('incorrect');
    } 
    return errors;
  }

    if (password === '' || password == null) {
      errors.push('Password is required');
      password.parentElement.classList.add('incorrect');
    } 
    return errors;
  }
