import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FireBaseContext } from '../context/FireBaseContext';
import styled from 'styled-components';
const HomePage = styled.div`
height: 100%;
> nav {
    display: grid;
    grid-template-columns: 5fr 1fr;
    background-color: #282c34;
    min-height: 60px;
    font-size: 50px;
    color: white;
    > button {
      background-color: red;
      height: 30px;
      width: 90px;
      border-radius: 5px;
      border: 1px white;
      margin-top: 15px;
    }
}
`;
const Home = (match) => {
    const firebaseTools = useContext(FireBaseContext);
    console.log("🚀 ~ file: Home.jsx ~ line 10 ~ Home ~ match", match)
    return ( 
        <HomePage>
        <nav>
          <div>Home</div>
          <SignOut {...firebaseTools} />
        </nav>
        <div><TeamDetails {...firebaseTools} /></div>
        <div><Link to={'/AddTeam'} >Add Team</Link></div>
        </HomePage>
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