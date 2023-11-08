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

/*import { getAuth, sendPasswordResetEmail, updatePassword }  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'
const updateP = document.querySelector('#forgot-form');
document.getElementById('forgot-link').addEventListener('click',function (e){
    e.preventDefault();
    const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
    modal.hide()
    if (e) {
        updateP(link => link.style.display = 'block')
    }
    const user = auth.currentUser;
    const newPassword = getASecureRandomPassword();
    sendPasswordResetEmail(auth,email)
    try {


        
    } catch (error) {
        showMessage(error.message, "error")
    }
})*/

/*const myModalEl = document.getElementById('myModal')
const modal = new mdb.Modal(myModalEl)
modal.show()*/


const modalF = document.getElementById('forgotModal')
document.getElementById('forgot-link').addEventListener('click',function (e){
    e.preventDefault();
    const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
    modal.hide()
    const modal2 = new mdb.Modal()
    modal2.show(modalF)
    

})
