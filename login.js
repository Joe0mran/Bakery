loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', theme);
const form = document.getElementById('form');
const email_input = document.getElementById('email_input');
const password_input = document.getElementById('password_input');

form.addEventListener('submit', (e) => {
    console.log('Form submitted!');
  email_input.parentElement.classList.remove('incorrect');
  password_input.parentElement.classList.remove('incorrect');

 
  const errors = getLoginFormErrors(email_input.value, password_input.value);

  if (errors.length > 0) {
    e.preventDefault();
    displayErrors(errors); 
  }
});

function getLoginFormErrors(email, password) {
  let errors = [];

  if (email === '' || email == null) {
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }

  if (password === '' || password == null) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }

  return errors;
}

function displayErrors(errors) {
  const errorContainer = document.getElementById('error-messages');
  errorContainer.innerHTML = ''; 

  errors.forEach((error) => {
    const errorElement = document.createElement('p');
    errorElement.textContent = error;
    errorElement.style.color = 'red';
    errorContainer.appendChild(errorElement);
  });
}
