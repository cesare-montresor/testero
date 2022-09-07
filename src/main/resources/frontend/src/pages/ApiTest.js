import {TesteroAPI as api} from "../components/TesteroAPI";
import React, {useState} from "react";

function ApiTest() {
    const [response, setResponse] = useState("");

    function getUser(){
        api.getUser().then( showResponse ).catch( showError );
    }

    function allTests(){
        api.allTests().then( showResponse ).catch( showError );
    }

    function takeTest(){
        api.takeTest(1).then( showResponse ).catch( showError );
    }

    function giveAnswer(){
        api.giveAnswer(73,21,3)
            .then( (data)=> console.log("ID: "+data.giveAnswer.id) )
            .catch( (error)=> console.error("Errore: "+error.message) );
    }

    function addTest(){
        api.addTest("asd" ,true,false).then( showResponse ).catch( showError );
    }

    function addQuestion(){
        const risposte = [
            {"name": 0},
            {"name": 1}
        ];
        api.addQuestion("domanda A", "domanda giusta?", 10, true, false, risposte ).then( showResponse ).catch( showError );
    }

    function getIncompleteTest(){
        api.getIncompleteTest().then( showResponse ).catch( showError );
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
                <button onClick={getUser}>getUser</button>
                <button onClick={allTests}>allTests</button>
                <button onClick={takeTest}>takeTest</button>
                <button onClick={giveAnswer}>giveAnswer</button>
                <button onClick={addTest}>addTest</button>
                <button onClick={addQuestion}>addQuestion</button>
                <button onClick={getIncompleteTest}>getIncompleteTest</button>
            </div>
            <pre className='api-test-results' id="api-test-resuls">
                { response }
            </pre>
        </div>
    );

}



export {ApiTest}