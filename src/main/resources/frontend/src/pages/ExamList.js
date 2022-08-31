import {getExams} from "../data/Exams";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header";
import {useEffect, useState} from "react";
import Questions from "../data/Questions";


export default function ExamList({setSelectedExam, setQuestions, setCurrentQuestion}){
  let examList = getExams();
  let navigate = useNavigate();

  const getQuestions = () => {
    const data = Questions.Questions;
    const shuffled = handleShuffle(data);

    setQuestions(shuffled);
  };

  const handleShuffle = (questionsList) => {
    return questionsList.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <Header></Header>

      <section className='AvailableTest'>
        <h2>Test disponibili</h2>

        <ul className='testList'>
          {examList.map((elem) => {
            return (
              <li className='test' key={elem.Name + "_" + elem.Date.toString()}>
                <div>
                  <h4>{elem.Name}</h4>
                  <div>
                    <p>Data aggiunta: {elem.Date.toString()}</p>
                    <button onClick={() => {
                      setSelectedExam(elem);
                      setCurrentQuestion(0);
                      getQuestions();
                      navigate("/selectedExam")
                    }}>Avvia esame</button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <button onClick={() => {navigate("/createExam")}}> Crea nuovo esame </button>
    </>
  );
}