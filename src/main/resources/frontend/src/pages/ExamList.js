import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {TesteroAPI as api} from "../components/TesteroAPI";
import chevron_icon from "../assets/right-chevron.png";



function ExamList(){
  let navigate = useNavigate();
  const [examList, setExamList] = useState(null);

  useEffect(() => {
    api.allTests().then( showResponse ).catch( showError );
  }, []);

  function showResponse(data){
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

  function showLaunchExamButton(elemId) {
    let btn_bars = document.querySelectorAll(".page-testlist-row-actions");
    let chevrons = document.querySelectorAll(".page-testlist-row-chevron");

    btn_bars.forEach((div) => {
      if (div.id === `btn-bar${elemId}`) {
        if (div.style.display === "none" || div.style.display === "")
          div.style.display = "flex";
        else
          div.style.display = "none";

        console.log(chevrons);
        chevrons.forEach((chevron) => {
          console.log("transform", chevron.style);
          if(chevron.id === `chevron${elemId}`)
            if(chevron.style.transform === "")
              chevron.style.transform = "rotate(90deg)";
            else
              chevron.style.transform = "";
        });
      } else {
        div.style.display = "none";
      }
    });
  }

  return (
      <div className='page-testlist-main'>
        <h1>Test disponibili</h1>

        <div className='page-testlist-list'>
          {examList? (
            examList.allTests.map((elem) => {
              return (
                <div className='page-testlist-row' key={elem.id}>
                    <div className='page-testlist-row-container'>
                      <div className='page-testlist-row-info'>
                        <div className='page-testlist-row-data'>{formatDate(elem.data)}</div>
                        <div className='page-testlist-row-nome'>{elem.nome}</div>
                      </div>
                      <button className='page-testlist-row-chevron' id={`chevron${elem.id}`} role="button" onClick={(event) => showLaunchExamButton(elem.id)}>
                        <img src={chevron_icon}/>
                      </button>
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