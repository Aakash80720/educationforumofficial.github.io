import firebase from "firebase";
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwowcfTNTxAMyZV86spBZAkn75YuV0Ipk",
  authDomain: "eduforum-31939.firebaseapp.com",
  projectId: "eduforum-31939",
  storageBucket: "eduforum-31939.appspot.com",
  messagingSenderId: "81339671163",
  appId: "1:81339671163:web:609f055358106ba79578de",
  measurementId: "G-M6Z44JV3GX"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new  firebase.auth.GoogleAuthProvider();
  export {auth,provider}
  export default db;
  // npm install -g firebase-tools