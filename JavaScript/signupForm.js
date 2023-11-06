import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth } from './firebase.js'
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
    } catch (error) {
        console.log(error.message);
        console.log(error.code);
        // aqui va el codigo para mostrar las alertas de error
        if(error.code == 'auth/email-already-in-use')
        {
            alert('Email already in use')
        }
        else if(error.code === 'auth/invalid-email')
        {
            alert('Invalid email')
        }
        else if(error.code === 'auth/weak-password')
        {
            alert('Password is too weak')
        }
        else if(error.code)
        {
            alert('Something went wrong')
        }
    }


})