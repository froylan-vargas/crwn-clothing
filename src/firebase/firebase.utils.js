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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
