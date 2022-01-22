import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA5KMEcrbapsIA5CkbgDbOSxtX_QSZjsiE",
    authDomain: "saatsaat-3f30e.firebaseapp.com",
    projectId: "saatsaat-3f30e",
    storageBucket: "saatsaat-3f30e.appspot.com",
    messagingSenderId: "922860803934",
    appId: "1:922860803934:web:a9dff8aa4ca4ceb140e1cf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  let app=null
  if (!firebase.app.length){
      app=firebase.initializeApp(firebaseConfig)
  }
  export 