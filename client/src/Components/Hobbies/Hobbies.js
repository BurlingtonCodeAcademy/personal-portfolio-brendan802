import React from "react";
import "./Hobbies.css";

{
  /*Looking to do two flex box containers, one holding evenly spaced images, the other holding some text*/
}
function Hobbies() {
  return (
    <div className="hobbies">
      <p4 id="hobbiesInterests">
        My hobbies and interests include travel (obviously not in 2020!), hiking
        and exploring nature, playing guitar, and making delicious food for
        friends. I moved to Montana in 2016 and developed a deep passion for the
        sport of fly-fishing, which is how you'll find me outside of the winter
        months. Transitioning out of almost a decade in the culinary field, I'm
        hoping to broaden my career horizons by learning software development.
      </p4>

      {/*text container belo*/}
      <div id="ImageContainer">
        <img
          id="image1"
          src="/Images/4FF57DFA-CFD8-4593-AD59-2415EEB39617.jpeg"
        ></img>
        <img
          id="image2"
          src="/Images/22AD8ECA-B8D3-47E7-B12B-391D1CF935F3_1_105_c.jpeg"
        ></img>
        <img
          id="image3"
          src="/Images/B5EE1BBC-E55A-438E-9369-E9E9D0E29A98_1_105_c.jpeg"
        ></img>
        <img
          id="image4"
          src="/Images/E060F59D-AF69-4197-B0C2-3B00456C69A2_1_105_c.jpeg"
        ></img>
        <img
          id="image5"
          src="/Images/874ED33E-33A5-4E4C-A28C-139AB83FD3B2_1_105_c.jpeg"
        ></img>
        <img
          id="image6"
          src="/Images/D5B31804-6E40-47EE-B9D3-33A85C9E2FEE_1_105_c.jpeg"
        ></img>
        <img
          id="image7"
          src="/Images/982287BC-1265-458A-A267-821EF2E03BAB_1_105_c.jpeg"
        ></img>
        <img
          id="image8"
          src="/Images/7112984E-E11B-47ED-83D4-DDB2C1986E90_1_105_c.jpeg"
        ></img>
      </div>
    </div>
  );
}

export default Hobbies;
