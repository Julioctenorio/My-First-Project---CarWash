let btnSignIn = document.querySelector('#signIn');
let btnSignUp = document.querySelector('#signUp');

let body = document.querySelector('body');

btnSignIn.addEventListener('click',  () => {
  body.className = 'sign-in.js'
})

btnSignUp.addEventListener('click', () => {
  body.className = 'sign-up-js'
})