// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc , doc, setDoc ,getDoc  } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgq6LTNEGlN9esJifZOxLxWT26p82ldDg",
  authDomain: "fir-login-signup-b5839.firebaseapp.com",
  projectId: "fir-login-signup-b5839",
  storageBucket: "fir-login-signup-b5839.appspot.com",
  messagingSenderId: "263217629462",
  appId: "1:263217629462:web:9c49291c0a94e3a68a6837"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

async function registerUser({email, password,fullName,age}) {
 const {user: {uid}} = await createUserWithEmailAndPassword(auth, email, password)
await setDoc(doc(db,'users',uid),{
  fullName,email,age
})
}

// setDoc(doc(db,'users',uid),{
//   fullName,age,email
// })
async function loginUser({email, password}) {
  const {user: { uid }} = await signInWithEmailAndPassword(auth, email, password)
const docRef = doc(db, 'users',uid)
const docSnap = await getDoc(docRef)

if(docSnap.exists()){
  console.log("Document data:",docSnap.data())
}else {
  console.log("No suchDocument ");
}
}

function PostingAd(title,description,price) {
 
onAuthStateChanged(auth, (user) => {
  if (user) {
 
    const uid = user.uid;
    addDoc(collection(db, 'Ads'),{
      title,
      description,
      price,
      uid
    }).then(()=>{alert("your add is live now"
    )}).catch((e)=>{alert("nhi hua ",e.message)})



  } else {
    // User is signed out
    // ...
  }
});}

export {
  registerUser,
  loginUser,
  PostingAd
}
