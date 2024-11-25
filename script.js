console.log('Hello welcome to my website!');

const inputName = document.querySelector('.input-name');
const error = document.querySelector('.error');
const success = document.querySelector('.success');
const btnSubmit = document.querySelector('.btn-submit');
const errorMessage = 'Please enter your name.';
const successMessage = 'Successfully submitted!';
const submitMessage = function () {
  if (!inputName.value) {
    error.innerHTML = errorMessage;
    // console.log('Please enter your name.');
  } else success.innerHTML = successMessage;
};
