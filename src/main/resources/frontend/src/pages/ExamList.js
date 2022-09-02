import {getExams} from "../data/Exams";
import {useNavigate} from "react-router-dom";
import Questions from "../data/Questions";
import {useEffect, useState} from "react";
import {TesteroApi} from "../components/TesteroApi";


function ExamList({setSelectedExam, setQuestions, setCurrentQuestion}){
  let navigate = useNavigate();
  const api = new TesteroApi();
  const [examList, setExamList] = useState(null);

  useEffect(() => {
    api.allTests().then( showResponse ).catch( showError );
  }, []);

  function showResponse(data){
    console.log("examList", data);
    setExamList( data );
  }

  function showError(err){
    setExamList( err.message );
  }

  return (
      <section className='AvailableTest'>
        <h2>Test disponibili</h2>

        <ul className='testList'>
          {examList? (
            examList.allTests.map((elem) => {
              return (
                <li className='test' key={elem.id}>
                  <div>
                    <h4>{elem.nome}</h4>
                    <div>
                      <p>Data aggiunta: {elem.data.toString()}</p>
                      <button onClick={() => {
                        setSelectedExam(elem);
                        setCurrentQuestion(0);

                        setQuestions(() => {});

                        navigate("/selectedExam")
                      }}>Avvia esame</button>
                    </div>
                  </div>
                </li>
              )
            })
          ) : (
            <h1> Caricando </h1>
            )}
        </ul>
      </section>


  );
}

export {ExamList}