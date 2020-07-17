import firebase from 'firebase/app'
import 'firebase/firestore' // For Database
import 'firebase/auth' // For Authentication

const config = {
  apiKey: "AIzaSyA0zxdNHHLXfXVoojuE2TpY1QSyJloXL2g",
  authDomain: "ecommerceproject-1d710.firebaseapp.com",
  databaseURL: "https://ecommerceproject-1d710.firebaseio.com",
  projectId: "ecommerceproject-1d710",
  storageBucket: "ecommerceproject-1d710.appspot.com",
  messagingSenderId: "900573589258",
  appId: "1:900573589258:web:a20df7b9a98c6edea094f3",
  measurementId: "G-W0972FQ2LB"
};


firebase.initializeApp(config)


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // const userRef = firestore.doc('users/123342434adfds')
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()
  console.log(snapshot)
  // console.log('Arjun')
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log("Error Creating User", error.message)
    }
  }
  return userRef
}

// database for shopdata
export const addCollectionAndDocuments = async (collectionKey, ObjectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef)

  // In firestore we can only collectionRef.set() method only one at a time

  // If the internet connnection is down while setting the each collection like
  // 1st the user auth then collection items it may break and send only one data 
  // which isn't good, so inorder to send all the requests and report fail if anything
  // breaks that is good
  // so inorder to do that firestor gives us a function called batch
  const batch = firestore.batch()

  // The only difference between map and ForEach Loop is map returns an array 
  // ForEach just iterates it doesn't return anything 

  ObjectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  // It returns us a promise when batch succeeds 
  return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }


  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {})

}

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;