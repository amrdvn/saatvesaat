import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyAmVY39f2q5byLI8_Ghf1nb6-DWD4_eP3Q",
    authDomain: "fir-saatvesaat.firebaseapp.com",
    projectId: "fir-saatvesaat",
    storageBucket: "fir-saatvesaat.appspot.com",
    messagingSenderId: "157481702828",
    appId: "1:157481702828:web:e5afa65cc7db8b1b64d609"
  };

  const realDb = getDatabase(app); // veri tabanına verileri çek
  const auth = getAuth(app)
if(app.apps.length === 0) 
{
  app.initializeApp(app);
  
}
export default {realDb,auth};

