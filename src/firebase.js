import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAAPlKQjpQyb6kvljZf4iu10t0Q6FPiBFU",
    authDomain: "portfolio-abhinavsharma486.firebaseapp.com",
    projectId: "portfolio-abhinavsharma486",
    storageBucket: "portfolio-abhinavsharma486.appspot.com",
    messagingSenderId: "146799117539",
    appId: "1:146799117539:web:e8c548b679673138b431d6",
    measurementId: "G-7R1T181RPS"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

