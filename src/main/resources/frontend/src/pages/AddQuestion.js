import React, {useEffect, useState} from "react";
import {InputText, InputCheckbox} from "../components/InputElement";
import {useNavigate, useParams} from 'react-router-dom';
import {TesteroAPI as api} from "../components/TesteroAPI";

function InputAnswer(props){
    function removeAnswer(){
        props.removeAnswer(props.num);
    }

    let scoreRef = React.createRef();
    let answerRef = React.createRef();

    props.answerRefs.push(answerRef);
    props.scoreRefs.push(scoreRef);

    return (
        <div className={props.className} id={props.id+"-"+props.num}>
            <div className={props.className+"-num"}>{props.num}</div>
            <InputText label="Nome" className={props.className+"nome"} id={props.id+"-nome-"+props.num} ref={answerRef}/>
            <InputText label="Punteggio" className={props.className+"punteggio"} id={props.id+"-punteggio-"+props.num} ref={scoreRef}/>
            { parseInt(props.num) < 2 ? '' :
                <button className={props.className+"-btn"} onClick={removeAnswer}> - </button>
            }
        </div>
    );
}


function AddQuestion(){
    let navigate = useNavigate();

    const urlParams = useParams();
    const testId = urlParams.id;
    const questionId = urlParams.num;

    const [currentAnswers, setCurrentAnswers] = useState(null);
    let counter = 0;

    const nameRef = React.createRef();
    const textRef = React.createRef();
    const scoreRef = React.createRef();
    const randomRef = React.createRef();
    const answerNumberRef = React.createRef();

    const answerRefs = [];
    const scoreRefs = [];

    useEffect(() => {
        const data = window.sessionStorage.getItem("currentAnswers");

        if(data)
            setCurrentAnswers(JSON.parse(data));
    }, [])

    useEffect(() => {
        window.sessionStorage.setItem("currentAnswers", JSON.stringify(currentAnswers));
    }, [currentAnswers])

    function removeAnswer(num){
        currentAnswers.splice(num, 1);
        setCurrentAnswers(currentAnswers.slice());
    }

    function addAnswer(){
        let tmp = currentAnswers? [...currentAnswers, {name: "lol" + counter}] : ([{name: "lol" + counter}]);
        counter += 1;
        setCurrentAnswers(tmp);
    }

    function addQuestion(){
        if(currentAnswers.length < 2) {
            alert("PosenatoException: non puoi inserire meno di due risposte per una domanda.");
        }
        else {
            const name = nameRef.current.value;
            const text = textRef.current.value;
            const score = scoreRef.current.value;
            const random = randomRef.current.checked;
            const answerNumber = answerNumberRef.current.checked;

            const answers = [];

            for(let i = 0; i < answerRefs.length; i++){
                let answerRef = answerRefs[i];
                let answerScoreRef = scoreRefs[i];

                answers.push({testo: answerRef.current.value, punteggio: answerScoreRef.current.value});
            }

            api.addQuestion(parseInt(testId), name , text, score, random, answerNumber, answers).then((data) => {
                navigate("/addTest/"+testId+"/addQuestion/"+(parseInt(questionId) + 1));
            });
        }
    }

    return (
        <div className='test-add-question'>
            <div className='test-add-question-main'>
                <InputText label="Nome" className="test-add-question-main-nome" id="test-question-name" ref={nameRef}/>
                <InputText label="Testo" className="test-add-question-main-testo" id="test-question-testo" ref={textRef}/>
                <InputText label="Punti" className="test-add-question-main-punti" id="test-question-punti" ref={scoreRef}/>
                <InputCheckbox label="Ordine Casuale" className="test-add-question-main-order" id="test-question-order" ref={randomRef}/>
                <InputCheckbox label="Risposta con numero" className="test-add-question-main-numbered" id="test-question-numbered" ref={answerNumberRef}/>
            </div>

            <div className='test-add-answer-main'>
                Add answer<button type="button" onClick={addAnswer}> + </button>
                <br/>
                {
                    currentAnswers?
                        (currentAnswers.map((answer, index) => (<InputAnswer key={answer.name} className="test-add-answer-main-entry" id={answer.name} num={index} removeAnswer={removeAnswer} answerRefs={answerRefs} scoreRefs={scoreRefs}/>)))
                        : (<h1>Caricando</h1>)
                }
            </div>

            <div className='test-add-question-main-controls'>
                <button type="button" onClick={addQuestion}>Next &rarr;</button>
            </div>
        </div>
    );
}

export {AddQuestion}