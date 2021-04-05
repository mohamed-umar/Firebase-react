import React, { useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyC15lsbF7-AJ2_Z-gir9imIMC8hYx_3HXE",
  authDomain: "react-firebase-project-76d6c.firebaseapp.com",
  projectId: "react-firebase-project-76d6c",
  storageBucket: "react-firebase-project-76d6c.appspot.com",
  messagingSenderId: "1098672780174",
  appId: "1:1098672780174:web:2d590a8504126d4b526adf",
  measurementId: "G-HVN4M2F89M"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const [showAddTeam, setShowAddTeam] = useState(false);
function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
        {user ? <TeamDetails /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

const TeamDetails = () => {
  const dataRef = firestore.collection('product');
  const [details] = useCollectionData(dataRef, { idField: 'id' });
  
  return (
    <>
    {details && details.map(detail => {
      return <Name key={detail.id} detail={detail}/>
    })}
    <button onClick={addTeam}>Add Team</button>
    <SignOut />
    </>
  )
}
const Name = (props) => {
  return (
    <h1>{props.detail.Name}</h1>
  )
}
const addTeam = async (e) => {
  e.preventDefault();
  const dataRef = firestore.collection('product');
  await dataRef.add({
    Name : "FreshTeam",
    Lead: "Gopi",
    GT: "davooth"
  })
}

export default App;
