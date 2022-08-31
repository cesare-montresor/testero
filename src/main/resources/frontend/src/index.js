import ReactDOM from 'react-dom/client';
import {Routes, Route, Link, BrowserRouter } from "react-router-dom";
import React, {useEffect, useState} from "react";

import ExamList from "./pages/ExamList";
import SelectedExam from "./pages/SelectedExam";
import Results from "./pages/Results";
import NoPage from "./pages/NoPage";
import CreateExam from "./pages/CreateExam";

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
        if(data)
            setQuestions(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.sessionStorage.setItem("questions", JSON.stringify(questions));
    }, [questions]);

    useEffect(() => {
        const data = window.sessionStorage.getItem("currentQuestion");

        if(data)
            setCurrentQuestion(parseInt(JSON.parse(data)));
    }, []);

    useEffect(() => {
        window.sessionStorage.setItem("currentQuestion", JSON.stringify(currentQuestion));
    }, [currentQuestion]);

    return (
        <BrowserRouter>
            <div className='page-main'>
                <div className='page-title'>Testero&#8482;</div>
                <NavBar/>
                <div className='page-content'>
                    <Routes>
                        <Route path="/" element={<ExamList setSelectedExam={setSelectedExam} setQuestions={setQuestions} setCurrentQuestion={setCurrentQuestion}/>} />
                        <Route path="/selectedExam" element={<SelectedExam selectedExam={selectedExam} questions={questions}
                                                                           currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} setQuestions={setQuestions}/>} />
                        <Route path="/results" element={<Results selectedExam={selectedExam} questions={questions}/>} />
                        <Route path="/createExam" element={<CreateExam />}></Route>
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


function NavBar() {
    return (
        <div className='menu-main btn-bar'>
            <Link to="/"> Test List </Link>
            <Link to="/addTest"> Add Test </Link>
            <Link to="/apiTest"> API Test </Link>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );


