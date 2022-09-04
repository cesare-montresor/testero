import {useEffect, useReducer, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {InputRadioButton} from "../components/InputElement";
import {ErrorMessage} from "../components/ErrorMessage";
import {TesteroAPI as api} from "../components/TesteroAPI";
import {NavigationButton} from "../components/NavigationButton";


const reducer = (state, action) => {
  switch (action.type) {
    case "initialize":
      return {compilazione: action.payload.data["takeTest"].compilazione, test: action.payload.data["takeTest"].test,
        currentQuestion: action.payload.data["takeTest"].test.domande.find((elem) => (elem.id === action.payload.data["takeTest"].compilazione.compilazioniRisposte[action.payload.questionNum].domanda)),
        currentCompilazioniRisposte: action.payload.data["takeTest"].compilazione.compilazioniRisposte[action.payload.questionNum]
      };

    case "setAnswer":
      const tmp = {...state.compilazione};
      tmp.compilazioniRisposte[action.payload.questionNum].risposta = action.payload.answerId;

      return {...state, compilazione: tmp};

    case "changeQuestion":
      console.log("questionNum", action.payload);
      return {...state,
        currentQuestion: state.test.domande.find((elem) => (elem.id === state.compilazione.compilazioniRisposte[parseInt(action.payload, 10)].domanda)),
        currentCompilazioniRisposte: state.compilazione.compilazioniRisposte[parseInt(action.payload, 10)]
      };

    case "setError":
      return {...state, error: action.payload};
  }
}

function SelectedExam(){
  const urlParams = useParams();
  const navigate = useNavigate();
  let ansNum = 0;
  const [state, dispach] = useReducer(reducer, null);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    api.takeTest(parseInt(urlParams.examId, 10)).then((data) => {
      console.log("compilazione id", data["takeTest"].compilazione.id);
      console.log("compilazione entrata", data["takeTest"].compilazione.compilazioniRisposte);
      data["takeTest"].test.domande.forEach((elem) => {
        if(elem.ordineCasuale === true) {
          shuffleArray(elem.risposte);
        }
      })

      dispach({type:"initialize", payload: {data: data, questionNum: urlParams.questionNum}});
    }).catch((error) => {console.log(error); //window.confirm("Error")
    });
  }, []);

  function selectAnswer(event) {
    dispach({type: "setAnswer", payload: {answerId: event.target.value, questionNum: urlParams.questionNum}});
    dispach({type: "setError", payload: false});
  }

  function changeRenderedQuestion(event) {
    if(state.currentCompilazioniRisposte.risposta !== null) {
      const text = event.target.textContent || event.target.innerText;
      const newQuestionNum = (text === "Domanda successiva" || text === "Risultati")? parseInt(urlParams.questionNum, 10) + 1 : parseInt(urlParams.questionNum, 10) - 1;

      api.giveAnswer(state.compilazione.id, state.currentCompilazioniRisposte.domanda, state.currentCompilazioniRisposte.risposta).then(() => {
        //il back button del browser premuto in Result.js riporta a "/"
        window.history.replaceState(null, "", "/");
        if(state.test.domande.length === newQuestionNum){
          navigate(`/${urlParams.examId}/results`);
        }
        else
        {
          dispach({type: "changeQuestion", payload: newQuestionNum});
          navigate(state.test.domande.length === newQuestionNum? `/${urlParams.examId}/results` : `/${urlParams.examId}/question/${newQuestionNum}`);
        }
      }).catch((error) => {console.log(error)});

    } else
    {
      dispach({type: "setError", payload: true});
    }
  }

  return (
    <section>
      {state?
        (
          <>
            <h1>{state.test.nome}</h1>

            <div>
              <h4>
                {(state.test.domandeConNumero? (`${parseInt(urlParams.questionNum, 10) + 1}. `) : ("") ) + state.currentQuestion.testo}
              </h4>

              <form>
                {state.currentQuestion.risposte.map(ans => {
                  ansNum += 1;
                  let selected = (state.currentCompilazioniRisposte.risposta);
                  return (
                    <InputRadioButton
                      type="radio"
                      className="radioButton"
                      key={ans.id}
                      id={ans.id}
                      label={state.currentQuestion.risposteConNumero? (ansNum).toString() + ". " + ans.testo : ans.testo}
                      value={ans.id}
                      checked={selected == ans.id}
                      onChange={selectAnswer}
                    />
                  )}
                )}
              </form>

              {parseInt(urlParams.questionNum, 10) > 0? (
                <button className={"movementButton"} onClick={changeRenderedQuestion}>Domanda precedente</button>
              ) : (
                <></>
              )}

              <button className={"movementButton"} onClick={changeRenderedQuestion}>
                {state.test.domande.length === parseInt(urlParams.questionNum, 10)+1? "Risultati" : "Domanda successiva"}
              </button>

              {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
            </div>
          </>
        )
        : (<h1>Caricando</h1>)}

    </section>
  );





}

export {SelectedExam};