import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {TesteroAPI as api} from "./TesteroAPI";



function NavBar() {
  const [userInfo, setUserinfo] = useState(null);

  useEffect(() => {
    api.getUser().then(data => {setUserinfo(data["getUser"])}).catch(error => alert("Errore nel recupero delle informazioni dell'utente."))
    console.log("userInfo", userInfo);
  }, []);

  return (

    <header>
      <div className="main-header-title" aria-label={"Nome applicazione: Testero"} >Testero&#8482;</div>
      {
        userInfo? (
          <>
            <nav>
              <div className='navlink btn-bar'>
                <Link to="/"  className="menu-elem" aria-label={"Torna alla lista dei test"} > Test disponibili </Link>
                {userInfo.roles === "TEACHER"? (
                  <Link to="/addTest"  className="menu-elem" aria-label={"Aggiungi un test"}> Crea Test </Link>
                ) : (
                  <></>
                )
                }
              </div>
              <div className="navlink btn-bar">
                <Link to={"/logout"} className="menu-elem" aria-label={"Disconnetti dall'utente " + userInfo.username}>Disconnetti</Link>
              </div>
            </nav>
            <div className="userInfo">
              <div tabIndex="0" className="menu-elem" aria-label={"Nome utente: " + userInfo.username}>Utente: {userInfo.username}</div>
              <div tabIndex="0" className="menu-elem" aria-label={"Livello permessi utente: " + userInfo.roles}>Livello permessi: {userInfo.roles}</div>
            </div>
          </>
        ) : (
          <></>
        )
      }
    </header>
  );
}


export {NavBar};