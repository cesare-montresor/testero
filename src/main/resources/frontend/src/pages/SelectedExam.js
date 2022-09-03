import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {InputRadioButton} from "../components/InputElement";
import {ErrorMessage} from "../components/ErrorMessage";
import {TesteroAPI as api} from "../components/TesteroAPI";


function SelectedExam(){
  const navigate = useNavigate();
  const urlParams = useParams();
  let ansNum = 0;
  const [error, setError] = useState(false);
  const [compilazione, setCompilazione] = useState(null);
  const [test, setTest] = useState(null);

  useEffect(() => {
    api.takeTest(parseInt(urlParams.examId, 10)).then((data) => {
      setCompilazione(data["takeTest"].compilazione);
      setTest(data["takeTest"].test);
    }).catch((error) => {console.log(error)});
  }, []);

  const handleChangeRadioButton = event => {
    let tmp = {...compilazione};
    tmp.compilazioniRisposte[urlParams.questionNum].risposta = event.target.value;
    setCompilazione(tmp);
    setError(false);
  };

  return (
    <section>
      {compilazione && test?
        (
          <>
            <h1>{test.nome}</h1>

            <div>
              <h4>{test.domande[urlParams.questionNum].testo}</h4>

              <form>
                {test.domande[urlParams.questionNum].risposte.map(ans => {
                  ansNum += 1;
                  let selected = (compilazione.compilazioniRisposte[urlParams.questionNum].risposta);
                  return (
                    <InputRadioButton
                      type="radio"
                      className="radioButton"
                      key={ans.id}
                      id={ans.id}
                      label={test.domande[urlParams.questionNum].domandeConNumero? (ansNum).toString() + ". " + ans.testo : ans.testo}
                      value={ans.id}
                      checked={selected == ans.id}
                      onChange={handleChangeRadioButton}
                    />
                  )}
                )}
              </form>

              {parseInt(urlParams.questionNum, 10) > 0? (
                <button className={"movementButton"} onClick={() => {
                  navigate(`/${urlParams.examId}/question/${parseInt(urlParams.questionNum, 10) - 1}`);
                }}>Domanda precedente</button>
              ) : (
                <></>
              )}

              <button className={"movementButton"} onClick={() => {
                if(compilazione.compilazioniRisposte[urlParams.questionNum].risposta !== null) {
                  api.giveAnswer(compilazione.id, compilazione.compilazioniRisposte[urlParams.questionNum].domanda, compilazione.compilazioniRisposte[urlParams.questionNum].risposta).then(() => {
                    //il back button del browser premuto in Result.js riporta a "/"
                    window.history.replaceState(null, "", "/");
                    if(test.domande.length === parseInt(urlParams.questionNum, 10)+1){
                      navigate("/results");
                    }
                    else
                    {
                      navigate(`/${urlParams.examId}/question/${parseInt(urlParams.questionNum, 10) + 1}`);
                    }
                  }).catch((error) => {console.log(error)});

                } else
                {
                  setError(true);
                }
              }}>
                {test.domande.length === parseInt(urlParams.questionNum, 10)+1? "Risultati" : "Domanda successiva"}
              </button>

              {error && <ErrorMessage>{error}</ErrorMessage>}
            </div>
          </>
        )
        : (<h1>Caricando</h1>)}

    </section>
  );





}

export {SelectedExam};