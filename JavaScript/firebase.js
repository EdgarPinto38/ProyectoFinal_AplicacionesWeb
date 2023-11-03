// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtlqfUWhACEtMzFdxtHSRjPbgpIrzkWtI",
    authDomain: "tiendaplantas-cf8bf.firebaseapp.com",
    projectId: "tiendaplantas-cf8bf",
    storageBucket: "tiendaplantas-cf8bf.appspot.com",
    messagingSenderId: "613046897699",
    appId: "1:613046897699:web:cf02b294bacca1dad53596"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)