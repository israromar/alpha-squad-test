import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDvVxd0GlCoCLOtV2s5PPToXgsB5XdHaK8',
  authDomain: 'quickchat-37565.firebaseapp.com',
  projectId: 'quickchat-37565',
  storageBucket: 'quickchat-37565.appspot.com',
  messagingSenderId: '259774295736',
  appId: '1:259774295736:web:0000ee18029986241d4e4d',
  measurementId: 'G-988HCHZGJS',
};

firebase.initializeApp(firebaseConfig);
export const { auth } = firebase;
export const db = firebase.database();
