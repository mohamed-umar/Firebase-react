import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FireBaseContext } from '../context/FireBaseContext';

const Home = (match) => {
    const firebaseTools = useContext(FireBaseContext);
    console.log("🚀 ~ file: Home.jsx ~ line 10 ~ Home ~ match", match)
    return ( 
        <>
        <h1>Home</h1>
        <div><TeamDetails {...firebaseTools} /></div>
        <div><Link to={'/AddTeam'} >Add Team</Link></div>
        <div><SignOut {...firebaseTools} /></div>
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
    <div>
      <Link to={`/teamdetail/${props.detail.id}`}>{props.detail.Name}</Link>
    </div>
  )
}

const SignOut = (props) => {
  return props.auth.currentUser && (
    <button className="sign-out" onClick={() => props.auth.signOut()}>Sign Out</button>
  )
}
export default Home;