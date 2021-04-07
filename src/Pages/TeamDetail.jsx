import React from 'react';
import firebaseHOC from '../firebaseHOC';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const TeamDetail = (props) => {
    debugger
    const dataRef = props.firestore.collection('product');
    const [details] = useCollectionData(dataRef, { idField: 'id' });
    const data = details && details.find(detail => detail.id === props.match.params.id);
    debugger
    return ( 
        <>
        <h1>{data && data.Name}</h1>
        <h1>{data && data.GT}</h1>
        <h1>{data && data.Lead}</h1>
        </>
     );
}
 
export default firebaseHOC(TeamDetail);