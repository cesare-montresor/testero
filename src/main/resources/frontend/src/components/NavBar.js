import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {TesteroAPI as api} from "./TesteroAPI";



function NavBar() {
  const [userInfo, setUserinfo] = useState(null);

  useEffect(() => {
    api.getUser().then(data => {setUserinfo(data["getUser"])}).catch(error => alert("Errore nel recupero delle informazioni dell'utente."))
  }, []);

  function changeFocus() {
      let mainElement = document.getElementById("main");

      if (mainElement != null)
          mainElement.focus();
  }

  return (

    <header>
        <div className="main-header">
            <div className="main-header-logo" ><img src="/testero-logo-192.png" alt="Testero logo"/></div>
            <div className="main-header-title">Testero&#8482;</div>
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
              <div className="menu-elem">Utente: {userInfo.username}</div>
              <div className="menu-elem">Livello permessi: {userInfo.roles}</div>
            </div>
          </>
        )}
    </header>
  );
}


export {NavBar};