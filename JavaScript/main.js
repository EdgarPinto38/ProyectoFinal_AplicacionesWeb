import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth } from './firebase.js'
import { loginCheck } from './loginCheck.js'
import './signupForm.js'
import './signinForm.js'
import './googleLogin.js'
import './logout.js'
//import './forgotPassword.js'
//import './updatePassword.js'


onAuthStateChanged(auth, async (user) =>{

    if(user){
        loginCheck(user)
        console.log(user)
    } else {
        loginCheck(user)
        console.log(user)
    }
})