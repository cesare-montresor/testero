import ReactDOM from 'react-dom/client';
import {Routes, Route, Link, BrowserRouter } from "react-router-dom";
import React, {useEffect, useState} from "react";

import {TesteroAPI as API} from "./components/TesteroAPI";
import {NavBar} from "./components/NavBar";
import {Header} from "./components/Header";


import {ExamList} from "./pages/ExamList";
import {SelectedExam} from "./pages/SelectedExam";
import {Results} from "./pages/Results";
import {NoPage} from "./pages/NoPage";
import {AddTest} from "./pages/AddTest";
import {AddQuestion} from "./pages/AddQuestion";
import {ApiTest} from "./pages/ApiTest";


import "./assets/app.css"

function App() {
    const [selectedExam, setSelectedExam] = useState({Name: "initial", Questions: [{Text: "initial test"}]});
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        const data = JSON.parse(window.sessionStorage.getItem("selectedExam"));
        if(data) {
            setSelectedExam(data);
        }
    }, []);

    useEffect(() => {
        window.sessionStorage.setItem("selectedExam", JSON.stringify(selectedExam));
    }, [selectedExam]);

    useEffect(() => {
        const data = window.sessionStorage.getItem("questions");
        if(data !== "undefined" && data != null)
        {
            setQuestions(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        window.sessionStorage.setItem("questions", JSON.stringify(questions));
    }, [questions]);

    useEffect(() => {
        const data = window.sessionStorage.getItem("currentQuestion");

        if(data != "undefined" && data != null) {
            setCurrentQuestion(parseInt(JSON.parse(data)));
        }
    }, []);

    useEffect(() => {
        window.sessionStorage.setItem("currentQuestion", JSON.stringify(currentQuestion));
    }, [currentQuestion]);

    return (
        <BrowserRouter>
            <div className='page-main'>
                <Header/>
                <NavBar/>
                <div className='page-content'>
                    <Routes>
                        <Route path="/app/" element={<ExamList />} />
                        <Route path="/" element={<ExamList />} />
                        <Route path=":examId/question/:questionNum" element={<SelectedExam />} />
                        <Route path=":examId/results" element={<Results />} />
                        <Route exact path="/apiTest" element={ <ApiTest/> } />
                        <Route exact path="/addTest"  element={  <AddTest/> } />
                        <Route exact path="/addTest/:id/addQuestion/:num"  element={  <AddQuestion/> } />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );

