import React from 'react'

import logout_icon from "../../assets/power-off.png"     //In create-react-app relative paths for images don't seem to work. Instead, you can import an image -> stackoverflow 2016

import "./header.css"

const user = "Utente 1"
const role = "Studente"

const Header = () => {
  return (
    <section className="header">
      <ul>
        <li>Utente: {user}</li>
        <li>Livello permessi: {role}</li>
        <li><img src={logout_icon}></img> Disconnetti</li>
      </ul>
      <h1>Test Online</h1>
    </section>
  )
}

export default Header;