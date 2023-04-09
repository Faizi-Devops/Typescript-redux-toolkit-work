import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCImfnQgIb6OwJyWu3inU9QShStoARSqmA",
  authDomain: "sample-b2eb4.firebaseapp.com",
  projectId: "sample-b2eb4",
  storageBucket: "sample-b2eb4.appspot.com",
  messagingSenderId: "70964606838",
  appId: "1:70964606838:web:df49b4d9dfd1f4131e6c57",
  measurementId: "G-JLS07DZXLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {db}
