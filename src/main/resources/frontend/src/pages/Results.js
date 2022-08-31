import {useNavigate} from "react-router-dom";

function Results({selectedExam, questions}){
  let numQuestion = 0;
  let examPoints = 0;
  let userScore = 0;
  const navigate = useNavigate();

  return(
    <section>
      <h1>Risultati</h1>
      <h2>{selectedExam.Name}</h2>
      <div className={"questionList"}>
        {questions? (
          questions.map((question) => {
            examPoints += question.Points;
            let numAnswer = 0;
            let selectedAnswer = null;
            numQuestion += 1;
            return(
              <div className={"question"} key={question.Name}>
                <h3>{(selectedExam.NumberedQuestions? `${numQuestion}. ` : "") + question.Text}</h3>
                {` (punti ${question.Points})`}
                <h4>Risposta corretta</h4>
                {
                  question.Answers.map(answer => {
                    numAnswer += 1;
                    if(answer.Selected === true) {
                      selectedAnswer = {...answer, Position: numAnswer};
                      selectedAnswer.Score = question.Points * answer.Score;
                      userScore += selectedAnswer.Score;
                    }

                    return(
                      <div>
                        {answer.Score === 1? (
                          <div key={answer.id}>
                            {(question.NumberedAnswers? `${numAnswer}. ` : "") + `${answer.Text}`}
                          </div>
                        ) : (
                          <> </>)
                        }
                      </div>
                    );
                  })
                }

                <h4>Risposta selezionata</h4>
                {selectedAnswer? (
                  <>
                    {(question.NumberedAnswers? `${selectedAnswer.Position}. ` : "") + `${selectedAnswer.Text} (punti: ${selectedAnswer.Score})`}
                  </>
                ) : (
                  <></>)
                }

              </div>
            );
          })
        ) : (
          <h1>Caricando</h1>
        )}
      </div>

      <div>
        {`Punteggio esame: ${examPoints}`}
        {`Punteggio ottenuto: ${userScore}`}
      </div>

      <button onClick={() => {
        window.history.replaceState(null, "", "/");
        navigate("/");
      }}>Torna alla home</button>
    </section>
  );
}

export {Results}
