import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCBI_u_rkBsasYCcw_CAP2igg1n9zNU4yg",
    authDomain: "crwn-clothing-b0d66.firebaseapp.com",
    databaseURL: "https://crwn-clothing-b0d66.firebaseio.com",
    projectId: "crwn-clothing-b0d66",
    storageBucket: "crwn-clothing-b0d66.appspot.com",
    messagingSenderId: "952723210001",
    appId: "1:952723210001:web:1225bbdece208612ced6b0"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
