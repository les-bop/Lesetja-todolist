import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"


const app = firebase.initializeApp({
  apiKey: "AIzaSyAYy0W3EtHKD1PNTCQ5WftadYw6q0m8L-0",
  authDomain: "todolist-54469.firebaseapp.com",
  projectId: "todolist-54469",
  storageBucket: "todolist-54469.appspot.com",
  messagingSenderId: "968212190992",
  appId: "1:968212190992:web:8c6d415ef1c320c0e9b795"
})

export const auth = app.auth()
export default app

