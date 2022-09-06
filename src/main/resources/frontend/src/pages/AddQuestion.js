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
        <div className={props.className} id={props.num}>
            <div className={props.className+"-num"}><div>Num</div><div>{props.num}</div></div>
            <InputText label="Nome" className={props.className+"-nome"} id={props.num} ref={answerRef}/>
            <InputText label="Punteggio" className={props.className+"-punteggio"} id={props.num} ref={scoreRef}/>
        </div>
    );
}


function AddQuestion(){
    let navigate = useNavigate();

    const urlParams = useParams();
    const testId = urlParams.id;
    const questionId = urlParams.num;

    const [currentAnswers, setCurrentAnswers] = useState([{}, {}]);
    let counter = 2;

    const nameRef = React.createRef();
    const textRef = React.createRef();
    const scoreRef = React.createRef();
    const randomRef = React.createRef();
    const answerNumberRef = React.createRef();

    let answerRefs = [];
    let scoreRefs = [];

    useEffect(() => {
        const data = window.sessionStorage.getItem("currentAnswers");

        if(data) { setCurrentAnswers(JSON.parse(data)); }
    }, [])

    useEffect(() => {
        window.sessionStorage.setItem("currentAnswers", JSON.stringify(currentAnswers));
    }, [currentAnswers])

    function removeAnswer(){
        if(currentAnswers.length > 2) {
            currentAnswers.pop();
            setCurrentAnswers(currentAnswers.slice());

            answerRefs.pop();
            scoreRefs.pop();
        }
    }

    function addAnswer(){
        let tmp = currentAnswers? [...currentAnswers, {name: counter}] : ([{name: counter}]);
        counter += 1;
        setCurrentAnswers(tmp);
    }

    function addQuestion(){
        const name = nameRef.current.value;
        const text = textRef.current.value;
        const score = parseFloat(scoreRef.current.value);
        const random = randomRef.current.checked;
        const answerNumber = answerNumberRef.current.checked;

        if(score <= 0){
            alert("Errore, il punteggio della domanda deve essere maggiore di 0.");
            return;
        }
        else if(isNaN(score)){
            alert("Errore, il punteggio della domanda non è valido.");
            return;
        }

        const answers = [];
        const answerScores = [];

        scoreRefs.forEach(function(scoreRef){
            answerScores.push(parseFloat(scoreRef.current.value));
        });

        if(!answerScores.includes(1.0)){
            alert("Errore, almeno una delle risposte deve avere un punteggio pari a 1.");
            return;
        }

        for(let i = 0; i < answerRefs.length; i++){
            let answerRef = answerRefs[i];
            let answerScore = answerScores[i];

            if(answerScore < 0 || answerScore > 1){
                alert("Errore, il punteggio di ogni risposta deve essere compreso fra 0 e 1.");
                return;
            }
            else if(isNaN(answerScore)){
                alert("Errore, il punteggio di ogni risposta deve essere valido.");
                return;
            }

            answers.push({testo: answerRef.current.value, punteggio: answerScore});
        }

        api.addQuestion(parseInt(testId), name , text, score, random, answerNumber, answers).then((data) => {
            if(data["addQuestion"]["alreadyExists"]){
                alert("Errore, il nome della domanda inserito esiste già.");
                return;
            }

            setCurrentAnswers([
                {"name": 0},
                {"name": 1}
            ]);

            answerRefs = answerRefs.slice(0, 2);
            scoreRefs = scoreRefs.slice(0, 2);

            nameRef.current.value = "";
            textRef.current.value = "";
            scoreRef.current.value = "";
            randomRef.current.checked = false;
            answerNumberRef.current.checked = false;

            answerRefs.forEach(function(answerRef){
                answerRef.current.value = "";
            });

            scoreRefs.forEach(function(scoreRef){
                scoreRef.current.value = "";
            });

            navigate("/addTest/"+testId+"/addQuestion/"+(parseInt(questionId) + 1));
        }).catch((error) => {
            alert("Errore durante l'inserimento della domanda.");
        });
    }

    function finishCreation(){
        api.completeTest(testId).then((data)=>{

            if (data.completeTest){
                navigate("/");
            }else{
                alert("Il test non raggiunge i requisiti minimi per poter essere considerato completo.")
            }
        }).catch((error)=>{
            alert("Si è verificato un errore durante la richiesta al server.");
        })

    }

    return (
        <section className="page-centered-container">
            <h1 tabIndex="0">Aggiungi nuova domanda</h1>
            <div className='test-add-question'>
                <div className='test-add-question-main'>
                    <InputText label="Nome" className="test-add-question-main-nome" id="test-question-name" ref={nameRef}/>
                    <InputText label="Testo" className="test-add-question-main-testo" id="test-question-testo" ref={textRef}/>
                    <InputText label="Punti" className="test-add-question-main-punti" id="test-question-punti" ref={scoreRef}/>
                    <InputCheckbox label="Ordine Casuale" className="test-add-question-main-order" id="test-question-order" ref={randomRef}/>
                    <InputCheckbox label="Risposta con numero" className="test-add-question-main-numbered" id="test-question-numbered" ref={answerNumberRef}/>
                </div>
                <hr/>
                <div className='test-add-answer-main'>
                    <div className="test-add-answer-controls btn-bar">
                        Aggiungi o rimuovi risposte
                    <button type="button" onClick={addAnswer}> + </button>
                    {
                        (currentAnswers !== null && currentAnswers !== "undefined" && currentAnswers.length > 2) ?
                            (<button className='test-remove-answer-main' onClick={removeAnswer}> - </button>)
                            : ('')
                    }
                    </div>
                    <br/>
                    <div className="test-add-answer-list">
                    {
                        currentAnswers?
                            (currentAnswers.map((answer, index) => (
                                <InputAnswer key={index} className="test-add-answer-main-entry" id={index} num={index} removeAnswer={removeAnswer} answerRefs={answerRefs} scoreRefs={scoreRefs}/>)))
                            : (<h1 tabIndex="0">Caricando</h1> )
                    }
                    </div>
                </div>

                <div className='test-add-question-main-controls btn-bar'>
                    <button type="button" onClick={addQuestion}>Prossima</button>
                    <button type="button" onClick={finishCreation}>Fine</button>
                </div>
            </div>
        </section>
    );
}

export {AddQuestion}