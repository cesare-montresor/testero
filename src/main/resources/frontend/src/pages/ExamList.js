import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {TesteroAPI as api} from "../components/TesteroAPI";



function ExamList(){
  let navigate = useNavigate();
  const [examList, setExamList] = useState(null);

  useEffect(() => {
    api.allTests().then((data) => (setExamList(data))).catch((error) => (alert("Errore durante il caricamento dei test.")));
  }, []);

  function zeroPad(num){
    return num.toString().padStart(2,'0');
  }

  function formatDate(date){
    var d  = new Date(date);
    var date_string = zeroPad(d.getDate()) + '-'+ zeroPad(d.getMonth()+1) +'-'+ d.getFullYear();
    var time_string = zeroPad(d.getHours()) + ':'+ zeroPad(d.getMinutes());
    return date_string + ' ' + time_string;
  }

  return (

    <main className='page-centered-container'>
      <h1 tabIndex="0" aria-label={`Lista test disponibili`}>Test disponibili</h1>

        <ul className="page-testList-list">
          {examList? (
            examList.allTests.map((elem) => {
              return (
                <li className='page-centered-container-row testList-row' key={elem.id}>
                    <div className='page-testlist-row-container'>
                      <div className='page-testlist-row-info'>
                        <div tabIndex="0" className='page-testlist-row-data' aria-label={`Data esame ${elem.nome} ${formatDate(elem.data)}`}>{formatDate(elem.data)}</div>
                        <div tabIndex="0" className='page-testlist-row-data' aria-label={`Nome esame ${elem.nome}`}>{elem.nome}</div>
                      </div>
                      <div className='page-testlist-row-actions btn-bar' id={`btn-bar${elem.id}`}>
                        <button aria-label={`Avvia esame ${elem.nome}`} onClick={() => {
                          navigate(`/${elem.id}/question/0`);
                        }}>Avvia esame</button>
                      </div>
                    </div>
                </li>
              )
            })
          ) : (
            <h1> Caricando test </h1>
            )}
        </ul>
      </main>


  );
}

export {ExamList}