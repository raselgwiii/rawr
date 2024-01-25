import React from 'react'

function Navigation() {
  return (
    <div>
    <nav>
      <ul>
        <li><a href="#"> HOME</a></li>
        <li><a href="about.html">ABOUT</a></li>
          <li><a href="#" class="navlink">ADMISSION</a>
              <ul class="subclass">
                  <li><a href="requirements.html">Admission Requirements</a></li>
                  <li><a href="procedure.html">Procedure for Enrollment</a></li>
              </ul>
          </li>
          <li><a href="contact.html">CONTACT</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navigation;