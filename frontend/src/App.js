import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Example from './pages/Example';
import db from './utils/firebase'

import { collection, getDocs } from "firebase/firestore"; 

function App() {

    //exemplo de ir buscar dados à db (está a retornar duas vezes por motivos desconhecidos)
    const querySnapshot = getDocs(collection(db, "patlets")).then((obj)=>{

            const docSnapshots = obj.docs;
            
            for (let i in docSnapshots) {
                console.log( docSnapshots[i].data().title)
            } 
        })

    return (

         <Router>
             <div className="App">
                 <Routes>
                     <Route path="/" exact element={<Example/>}/>
                 </Routes>
             </div>
         </Router>
    );
}

export default App;