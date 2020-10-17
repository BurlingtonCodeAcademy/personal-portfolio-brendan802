import React from 'react'
import "./HeroImage.css"



export default function HeroImage() {
return (
    <div>
        <div className="LandingLeftFlex">
        <h2 id="WelcomeId">Hello and Welcome To My Page</h2>
        <h1 id="NameId">I Am Brendan Devine</h1>
        <h3 id="StudentId">Fullstack Developer Student</h3>
        </div>
        
        <div className="LandingRightFlex">
        <img src="/Images/Pictures/4FF57DFA-CFD8-4593-AD59-2415EEB39617.jpeg" className="Hero"></img>
        </div>
       
    </div>

)
} 

