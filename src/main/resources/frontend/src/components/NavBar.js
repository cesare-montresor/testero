import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {TesteroAPI as api} from "./TesteroAPI";



function NavBar() {
  const [userInfo, setUserinfo] = useState(null);

  useEffect(() => {
    api.getUser().then(data => {setUserinfo(data["getUser"])}).catch(error => alert("Errore nel recupero delle informazioni dell'utente."))
  }, []);

  function changeFocus() {
      let examList = document.getElementById("list-title");
      let selectedTest = document.getElementById("question-title");
      let results = document.getElementById("result-title");
      let addQuestion = document.getElementById("addQuestion-title");
      let addTest = document.getElementById("addTest-title");
      if (examList != null)
          examList.focus();
      else if(selectedTest != null)
          selectedTest.focus();
      else if(results != null)
          results.focus();
      else if(addQuestion != null)
          addQuestion.focus();
      else if(addTest != null)
          addTest.focus();
  }

  return (

    <header>
        <div className="main-header">
            <div className="main-header-logo" ><img tabIndex="-1 " src="/testero-logo-192.png" alt="Testero logo"/></div>
            <div className="main-header-title" aria-label={"Nome applicazione: Testero"} >Testero&#8482;</div>
        </div>
      {
        userInfo && (
          <>
            <nav>
              <div className='navlink btn-bar'>
                <button className="menu-elem" onClick={changeFocus} >Vai al contenuto principale</button>
                <Link to="/"  className="menu-elem" aria-label={"Torna alla lista dei test"} > Test disponibili </Link>
                {userInfo.roles === "TEACHER" && (
                  <Link to="/addTest"  className="menu-elem" aria-label={"Aggiungi un test"}> Crea Test </Link>
                )}
              </div>
              <div className="navlink btn-bar">
                <a href={"/logout"} className="menu-elem" aria-label={"Disconnetti dall'utente " + userInfo.username}>Disconnetti</a>
              </div>
            </nav>
            <div className="userInfo">
              <div tabIndex="0" role={"textbox"} className="menu-elem" aria-label={"Nome utente: " + userInfo.username}>Utente: {userInfo.username}</div>
              <div tabIndex="0" role={"textbox"} className="menu-elem" aria-label={"Livello permessi utente: " + userInfo.roles}>Livello permessi: {userInfo.roles}</div>
            </div>
          </>
        )}
    </header>
  );
}


export {NavBar};