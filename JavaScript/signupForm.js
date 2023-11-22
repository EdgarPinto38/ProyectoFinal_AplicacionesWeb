import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"
const signupForm = document.querySelector('#signup-form')
console.log(signupForm)
document.getElementById('signup-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    console.log(email, password);

    try {

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
        //cerrar el modal cuando se registra un usuario
        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()
        //Toastify js
        showMessage("Welcome "+ userCredentials.user.email, "success")

    } catch (error) {
        console.log(error.message);
        console.log(error.code);
        // aqui va el codigo para mostrar las alertas de error
        if(error.code == 'auth/email-already-in-use')
        {
            showMessage("Email already in use ", "error")
            //alert('Email already in use')
        }
        else if(error.code === 'auth/invalid-email')
        {
            showMessage("Invalid email ", "error")
            //alert('Invalid email')
        }
        else if(error.code === 'auth/weak-password')
        {
            showMessage("Password is too weak ", "error")
            //alert('Password is too weak')
        }
        else if(error.code)
        {
            showMessage(error.message, "error")
           // alert('Something went wrong')
        }
    }


})