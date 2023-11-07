import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

document.getElementById('googleLogin').addEventListener('click', async function (event) {
  event.preventDefault();

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");
    
    // Close the login modal
    const modalInstance = bootstrap.Modal.getInstance(document.querySelector('signinModal'));
    modal.hide()

    // show welcome message
    showMessage("Welcome " + credentials.user.displayName,'success');
  } catch (error) {
    console.log(error);
  }
});

