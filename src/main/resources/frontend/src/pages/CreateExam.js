import Header from "../components/Header";
import {InputElement, InputText} from "../components/InputElement";


export default function CreateExam() {

  return(
    <>
      <Header/>

      <div>
        <h1>Informazioni base dell'esame</h1>

        <div className='basic-info'>
          <InputText label="Nome" className="test-add-main-nome" id="test-name"/>
          <InputElement label="Ordine Casuale" className="test-add-main-order" id="test-order"/>
          <InputElement label="Domanda con numero" className="test-add-main-numbered" id="test-numbered"/>

          <div className='next-form'>
            <button type="button" >Avanti</button>
          </div>
        </div>
      </div>
    </>
  );
}