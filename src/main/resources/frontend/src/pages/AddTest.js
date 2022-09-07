import {useNavigate} from "react-router-dom";
import {TesteroAPI as api} from "../components/TesteroAPI";
import React, {useEffect} from "react";
import {InputCheckbox, InputText} from "../components/InputElement";

function AddTest(){
    let navigate = useNavigate();

    const nameRef = React.createRef();
    const orderRef = React.createRef();
    const numberedRef = React.createRef();

    api.getIncompleteTest().then((data)=>{
        if(data.getIncompleteTest==null) return;
        const id = data.getIncompleteTest.id;
        const num = data.getIncompleteTest.domande.length;
        navigate("/addTest/"+id+"/addQuestion/"+num);
    });

    function saveTest(){
        const name = nameRef.current.value;
        const order = orderRef.current.checked;
        const numbered = numberedRef.current.checked;

        api.addTest(name , order, numbered).then((data) => {
            const id = data["addTest"]["id"];
            navigate("/addTest/"+id+"/addQuestion/0");
        });
    }

    useEffect(() => {
        document.title = "Crea test";
    }, []);

    return (
        <section className="page-centered-container">
            <h1 tabIndex="0" id="addTest-title">Aggiungi un nuovo test</h1>
            <div className='test-add'>
                <div className='test-add-main'>
                    <InputText label="Nome" className="test-add-main-nome" id="test-name" ref={nameRef}/>
                    <InputCheckbox label="Ordine Casuale" className="test-add-main-order" id="test-order" ref={orderRef}/>
                    <InputCheckbox label="Domanda con numero" className="test-add-main-numbered" id="test-numbered" ref={numberedRef}/>

                    <div className='test-add-main-controls btn-bar'>
                        <button type="button" onClick={saveTest} >Prossimo</button>
                    </div>
                </div>
            </div>

        </section>
    );
}

export {AddTest}