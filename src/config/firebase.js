import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH9Wyld4RnsfTwk9vvm_U7UCcPXMkoF24",
  authDomain: "final-proyect-8bd8a.firebaseapp.com",
  projectId: "final-proyect-8bd8a",
  storageBucket: "final-proyect-8bd8a.appspot.com",
  messagingSenderId: "624230486055",
  appId: "1:624230486055:web:f6e2a71bc3f499b0ec3e02",
};

firebase.initializeApp(firebaseConfig); // inicializa Firebase

const auth = firebase.auth(); // instancia de autenticación
const firestore = firebase.firestore(); // instancia de Firestore

export { auth, firestore };
