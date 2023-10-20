// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8L7_sfsp3AUbxawzHsliWAogIqDft8u4",
  authDomain: "busybuy-2efd4.firebaseapp.com",
  projectId: "busybuy-2efd4",
  storageBucket: "busybuy-2efd4.appspot.com",
  messagingSenderId: "319205571551",
  appId: "1:319205571551:web:6664ef933a8fa61e38e26a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
