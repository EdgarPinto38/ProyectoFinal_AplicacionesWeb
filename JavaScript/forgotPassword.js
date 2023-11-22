import { sendPasswordResetEmail }  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth } from '../JavaScript/firebase.js'
import { showMessage } from "./showMessage.1.js"

const forgotF = document.querySelector('#forgot-form')
console.log(forgotF)
document.getElementById('forgot-form').addEventListener('submit',async function(e){
    e.preventDefault()
    const email = forgotF['forgotEmail'].value;
    sendPasswordResetEmail(auth, email)
    try {
        console.log(email)
    } catch (error) {
        showMessage("Something went wrong", "error")
    }
})