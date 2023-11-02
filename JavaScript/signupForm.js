const signupForm = document.querySelector('#signup-form')
console.log(signupForm)
document.getElementById('signup-form').addEventListener('submit',function(event) {
    event.preventDefault();
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)
})