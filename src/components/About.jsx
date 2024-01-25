import React from 'react'
import ispsc from './../assets/img/ispsc.jpg'

function About() {
  return (
    <div>
        <div class="hero-banner">
        <h3>Welcome to Ilocos Sur Polytechnic State College</h3>
        </div>
        <div class="row">
            <div class="col">
                <div class="banner_text">
                    &nbsp;
                    <h3><span>ISPSC</span> Tagudin Campus</h3>
                    <h5>Brief History</h5>
                    <p>Tagudin Campus is the seat of governance in the South Cluster. It was known formerly as the Tagudin General Comprehensive High School established which started as the Tagudin High 
                        xSchool and became a national high school by virtue of RA 4447 which was signed into law in June 19, 1965. After its integration into ISPSC, it became the College of Arts and Sciences. 
                        Today it houses the College of Teacher Education, the College of Business and Hospitality Management, the College of Arts and Sciences, and the College of Information Technology.</p>
                </div>
            </div>
            <div class="col">
                <div class="heading">
                    <img src={ispsc}/>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="hero-banner">
                <div class="useful-links">
                    <h2>Departments</h2>  
                </div>
              <div class="departments-container">
                
                <div class="department-card">
                    <h2 class="department-title">CTE</h2>
                    <p class="department-description">College of Teacher Education</p>
                </div>
                    <div class="department-card">
                        <h2 class="department-title">CBME</h2>
                        <p class="department-description">The College of Business and Management Education</p>
                    </div>
                    <div class="department-card">
                        <h2 class="department-title">CAS</h2>
                        <p class="department-description">The College of Arts and Sciences</p>
                    </div>s
                </div>
                <div class="useful-links">
                    <h2>Useful Links</h2>
                    <a href="#">School Library</a> |
                    <a href="#">Google Classroom</a> |
                    <a href="#">Student Portal</a>
                </div>
            </div>
      </div>
    </div>
  )
}

export default About;