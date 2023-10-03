// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzq7wjSlHYPG31rTeVpIVcGQ0EFOtqYC8",
  authDomain: "auth-moha-milon-d9e91.firebaseapp.com",
  projectId: "auth-moha-milon-d9e91",
  storageBucket: "auth-moha-milon-d9e91.appspot.com",
  messagingSenderId: "336987628052",
  appId: "1:336987628052:web:6a49345e2b3d4e3fcefd01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

