import React from 'react'

import logout_icon from "../assets/power-off.png"


const user = "Utente 1"
const role = "Studente"

function Header(){

  return (
    <section className="header">
        <div className='page-title'>Testero&#8482;</div>
        <ul>
            <li>Utente: {user}</li>
            <li>Livello permessi: {role}</li>
            <li><img src={logout_icon}></img> Disconnetti</li>
        </ul>
    </section>
  )
}

export {Header};