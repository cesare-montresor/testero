import React from "react";
import {InputText, InputCheckbox} from "../components/InputElement";
import { useParams } from 'react-router-dom';

function InputAnswer(props){
    let { id, num } = useParams();
    let elementId = props.id+"-"+props.num;

    function removeAnswer(){
        alert(elementId);
    }

    return (
        <div className={props.className} id={props.id+"-"+props.num}>
            <div className={props.className+"-num"}>{props.num}</div>
            <InputText label="Nome" className={props.className+"nome"} id={props.id+"-nome-"+props.num}/>
            <InputText label="Punteggio" className={props.className+"punteggio"} id={props.id+"-punteggio-"+props.num}/>
            { parseInt(props.num) < 2 ? '' :
                <button className={props.className+"-btn"} onClick={removeAnswer}> - </button>
            }
        </div>
    );
}


function AddQuestion(){

    function addAnswer(){
        alert("1");
    }

    function addQuestion(){
        alert("2");
    }

    return (
        <div className='test-add-question'>
            <div className='test-add-question-main'>
                <InputText label="Nome" className="test-add-question-main-nome" id="test-question-name"/>
                <InputText label="Testo" className="test-add-question-main-testo" id="test-question-testo"/>
                <InputText label="Punti" className="test-add-question-main-punti" id="test-question-punti"/>
                <InputCheckbox label="Ordine Casuale" className="test-add-question-main-order" id="test-question-order"/>
                <InputCheckbox label="Risposta con numero" className="test-add-question-main-numbered" id="test-question-numbered"/>
            </div>


            <div className='test-add-answer-main'>
                Add question<button type="button" onClick={addAnswer}> + </button>
                <br/>
                <InputAnswer className="test-add-answer-main-entry" id="test-answer" num="0"/>
                <InputAnswer className="test-add-answer-main-entry" id="test-answer" num="1"/>
            </div>

            <div className='test-add-question-main-controls'>
                <button type="button" onClick={addQuestion}>Next &rarr;</button>
            </div>

        </div>
    );
}

export {AddQuestion}