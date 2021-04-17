import React, {useContext} from 'react';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import Routes from './Routes';

import { FireBaseContext } from './context/FireBaseContext';

function App() {
  const firebaseTools = useContext(FireBaseContext);  
  const [user] = useAuthState(firebaseTools.auth);
 
  return (
    <div className="App">
        {user ? <Routes /> : <SignIn {...firebaseTools}/>}
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

export default App;
