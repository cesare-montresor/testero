import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {TesteroAPI as api} from "../components/TesteroAPI";

function Results(){
  const navigate = useNavigate();
  const urlParams = useParams();
  const [result, setResult] = useState(null);
  let questionNum = 0;
  let testScore = 0;
  let userScore = 0;

  useEffect(() => {
    api.getResults(urlParams.examId).then( (data) => {
      setResult(data["getResults"]);
    }).catch( (error) => {
      alert("Errore durante il calcolo del punteggio.");
    });

  }, []);

  useEffect(() => {
    let item = document.getElementById("question-title");
    if (item != null){item.focus();}
  }, [result]);


  return(
    <section className={"page-centered-container"}>
      {
        result ? (
          <div>
            <h1 id="question-title" tabIndex="0">Risultati {result.nomeTest}</h1>
            <div className={"page-results-questionList"}>
              {
                result.results.map(elem => {
                  questionNum += 1;
                  testScore += elem.puntiDomanda;
                  userScore += elem.selectedRispostaPunteggio;

                  return(
                    <div key={questionNum} className={"page-container-row"}>
                      <h2 tabIndex="0" aria-label={(result.domandeConNumero? (`Domanda numero ${questionNum}: `) : ("Domanda: ") ) + elem.testoDomanda}>{(result.domandeConNumero? (`${questionNum}. `) : ("") ) + elem.testoDomanda}</h2>

                      <div className="page-results-answer">
                        <div tabIndex="0">{"Risposta corretta:"}</div>
                        <ul>
                          {
                            elem.correctTestoRispostaList.map((ansText, index) =>
                                <li aria-label={"Risposta corretta: " + ansText} tabIndex="0" key={index}>{ansText}</li>)
                          }
                        </ul>
                      </div>
                      <div className="page-results-answer">
                        <div tabIndex="0">{"Risposta selezionata:"}</div>
                        <ul>
                          <li tabIndex="0" aria-label={"Risposta selezionata: " + elem.selectedTestoRisposta}>{elem.selectedTestoRisposta}</li>
                        </ul>
                      </div>
                      <div tabIndex="0" className={"page-results-scoreInfo"}>{`Punti risposta: ${elem.puntiDomanda}`}</div>
                      <div tabIndex="0" className={"page-results-scoreInfo"}>{`Punti ottenuti: ${elem.selectedRispostaPunteggio}`}</div>
                    </div>
                  );
                })
              }
            </div>

            <div className={"page-results-finalScore btn-bar"}>
              <div tabIndex="0" className={"page-results-finalScore-text"}>{`Punteggio esame: ${testScore}`}</div>
              <div tabIndex="0" className={"page-results-finalScore-text"}>{`Punteggio utente: ${userScore}`}</div>
              <button
                  onClick={() => {
                window.history.replaceState(null, "", "/");
                navigate("/");
              }}>Torna alla home</button>
            </div>
          </div>
        ) : (
          <h1 id="question-title" tabIndex="0">Caricando</h1>
        )
      }
    </section>
  );
}

export {Results}
