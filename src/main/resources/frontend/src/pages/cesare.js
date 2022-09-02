import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../components/TesteroAPI.js'



import './index.css';

/* MAIN PAGE */

function TesteroApp() {

    return (
        <Router>
            <div className='page-main'>
                <div className='page-title'>Testero&#8482;</div>
                <NavBar/>
                <div className='page-content'>
                    <Routes>
                        <Route exact path="/" element={ <TestList/> } />
                        <Route exact path="/addTest"  element={  <TestAdd/> } />
                        <Route exact path="/addTest/:id/addQuestion"  element={  <TestAddQuestion/> } />
                        <Route exact path="/takeTest" element={ <TestTake/> } />
                        <Route exact path="/apiTest" element={ <ApiTest/> } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TesteroApp />);
  