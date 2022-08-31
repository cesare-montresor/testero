import {useNavigate} from "react-router-dom";
import {TesteroApi} from "../components/TesteroApi";
import React from "react";
import {InputCheckbox, InputText} from "../components/InputElement";

function AddTest(){
    let navigate = useNavigate();
    const api = new TesteroApi();

    const nameRef = React.createRef();
    const orderRef = React.createRef();
    const numberedRef = React.createRef();

    function saveTest(){
        const name = nameRef.current.value;
        const order = orderRef.current.checked;
        const numbered = numberedRef.current.checked;

        api.addTest(name , order, numbered).then((data) => {
            const id = data["addTest"]["id"];
            navigate("/addTest/"+id+"/addQuestion/0");
        });
    }

    return (
        <div className='test-add'>
            <div className='test-add-main'>
                <InputText label="Nome" className="test-add-main-nome" id="test-name" ref={nameRef}/>
                <InputCheckbox label="Ordine Casuale" className="test-add-main-order" id="test-order" ref={orderRef}/>
                <InputCheckbox label="Domanda con numero" className="test-add-main-numbered" id="test-numbered" ref={numberedRef}/>

                <div className='test-add-main-controls'>
                    <button type="button" onClick={saveTest} >Next &rarr;</button>
                </div>
            </div>
        </div>
    );
}

export {AddTest}