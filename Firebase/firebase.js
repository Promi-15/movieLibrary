// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG8U6TwrVQ3bk0eHlyQxw7aoOsJaHp6UU",
  authDomain: "movielibrary-6739b.firebaseapp.com",
  projectId: "movielibrary-6739b",
  storageBucket: "movielibrary-6739b.firebasestorage.app",
  messagingSenderId: "206202239390",
  appId: "1:206202239390:web:8450809cca159f94c23e8f",
  measurementId: "G-H1619G8G5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth; 
