import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBMjlHIxcKET5PgqaiM19GIIhhTu1B45tE",
  authDomain: "rage-8bcd9.firebaseapp.com",
  projectId: "rage-8bcd9",
  storageBucket: "rage-8bcd9.appspot.com",
  messagingSenderId: "370155683356",
  appId: "1:370155683356:web:9a957b94162b0bb869e9d9",
  measurementId: "G-24PL375X4B"
  }

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };    