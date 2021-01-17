import Firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZb2pjNwICwyBoDLsAAs8oWOG_Dc2G9is",
  authDomain: "foodish-c00ba.firebaseapp.com",
  projectId: "foodish-c00ba",
  storageBucket: "foodish-c00ba.appspot.com",
  messagingSenderId: "1025814348658",
  appId: "1:1025814348658:web:2e3ada35100673aa3353eb"
};

export const firebase = Firebase.initializeApp(firebaseConfig);
export const fireStore = Firebase.storage;