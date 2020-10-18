import React from "react";
import "./AboutMe.css";

{
  /* Two Flex box containers, about half n half width of page*/
}

function AboutMe() {
  return (
    <div id="AboutPage">
      <div className="profileImageLeft">
        <img src="../Images/IMG_1025.jpg" className="headShot"></img>
      </div>
      <div className="AboutParagraph">
        <h2 id="About">About Me</h2>
        <br></br>
        <h4 id="Introduction">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Born and raised in
          Vermont, I grew up with a dynamic mix of being an outdoor-kid who
          wasn't afraid to wittle away some hours playing video games or Magic
          the Gathering. I attended Westminster College in Salt Lake City where
          I received a B.A. in Environmental Studies. I grew to have a passion
          for the Culinary Arts, which is what I focused on for 6 years
          post-graduation. Working my way up the ladder in various fine-dining
          establishments in Utah, Montana, and Vermont, my perseverence and work
          ethic was greatly enriched.
          <br></br>
          {/* continuing of about me paragraphs/interests/story*/}
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An aspiring Full-Stack
          Engineer, I'm currently attending Burlington Code Academy's Software
          Development Bootcamp, which I plan to graduate from imn December. In
          my spare time I enjoy reading, usually Elmore Leonard, playing guitar,
          cooking, running, snowboarding, and have a deep passion for
          fly-fishing.
        </h4>
      </div>
    </div>
  );
}

export default AboutMe;
