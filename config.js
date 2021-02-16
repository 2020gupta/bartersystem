import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBzo6nkcgtsT1V6uoyANIAiEpNfBgd44OQ",
    authDomain: "bartersystem-2f516.firebaseapp.com",
    projectId: "bartersystem-2f516",
    storageBucket: "bartersystem-2f516.appspot.com",
    messagingSenderId: "145754550099",
    appId: "1:145754550099:web:37e63afb3c61cc9c96bba6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()