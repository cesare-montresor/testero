import React from 'react'

import logout_icon from "../assets/power-off.png"


const user = "Utente 1"
const role = "Studente"

function Header(){

  return (
    <section className="main-header">
        <div className="main-header-title">Testero&#8482;</div>
        <div className="main-header-status">
            <div>Utente: {user}</div>
            <div>Livello permessi: {role}</div>
            <div><img src={logout_icon}/> Disconnetti</div>
        </div>
    </section>
  )
}

export {Header};