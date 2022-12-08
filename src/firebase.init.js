// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpHsu32FRoNnK_rrgLBMSadgoITvKjRZo",
    authDomain: "genius-car-services-8b7c1.firebaseapp.com",
    projectId: "genius-car-services-8b7c1",
    storageBucket: "genius-car-services-8b7c1.appspot.com",
    messagingSenderId: "394830544926",
    appId: "1:394830544926:web:20f1c7dfd79b7a8ad2ee0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;