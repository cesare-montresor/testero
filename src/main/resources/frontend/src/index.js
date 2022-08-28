import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import { TesteroAPI } from './testero-api.js'


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
                    </Routes>
                </div>
            </div>TestAddQuestion
        </Router>
    );
    
}

function NavBar() {
    return (
        <div className='menu-main btn-bar'>
            <Link to="/"> Test List </Link>
            <Link to="/addTest"> Add Test </Link>
        </div>
    );
    
}




function TestList(){
    return (
        <div className='test-list'>
            Lit of available tests.
            <div className='test-list-row'>
                <div className='test-list-row-name'>this is a test</div>
                <div className='test-list-row-actions btn-bar'>
                    <Link to="/takeTest"> take test </Link>
                </div>
            </div>
        </div>
    );
    
}


function InputElement(props){
    return (
        <div className={ props.className }>
            <label htmlFor={ props.id }>{props.label}</label>
            <input type={props.type} name={ props.id } id={ props.id }/>
        </div>
    );
}

function InputCheckbox(props){
    return ( <InputElement type="checkbox" className={props.className} id={props.id} label={props.label} />);
}

function InputText(props){
    return ( <InputElement type="text" className={props.className} id={props.id} label={props.label} />);
}


/* ADD TEST */

function TestAdd(){
    let navigate = useNavigate();
    
    async function saveTest(){
        const api = new TesteroAPI();
        const req = api.addTest("nomeeee" , true, false);
        req.then((data) => {
            const id =data["addTest"]["id"];
            navigate("/addTest/"+id+"/addQuestion");
        });
    }

    return (
        <div className='test-add'>
            <div className='test-add-main'>
                <InputText label="Nome" className="test-add-main-nome" id="test-name"/>
                <InputCheckbox label="Ordine Casuale" className="test-add-main-order" id="test-order"/>
                <InputCheckbox label="Domanda con numero" className="test-add-main-numbered" id="test-numbered"/>

                <div className='test-add-main-controls'>
                    <button type="button" onClick={saveTest}>Next &rarr;</button> 
                </div>
            </div>
        </div>
    );
}

function InputAnswer(props){
    let elementId = props.id+"-"+props.num;

    function removeAnswer(){
        elementId
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


function TestAddQuestion(){
    function addAnswer(){
        
    }
    function addQuestion(){
        
    }
    /*
    public String nome;
    public String testo;
    public String punti;
    public Boolean ordineCasuale;
    public Boolean risposteConNumero;
    public List<AddRispostaData> risposte;
    */

    /*

    input AddRispostaData{
        testo: String!
        punteggio: Float
    }

    */


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



function TestTake(){
    return (
        <div className='test-take'>
            <div className='test-list-row'>
                <div className='test-list-row-name'>this is a test</div>
                <div className='test-list-row-actions'>
                    <Link to="/takeTest"> take test </Link>
                </div>
            </div>
        </div>
    );
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TesteroApp />);
  