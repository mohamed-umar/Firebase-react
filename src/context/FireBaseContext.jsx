import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const FireBaseContext = React.createContext();
const FireBaseProvider = ({children}) => {
     
    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: "AIzaSyC15lsbF7-AJ2_Z-gir9imIMC8hYx_3HXE",
            authDomain: "react-firebase-project-76d6c.firebaseapp.com",
            projectId: "react-firebase-project-76d6c",
            storageBucket: "react-firebase-project-76d6c.appspot.com",
            messagingSenderId: "1098672780174",
            appId: "1:1098672780174:web:2d590a8504126d4b526adf",
            measurementId: "G-HVN4M2F89M"
          });
        }
        const auth = firebase.auth();
        const firestore = firebase.firestore();
         
    return(
        <FireBaseContext.Provider value={{ firestore, auth, firebase }}>
            {children}
        </FireBaseContext.Provider>
    )
}

export default FireBaseProvider;