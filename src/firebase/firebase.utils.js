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

export const getCurrentUser = () => {
    return new Promise((resolve,reject)=>{
        const unsuscribe = auth.onAuthStateChanged(userAuth => {
            unsuscribe()
            resolve(userAuth)
        }, reject)
    })
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch();
    objectsToAdd.forEach(collection => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, collection)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()
        return {
            title,
            items,
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id
        }
    })

    return transformedCollection.reduce((accum, collection) => {
        accum[collection.title.toLowerCase()] = collection
        return accum
    }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export default firebase