
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAEUlf26_nLswHnnmMeqZcmD0JTBT-2xis",
  authDomain: "eduhub-f0ca2.firebaseapp.com",
  projectId: "eduhub-f0ca2",
  storageBucket: "eduhub-f0ca2.appspot.com",
  messagingSenderId: "741519804782",
  appId: "1:741519804782:web:47346815611ab117bbd97f",
  measurementId: "G-6LXTGVHQRW"
};

const app = firebase.initializeApp(firebaseConfig);

export const storage = app.storage();

export default app;
