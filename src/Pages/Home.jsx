import React from 'react';
import {Link} from 'react-router-dom';
import firebaseHOC from '../firebaseHOC';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Home = (match) => {
console.log("🚀 ~ file: Home.jsx ~ line 7 ~ Home ~ match", match)
    return ( 
        <>
        <h1>Home</h1>
        <TeamDetails {...match} />
        <Link to={'/AddTeam'} >Add Team</Link>
        <SignOut {...match} />
        </>
     );
}
const TeamDetails = (props) => {
  const dataRef = props.firestore.collection('product');
  const [details] = useCollectionData(dataRef, { idField: 'id' });
  
  return (
    <>
    {details && details.map(detail => {
      return <Name key={detail.id} detail={detail}/>
    })}
    
    </>
  )
}
const Name = (props) => {
  return (
    <Link to={`/teamdetail/${props.detail.id}`}>{props.detail.Name}</Link>
  )
}

const SignOut = (props) => {
  return props.auth.currentUser && (
    <button className="sign-out" onClick={() => props.auth.signOut()}>Sign Out</button>
  )
}
export default firebaseHOC(Home);