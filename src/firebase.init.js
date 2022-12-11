// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXzGm0YkChUER1Z6p6QB6c5fNCBMC9sW8",
    authDomain: "genius-car-service-3ee8c.firebaseapp.com",
    projectId: "genius-car-service-3ee8c",
    storageBucket: "genius-car-service-3ee8c.appspot.com",
    messagingSenderId: "227452402556",
    appId: "1:227452402556:web:b635525df4449cf3ef82f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;