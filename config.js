import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC1ozI1W-13oEwdrahR5KhCnjtPrzSFti0",
  authDomain: "wily-app-aee6c.firebaseapp.com",
  projectId: "wily-app-aee6c",
  storageBucket: "wily-app-aee6c.appspot.com",
  messagingSenderId: "372465283738",
  appId: "1:372465283738:web:f1fb1e1f92cd32df562523"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();