import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {TesteroAPI as api} from "./TesteroAPI";


function NavBar() {
  const [userInfo, setUserinfo] = useState(null);

  useEffect(() => {
    api.getUser().then(data => {setUserinfo(data["getUser"])}).catch(error => alert("Errore nel recupero delle informazioni dell'utente."))
    console.log(userInfo)
  }, []);

  return (
    <>
      <div className="main-header-title" aria-label={"Nome applicazione: Testero"}>Testero&#8482;</div>
      <div className="main-menu">
        {
          userInfo? (
            <>
              <div className='inner-menu btn-bar'>
                <Link to="/" className="menu-elem" aria-label={"Torna alla lista dei test"}> Test List </Link>
                <Link to="/addTest" className="menu-elem" aria-label={"Aggiungi un test"}> Add Test </Link>
                {userInfo.roles === "TEACHER"? (
                  <Link to="/apiTest" className="menu-elem"> API Test </Link>
                  ) : (
                    <></>
                  )
                }
              </div>
              <div className="inner-menu btn-bar">
                <div tabIndex="0" className="menu-elem" aria-label={"Nome utente: " + userInfo.username}>Utente: {userInfo.username}</div>
                <div tabIndex="0" className="menu-elem" aria-label={"Livello permessi utente: " + userInfo.roles}>Livello permessi: {userInfo.roles}</div>
                <Link to={"/logout"} className="menu-elem" aria-label={"Disconnetti dall'utente " + userInfo.username}>Disconnetti</Link>
              </div>
            </>
          ) : (
            <></>
          )
        }
      </div>
    </>
  );
}


export {NavBar};