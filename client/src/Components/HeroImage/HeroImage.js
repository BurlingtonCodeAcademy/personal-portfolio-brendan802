import React from "react";
import "./HeroImage.css";

{
  /*Image link broken need to fix/ Hello Introduction and linked in button, hero Image on right*/
}

export default function HeroImage() {
  return (
    <div>
      {/* Hello/Introduction/Need to these positioned better*/}
      <div className="LandingLeftFlex">
        <div id="textWrap">
          <h4 id="WelcomeId">Hello and Welcome To My Page</h4>
          <h2 id="NameId">I'm Brendan Devine</h2>
          <h4 id="StudentId">Fullstack Developer Student</h4>
        </div>
      </div>

      {/* Landing Page*/}

      <div className="LandingRightFlex">
        <img
          src="/Images/7D720CE2-B82C-473E-B2BF-A915479ACEE6.jpeg"
          id="Hero"
        ></img>
      </div>
    </div>
  );
}
