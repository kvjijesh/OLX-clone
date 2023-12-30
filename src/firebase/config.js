import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
   apiKey: "AIzaSyDhlGj8B3qKBhJjo3c-qk8wyyOTNgLOgTc",
   authDomain: "olx-clone-ba382.firebaseapp.com",
   projectId: "olx-clone-ba382",
   storageBucket: "olx-clone-ba382.appspot.com",
   messagingSenderId: "366098106781",
   appId: "1:366098106781:web:cd1f1a8e60c83f80910774",
   measurementId: "G-L74D1DCE1V"
 };

 export default firebase.initializeApp(firebaseConfig)