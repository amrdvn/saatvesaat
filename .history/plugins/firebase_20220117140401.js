import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAmVY39f2q5byLI8_Ghf1nb6-DWD4_eP3Q",
    authDomain: "fir-saatvesaat.firebaseapp.com",
    projectId: "fir-saatvesaat",
    storageBucket: "fir-saatvesaat.appspot.com",
    messagingSenderId: "157481702828",
    appId: "1:157481702828:web:e5afa65cc7db8b1b64d609"
  };

  // Initialize Firebase

// Initialize Firebase
let app = null;
if(!firebase.apps.length)
{
    // eslint-disable-next-line no-unused-vars
    app=firebase.initializeApp(firebaseConfig);
}
export default firebase;