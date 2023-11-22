import { signInWithEmailAndPassword }  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js";
const signInForm = document.querySelector('#login-form');
console.log(signInForm)
document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        // Close the login modal
         const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
         modal.hide();

        // reset the form
        //signInForm.reset();

        // mensaje de bienvenida
        showMessage("Welcome" + userCredentials.user.email,'success');
    } catch (error) {
        console.log(error.message);
        console.log(error.code);
        
        if (error.code === 'auth/wrong-password') {
            showMessage("Wrong password", "error")
        } else if (error.code === 'auth/user-not-found') {
            showMessage("User not found", "error")
        } else {
            showMessage("Something went wrong", "error")
            alert('Something went wrong')
        }
    }
});
