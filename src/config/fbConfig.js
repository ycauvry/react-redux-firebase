import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAD0Oxyqpz095GR_A5TaHGvv44VDeFYF8g",
    authDomain: "mario-plan-8861a.firebaseapp.com",
    databaseURL: "https://mario-plan-8861a.firebaseio.com",
    projectId: "mario-plan-8861a",
    storageBucket: "mario-plan-8861a.appspot.com",
    messagingSenderId: "516246906491",
    appId: "1:516246906491:web:515a96ebc830028b3524de",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({})

export default firebase;
