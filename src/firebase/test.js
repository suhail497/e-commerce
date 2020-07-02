import firebase from './firebase.utils'
import 'firebase/firestore'

const firestore = firebase.firestore()

// Query 
firestore.collection('users').doc('5vl3URVL5U7qtxoQWJ0h').collection('cartItems').doc('6y2vcHpmnURe4YuOfymv')

// OR
firestore.doc('users/5vl3URVL5U7qtxoQWJ0h/cartItems/6y2vcHpmnURe4YuOfymv')

// OR If we want collection of items instead of specific item 
firestore.collection('users/5vl3URVL5U7qtxoQWJ0h/cartItems/')