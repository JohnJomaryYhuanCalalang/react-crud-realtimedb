import "firebase/database";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyCmSA6WN6E8GM4LKG2sBp2sHvxkDlGATMg",
    authDomain: "calalang-realtimedb.firebaseapp.com",
    databaseURL: "https://calalang-realtimedb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "calalang-realtimedb",
    storageBucket: "calalang-realtimedb.appspot.com",
    messagingSenderId: "38006492474",
    appId: "1:38006492474:web:b8f95c13345f6387ec9403",
    measurementId: "G-VN4FYX1DVL"
  };

  const app = initializeApp(firebaseConfig);
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();