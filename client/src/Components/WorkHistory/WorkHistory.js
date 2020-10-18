import React from "react";
import "./WorkHistory.css";

function WorkHistory() {
  return (
    <div className="WebResume">
      <div id="List">
        {/* Skill/Career List */}
        <div id="CareerGoals">
          <p2>
            Highly Driven Individual Seeking An Employment Transition from the
            Culinary to Software Development Field
          </p2>
          <br></br>
          <br></br>
          <br></br>
          <p2 id="pTag">Conflict Resolution and Communication Skills</p2>
          <br></br>
          <br></br>
          <p2>Proven Leadership Ability</p2>
          <br></br>
          <br></br>
          <p2>Developing Skills in JavaScript, HTML, and CSS</p2>
          <br></br>
          <br></br>
        </div>
      </div>
      {/* List of most recent workplace titles */}
      <div id="employmentHistory">
        <div id="wrap">
          <p3>Sous Chef : The Pitcher Inn (Nov 2018-September 2020)</p3>
          <br></br>
          <br></br>
          <p3>
            Chef De Cuisine: The Round Barn Farm and Inn (March 2017-October
            2018)
          </p3>
          <br></br>
          <br></br>
          <p3>
            Garde Manger Cook : The Common Man Restaurant (November 2016-October
            2017)
          </p3>
          <br></br>
          <br></br>
          <p3>
            Private Chef: Bighorn River Lodge, Montana (May 2015-May 2016)
          </p3>
          <br></br>
          <br></br>
        </div>
        <div className="Skills-Pdf">
        <button id="ResumeDownload">
          <a href="/Resume2020.pdf" download>Resume Download</a>
        </button>
      </div>
      </div>
    </div>
  );
}

export default WorkHistory;
