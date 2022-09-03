import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {TesteroAPI as api} from "../components/TesteroAPI";


function ExamList(){
  let navigate = useNavigate();
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
      <div className='page-testlist-main'>
        <h1>Test disponibili</h1>

        <div className='page-testlist-list'>
          {examList? (
            examList.allTests.map((elem) => {
              return (
                <div className='page-testlist-row' key={elem.id}>
                    <div className='page-testlist-row-info'>
                      <div className='page-testlist-row-data'>{formatDate(elem.data)}</div>
                      <div className='page-testlist-row-nome'>{elem.nome}</div>
                      <div className='page-testlist-row-chevron' onClick={() => {
                        let btn_bar = document.querySelectorAll(".page-testlist-row-actions");
                        btn_bar.forEach((div) => {
                          if (div.id === `btn-bar${elem.id}`) {
                            console.log(div.style.display);
                            if (div.style.display === "none" || div.style.display === "")
                              div.style.display = "block";
                            else
                              div.style.display = "none";
                          } else {
                            div.style.display = "none";
                          }
                        });
                      }}> chevron </div>
                    </div>
                    <div className='page-testlist-row-actions btn-bar' id={`btn-bar${elem.id}`}>
                      <button onClick={() => {
                        navigate(`/${elem.id}/question/0`);
                      }}>Avvia esame</button>
                  </div>
                </div>
              )
            })
          ) : (
            <h1> Caricando </h1>
            )}
        </div>
      </div>


  );
}

export {ExamList}