import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC5BzlUjliffZCekgxt-xfpdXppybLR9ig",
    authDomain: "chattermate-b5028.firebaseapp.com",
    projectId: "chattermate-b5028",
    storageBucket: "chattermate-b5028.appspot.com",
    messagingSenderId: "401123792200",
    appId: "1:401123792200:web:02d2fe472e4af90c5b4f7d",
    measurementId: "G-3JTLYH4EXP"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);