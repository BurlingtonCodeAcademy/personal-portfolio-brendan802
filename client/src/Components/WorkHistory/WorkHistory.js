import React from "react";
import "./WorkHistory.css";

function WorkHistory() {
  return (
    <div className="WebResume">
      <div id="List">
        {/* Skill/Career List */}
        <div id="CareerGoals">
          <p>
            Highly Driven Individual Seeking An Employment Transition from the
            Culinary to Software Development Field
          </p>
          <p id="pTag">Conflict Resolution and Communication Skills</p>
          <p>Proven Leadership Ability</p>
          <p>Developing Skills in JavaScript, HTML, and CSS</p>
        </div>
      </div>
      {/* List of most recent workplace titles */}
      <div id="employmentHistory">
        <div id="wrap">
          <p>Sous Chef : The Pitcher Inn (Nov 2018-September 2020)</p>
          <p>
            Chef De Cuisine: The Round Barn Farm and Inn (March 2017-October
            2018)
          </p>
          <p>
            Garde Manger Cook : The Common Man Restaurant (November 2016-October
            2017)
          </p>

          <p>Private Chef: Bighorn River Lodge, Montana (May 2015-May 2016)</p>
        </div>
        {/*Resume Download Button and Linked In Button */}
        <div className="Skills-Pdf">
          <button id="ResumeDownload">
            <a href="/Resume2020.pdf" download>
              Resume Download
            </a>
          </button>
          <button id="LinkedIn">
            <a href="https://www.linkedin.com/in/t-brendan-devine-50573b77/">
              {" "}
              Linked In
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkHistory;
