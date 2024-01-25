import React from 'react'
import logo from './../assets/img/ispsc_logo.png'

function Header() {
  return (
    <div>
        <div class="header">
        <div class="logo">
            <img src={logo}/>
           
        </div>
        <div class="header-text">REPUBLIC OF THE PHILIPPINES
            <h2>ILOCOS SUR POLYTECHNIC STATE COLLEGE </h2>TAGUDIN CAMPUS | TAGUDIN, ILOCOS SUR
        </div>
    </div>
    </div>
  )
}

export default Header;