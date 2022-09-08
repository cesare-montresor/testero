import {useEffect, useReducer, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {InputRadioButton} from "../components/InputElement";
import {ErrorMessage} from "../components/ErrorMessage";
import {TesteroAPI as api} from "../components/TesteroAPI";


const reducer = (state, action) => {
  switch (action.type) {
    case "initialize":
      action.payload.data["takeTest"].compilazione.compilazioniRisposte.sort((a, b) => a.id - b.id);
      return {compilazione: action.payload.data["takeTest"].compilazione, test: action.payload.data["takeTest"].test,
        currentQuestion: action.payload.data["takeTest"].test.domande.find((elem) => (elem.id === action.payload.data["takeTest"].compilazione.compilazioniRisposte[action.payload.questionNum].domanda)),
        currentCompilazioniRisposte: action.payload.data["takeTest"].compilazione.compilazioniRisposte[action.payload.questionNum]
      };

    case "setAnswer":
      const tmp = {...state.compilazione};
      tmp.compilazioniRisposte[action.payload.questionNum].risposta = action.payload.answerId;
      return {...state, compilazione: tmp};

    case "changeQuestion":
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
  const [state, dispatch] = useReducer(reducer, null);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    document.title = "Svolgimento test - Testero";

    api.takeTest(parseInt(urlParams.examId, 10)).then((data) => {
      data["takeTest"].test.domande.forEach((elem) => {
        if(elem.ordineCasuale === true)
          shuffleArray(elem.risposte);
      });

      dispatch({type:"initialize", payload: {data: data, questionNum: urlParams.questionNum}});
    }).catch((error) => {
      alert("Errore durante il recupero delle domande.");
    });
  }, []);

  function selectAnswer(event) {
    dispatch({type: "setAnswer", payload: {answerId: event.target.value, questionNum: urlParams.questionNum}});
    dispatch({type: "setError", payload: false});
  }

  function changeRenderedQuestion(event) {
    if(state.currentCompilazioniRisposte.risposta !== null) {
      const text = event.target.textContent || event.target.innerText;
      const newQuestionNum = (text === "Domanda successiva" || text === "Termina esame")? parseInt(urlParams.questionNum, 10) + 1 : parseInt(urlParams.questionNum, 10) - 1;

      api.giveAnswer(state.compilazione.id, state.currentCompilazioniRisposte.domanda, state.currentCompilazioniRisposte.risposta).then(() => {
        window.history.replaceState(null, "", "/");
        document.getElementById("question-title").focus();

        if(state.test.domande.length === newQuestionNum) {
          api.completeCompilation(state.compilazione.id).then(data => navigate(`/${urlParams.examId}/results`)).catch(error => alert("Errore nel salvataggio della risposta "+ error))
        }
        else {
          dispatch({type: "changeQuestion", payload: newQuestionNum});
          navigate(state.test.domande.length === newQuestionNum? `/${urlParams.examId}/results` : `/${urlParams.examId}/question/${newQuestionNum}`);
        }
      }).catch((error) => {
        alert("Errore durante il salvataggio della risposta.");
      });
    }
    else {
      dispatch({type: "setError", payload: true});
      setTimeout(function(){
        dispatch({type: "setError", payload: false});
      },5000);
    }
  }

  return (
    <main className={"page-centered-container"}>
      {state && (
        <>
          <h1 tabIndex="0" aria-label={`Nome esame: ${state.test.nome}`} id="question-container-title">{state.test.nome}</h1>

          <div>
            {state.error && <ErrorMessage>{"Selezionare una risposta per proseguire"}</ErrorMessage>}
            <h2 tabIndex="0" className={"page-centered-container-row"} id="question-title"
                aria-label={(state.test.domandeConNumero? (`Domanda numero ${parseInt(urlParams.questionNum, 10) + 1}: `) : ("Domanda: ") ) + state.currentQuestion.testo}>

              {(state.test.domandeConNumero? (`${parseInt(urlParams.questionNum, 10) + 1}. `) : ("") ) + state.currentQuestion.testo}
            </h2>

            <form className={"page-question-radioButton"} tabIndex="0" aria-label={"Lista con "+state.currentQuestion.risposte.length+" risposte"}>
                {state.currentQuestion.risposte.map(ans => {
                  ansNum += 1;
                  let selected = parseInt(state.currentCompilazioniRisposte.risposta, 10);
                  return (
                      <InputRadioButton
                        type="radio"
                        className="page-question-radioButton-option"
                        key={ans.id}
                        id={ans.id}
                        label={state.currentQuestion.risposteConNumero? (ansNum).toString() + ". " + ans.testo : ans.testo}
                        ariaLabel={state.currentQuestion.risposteConNumero? "Risposta numero " + (ansNum).toString() + ": " + ans.testo : "Risposta: " + ans.testo}
                        value={ans.id}
                        checked={selected === ans.id}
                        onChange={selectAnswer} />
                  )}
                )}
            </form>

            <div className={"page-question-movementButton btn-bar"}>
              {parseInt(urlParams.questionNum, 10) > 0 && (
                <button onClick={changeRenderedQuestion}>Domanda precedente</button>
              )}

              <button onClick={changeRenderedQuestion}>
                {state.test.domande.length === parseInt(urlParams.questionNum, 10)+1? "Termina esame" : "Domanda successiva"}
              </button>
            </div>

          </div>
        </>
        )}

    </main>
  );
}

export {SelectedExam};