import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import db from '../utils/firebase'

import { collection, getDocs } from "firebase/firestore"; 
export default function DatabaseExample() {
    const [final, setfinal] = useState("");
    let aux=[];
    const sendRequest = () => {
        
        getDocs(collection(db, "patlets")).then((obj)=>{
            aux = [];
            const docSnapshots = obj.docs;
            
            for (let i in docSnapshots) {
                aux.push(<li>{docSnapshots[i].data().title}</li>)
            } 
            setfinal(aux);
        })
    }

    return (
        <div className="main-section w-50 ml-0 mr-0 mx-auto text-center">
            <p> Hello! I want to speak with backend. </p>
            <Button variant="outline-success" onClick={sendRequest}>Click here to send request</Button>
            <ul>{final}</ul>
        </div>
    )
}