import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {TesteroAPI as api} from "./TesteroAPI";
import logout_icon from "../assets/power-off.png";


function NavBar() {
  const [userInfo, setUserinfo] = useState(null);

  useEffect(() => {
    api.getUser().then(data => {setUserinfo(data["getUser"])}).catch(error => alert("Errore nel recupero delle informazioni dell'utente."))
    console.log(userInfo)
  }, []);

  return (
    <>
      <div className="main-header-title">Testero&#8482;</div>
      <div className="main-menu">
        {
          userInfo? (
            <>
              <div className='inner-menu btn-bar'>
                <Link to="/" className="menu-elem"> Test List </Link>
                <Link to="/addTest" className="menu-elem"> Add Test </Link>
                {userInfo.roles === "TEACHER"? (
                  <Link to="/apiTest" className="menu-elem"> API Test </Link>
                  ) : (
                    <></>
                  )
                }
              </div>
              <div className="inner-menu btn-bar">
                <div tabIndex="0" className="menu-elem">Utente: {userInfo.username}</div>
                <div tabIndex="0" className="menu-elem">Livello permessi: {userInfo.roles}</div>
                <Link to={"/logout"} className="menu-elem">Disconnetti</Link>
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