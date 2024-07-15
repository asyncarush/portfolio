// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWPCS-uXOLeABQIUQm65kZTIqc13WV0uI",
  authDomain: "arush-portfolio-49502.firebaseapp.com",
  projectId: "arush-portfolio-49502",
  storageBucket: "arush-portfolio-49502.appspot.com",
  messagingSenderId: "282327364298",
  appId: "1:282327364298:web:21aa4ff2b27dfba876fa33",
  measurementId: "G-Y6K3J62HWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
