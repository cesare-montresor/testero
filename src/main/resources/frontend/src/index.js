import ReactDOM from 'react-dom/client';
import {Routes, Route, Link, BrowserRouter } from "react-router-dom";
import React, {useEffect, useState} from "react";

import {NavBar} from "./components/NavBar";

import {ExamList} from "./pages/ExamList";
import {SelectedExam} from "./pages/SelectedExam";
import {Results} from "./pages/Results";
import {NoPage} from "./pages/NoPage";
import {AddTest} from "./pages/AddTest";
import {AddQuestion} from "./pages/AddQuestion";
import {ApiTest} from "./pages/ApiTest";


import "./assets/app.css"

function App() {

    return (
        <BrowserRouter>
            <div className='page-main'>
                <NavBar/>
                <Routes>
                    <Route path="/app/" element={<ExamList />} />
                    <Route path="/" element={<ExamList />} />
                    <Route path=":examId/question/:questionNum" element={<SelectedExam />} />
                    <Route path=":examId/results" element={<Results />} />
                    <Route exact path="/addTest"  element={  <AddTest/> } />
                    <Route exact path="/addTest/:id/addQuestion/:num"  element={  <AddQuestion/> } />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );

