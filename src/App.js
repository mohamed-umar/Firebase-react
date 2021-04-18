import React, {useContext} from 'react';
import { FireBaseContext } from './context/FireBaseContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import Routes from './Routes';

import styled,{ keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
`;
const LoginPage = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  > div {
    display: inline-grid;
    >img {
      animation: ${rotate} 4s;
    }
    > button {
      background: #4285f4;
      width: 200px;
      line-height: 30px;
      border-radius: 4px;
      color: white;
      border: 1px solid lightskyblue;
      margin-left: 45px;
    }
  }
`;

function App() {
  const firebaseTools = useContext(FireBaseContext);  
  const [user] = useAuthState(firebaseTools.auth);
 
  return (
    <>
      {user ? <Routes /> : <SignIn {...firebaseTools}/>}
    </>
  );
}

function SignIn(props) {

  const signInWithGoogle = () => {
    const provider = new props.firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  }

  return (
    <LoginPage>
      <div>
        <img src="FreshSuccessIcon.png" alt="Image NOT FOUND"/>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </LoginPage>
  )

}

export default App;
