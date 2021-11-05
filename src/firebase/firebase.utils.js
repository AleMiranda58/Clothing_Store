import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCinA740K9EleRsAn00CYiUxG7m0YpaHx0",
    authDomain: "ecommerce-clothing-store-493b6.firebaseapp.com",
    projectId: "ecommerce-clothing-store-493b6",
    storageBucket: "ecommerce-clothing-store-493b6.appspot.com",
    messagingSenderId: "539901804249",
    appId: "1:539901804249:web:ddffdaa3641bf2c45008c8",
    measurementId: "G-15BKYZ6Y41"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account '})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase