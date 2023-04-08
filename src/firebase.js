// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCS373iG3RdsC80t1fb9gPxjecg1xYXYqc",
    authDomain: "chat-9fa98.firebaseapp.com",
    projectId: "chat-9fa98",
    storageBucket: "chat-9fa98.appspot.com",
    messagingSenderId: "155896839561",
    appId: "1:155896839561:web:91ab942e94cb0ce4027558"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
