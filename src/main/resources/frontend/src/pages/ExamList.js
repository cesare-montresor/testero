import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {TesteroAPI as api} from "../components/TesteroAPI";



function ExamList(){
  let navigate = useNavigate();
  const [examList, setExamList] = useState(null);

  useEffect(() => {
    document.title = "Test disponibili - Testero";
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

    <div id="main" role="main" className='page-centered-container' tabIndex="-1" aria-labelledby={"list-title"}>
      <h1 id="list-title">Lista test disponibili</h1>

        <ul className="page-testList-list">
          {examList  && (
            examList.allTests.map((elem) => {
              return (
                <li className='page-centered-container-row testList-row' key={elem.id}>
                  <div className='page-testlist-row-container'>
                    <div className='page-testlist-row-info'>
                      <div className='page-testlist-row-data break-word'>{formatDate(elem.data)}</div>
                      <div className='page-testlist-row-data test-name'>{elem.nome}</div>
                    </div>
                    <div className='page-testlist-row-actions btn-bar' id={`btn-bar${elem.id}`}>
                      <button aria-label={`Avvia esame ${elem.nome}`} onClick={() => {
                        navigate(`/${elem.id}/question/0`);
                      }}>Avvia esame</button>
                    </div>
                  </div>
                </li>
              )
            }))}
        </ul>
      </div>


  );
}



export {ExamList}