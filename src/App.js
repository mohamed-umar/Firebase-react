import React from 'react';
import firebaseHOC from './firebaseHOC';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Routes from './Routes';



function App(props) {

  const [user] = useAuthState(props.auth);
  console.log(props);
  return (
    <div className="App">
      <section>
        {user ? <Routes /> : <SignIn {...props}/>}
      </section>

    </div>
  );
}

function SignIn(props) {

  const signInWithGoogle = () => {
    const provider = new props.firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}





export default firebaseHOC(App);
