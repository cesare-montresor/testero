import Header from "../../components/Header/Header";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {InputRadioButton} from "../../components/InputFields/InputFields";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


export default function SelectedExam({selectedExam, questions, currentQuestion, setCurrentQuestion, setQuestions}){
  const navigate = useNavigate();
  let ansNum = 0;
  const [error, setError] = useState(false);

  console.log("questions: ", questions);

  const handleChangeRadioButton = event => {
    let tmp = [...questions];
    tmp[currentQuestion].Answers.forEach((elem) => (elem.id == event.target.value? elem.Selected = true : elem.Selected = false))
    setQuestions(tmp);
    setError(false);
  };

  const handleClickNavigationButton = () => {
    if(questions[currentQuestion].Answers.find((elem) => (elem.Selected === true))) {
      //resetto il radio button per il prossimo render
      let allRadioButtons = document.querySelectorAll(".radioButton");
      allRadioButtons.forEach((radio) => radio.checked = false);

      if(questions.length === currentQuestion+1){
        //il back button del browser premuto in Result.js riporta a "/"
        window.history.replaceState(null, "", "/");
        navigate("/results");
      }

      setCurrentQuestion(currentQuestion+1);
    } else
    {
      setError(true);
    }
  };

  return (
    <>
      <Header></Header>

      <h1>{selectedExam.Name}</h1>

      {questions && questions[currentQuestion]?
        (
          <div>
            <h4>{questions[currentQuestion].Text}</h4>

            <form>
              {questions[currentQuestion].Answers.map(ans => {
                ansNum += 1;
                let selected = (questions[currentQuestion].Answers.find((elem) => (elem.Selected === true)))?.id;
                return (
                  <InputRadioButton
                    type="radio"
                    className="radioButton"
                    key={ans.id}
                    id={ans.id}
                    label={questions[currentQuestion].NumberedAnswers? (ansNum).toString() + ". " + ans.Text : ans.Text}
                    value={ans.id}
                    checked={selected == ans.id}
                    onChange={handleChangeRadioButton}
                  />
                )}
              )}
            </form>

            {currentQuestion > 0? (
              <button className={"movementButton"} onClick={() => {
                setCurrentQuestion(currentQuestion-1);
              }}>Domanda precedente</button>
            ) : (
              <></>
            )}

            <button className={"movementButton"} onClick={() => {
              if(questions[currentQuestion].Answers.find((elem) => (elem.Selected === true))) {
                //resetto il radio button per il prossimo render
                let allRadioButtons = document.querySelectorAll(".radioButton");
                allRadioButtons.forEach((radio) => radio.checked = false);

                if(questions.length === currentQuestion+1){
                  //il back button del browser premuto in Result.js riporta a "/"
                  window.history.replaceState(null, "", "/");
                  navigate("/results");
                }

                setCurrentQuestion(currentQuestion+1);
              } else
              {
                setError(true);
              }
            }}>
              {questions.length === currentQuestion+1? "Risultati" : "Domanda successiva"}
            </button>

            {error && <ErrorMessage>{error}</ErrorMessage>}
          </div>

        )
        : (<h1>Caricando</h1>)}

    </>
  );

}