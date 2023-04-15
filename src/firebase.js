import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA63IrDpNcIcMhfNS2eF-KFzdUClEJ0Yok",
    authDomain: "netflix-clone-d78e4.firebaseapp.com",
    projectId: "netflix-clone-d78e4",
    storageBucket: "netflix-clone-d78e4.appspot.com",
    messagingSenderId: "693432357086",
    appId: "1:693432357086:web:a1e0b82ba37564093bf24f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;
export { auth };
