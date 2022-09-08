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
    document.title = "Risultati test - Testero";

    api.getResults(urlParams.examId).then( (data) => {
      setResult(data["getResults"]);
    }).catch( (error) => {
      alert("Errore durante il calcolo del punteggio.");
    });

  }, []);

  useEffect(() => {
    let item = document.getElementById("result-title");
    if (item != null)
      {item.focus();}
  }, [result]);


  return(
    <div id="main" role="main" className={"page-centered-container"} aria-labelledby="result-title" tabIndex="-1">
      {
        result && (
          <div>
            <h1 id="result-title">Risultati {result.nomeTest}</h1>
            <div className={"page-results-questionList"}>
              {
                result.results.map(elem => {
                  questionNum += 1;
                  testScore += elem.puntiDomanda;
                  userScore += elem.selectedRispostaPunteggio;

                  return(
                    <div key={questionNum} className={"page-centered-container-row"}>
                      <h2>{(result.domandeConNumero? (`Domanda ${questionNum}: `) : ("Domanda: ") ) + elem.testoDomanda}</h2>

                      <div className="page-results-questionResult">
                        <div>{elem.correctTestoRispostaList.length > 1? "Risposte corrette:" : "Risposta corretta:"}</div>
                        <ul>
                          {
                            elem.correctTestoRispostaList.map((ansText, index) =>
                                <li>{ansText}</li>)
                          }
                        </ul>
                      </div>

                      <div className="page-results-questionResult">
                        <div>{"Risposta selezionata:"}</div>
                        <ul>
                          <li>{elem.selectedTestoRisposta}</li>
                        </ul>
                      </div>
                      
                      <div className="page-results-questionResult break-word">{`Punti risposta: ${elem.puntiDomanda}`}</div>
                      <div className="page-results-questionResult break-word">{`Punti ottenuti: ${elem.selectedRispostaPunteggio}`}</div>
                    </div>
                  );
                })
              }
            </div>

            <div className={"page-results-finalScore btn-bar"}>
              <h2>Punteggio finale</h2>
              <div className={"page-results-finalScore-text break-word"}>{`Punteggio esame: ${testScore}`}</div>
              <div className={"page-results-finalScore-text break-word"}>{`Punteggio utente: ${userScore}`}</div>
              <button
                  onClick={() => navigate("/")} aria-label="Torna alla lista dei test disponibili">Torna alla lista dei test</button>
            </div>
          </div>
        )}
    </div>
  );
}

export {Results}
