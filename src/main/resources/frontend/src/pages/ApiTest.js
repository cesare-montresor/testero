import {TesteroAPI as API, TesteroAPI as api} from "../components/TesteroAPI";
import React, {useState} from "react";

function ApiTest() {
    const [response, setResponse] = useState("");

    function login(){
        alert(document.cookie);
        API.login("mario","rossi").then( parseResponse ).catch( showError );
    }

    function parseResponse(response){
        showResponse(response.status);
        return true;
    }

    function getUser(){
        api.getUser().then( showResponse ).catch( showError );
    }

    function allTests(){
        api.allTests().then( showResponse ).catch( showError );
    }

    function takeTest(){
        api.takeTest("73").then( showResponse ).catch( showError );
    }

    function giveAnswer(){
        api.giveAnswer(73,21,3).then( showResponse ).catch( showError );
    }

    function addTest(){
        api.addTest("asd" ,true,false).then( showResponse ).catch( showError );
    }

    function addQuestion(){
        const risposte = [
            {"testo": "Giusta", "punteggio":1.0},
            {"testo": "Sbagliata", "punteggio":0.0}
        ];
        api.addQuestion("domanda A", "domanda giusta?", 10, true, false, risposte ).then( showResponse ).catch( showError );
    }

    function showResponse(data){
        const dump = JSON.stringify(data, null, 2);
        setResponse( dump );
    }

    function showError(err){
        setResponse( err.message );
    }


    // <!-- <button className="api-test-bar-clear" onClick={clear}>clear</button> -->
    return (
        <div className="api-test-main">
            <div className='api-test-bar btn-bar'>
                <button onClick={login}>login</button>
                <button onClick={getUser}>getUser</button>
                <button onClick={allTests}>allTests</button>
                <button onClick={takeTest}>takeTest</button>
                <button onClick={giveAnswer}>giveAnswer</button>
                <button onClick={addTest}>addTest</button>
                <button onClick={addQuestion}>addQuestion</button>
            </div>
            <pre className='api-test-results' id="api-test-resuls">
                { response }
            </pre>
        </div>
    );

}



export {ApiTest}