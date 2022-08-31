import {useNavigate} from "react-router-dom";
import {TesteroAPI} from "../components/testero-api";
import React from "react";
import {InputCheckbox, InputText} from "../components/InputElement";

function AddTest(){
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

export {AddTest}