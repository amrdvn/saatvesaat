import firebase from 'firebase/app';
import "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAmVY39f2q5byLI8_Ghf1nb6-DWD4_eP3Q",
    authDomain: "fir-saatvesaat.firebaseapp.com",
    projectId: "fir-saatvesaat",
    storageBucket: "fir-saatvesaat.appspot.com",
    messagingSenderId: "157481702828",
    appId: "1:157481702828:web:e5afa65cc7db8b1b64d609"
  };


  firebase.initializeApp(firebaseConfig);



  const db = firebase.firestore();
  const auth = firebase.auth();
  const analytics = firebase.analytics();
  
  export { db, auth, analytics };