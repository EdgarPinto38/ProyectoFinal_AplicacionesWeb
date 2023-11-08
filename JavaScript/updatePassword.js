/*import { sendPasswordResetEmail }  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'
const updateP = document.querySelector('#forgot-form');
console.log(updateP)
document.getElementById('forgot-link').addEventListener('click',function (e){
    e.preventDefault();
    const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
    modal.hide()
    const modal2 = bootstrap.Modal.getInstance(document.querySelector('#forgotModal'));
    modal2.show()
    

})*/
import { getAuth, sendPasswordResetEmail }  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth } from './firebase.js'

document.getElementById('forgot-link').addEventListener('click',function (e){
    sendPasswordResetEmail()
})
