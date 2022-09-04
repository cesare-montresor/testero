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
    api.getResults(urlParams.examId).then(data => setResult(data["getResults"])).catch(error => alert("Errore durante il calcolo del punteggio."));
  }, []);

  return(
    <section className={"page-centered-container"}>
      {
        result? (
          <div>
            <h1>Risultati {result.nomeTest}</h1>
            <div className={"page-results-questionList"}>
              {
                result.results.map(elem => {
                  questionNum += 1;
                  testScore += elem.puntiDomanda;
                  userScore += elem.selectedRispostaPunteggio;

                  return(
                    <div key={questionNum} className={"page-container-row"}>
                      <div>{(result.domandeConNumero? (`${questionNum}. `) : ("") ) + elem.testoDomanda}</div>

                      <div>
                        <div>{"Risposta/e corretta/e:"}</div>
                        {
                          elem.correctTestoRispostaList.map((ansText, index) => <div key={index}>{ansText}</div>)
                        }
                      </div>
                      <div>
                        <div>{"Risposta selezionata:"}</div>
                        <div>{elem.selectedTestoRisposta}</div>
                      </div>
                      <div className={"page-results-quesion-scoreInfo"}>
                        <div>{`Punti risposta: ${elem.puntiDomanda}`}</div>
                        <div>{`Punti ottenuti: ${elem.selectedRispostaPunteggio}`}</div>
                      </div>
                    </div>
                  );
                })
              }
            </div>

            <div>
              <div>{`Punteggio esame: ${testScore}`}</div>
              <div>{`Punteggio utente: ${userScore}`}</div>
            </div>

            <button onClick={() => {
              window.history.replaceState(null, "", "/");
              navigate("/");
            }}>Torna alla home</button>
          </div>
        ) : (
          <h1>Caricando</h1>
        )
      }
    </section>
  );
}

export {Results}
