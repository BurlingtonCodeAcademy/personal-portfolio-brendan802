import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import HeroImage from "./Components/HeroImage/HeroImage";
import Hobbies from "./Components/Hobbies/Hobbies";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import WorkHistory from "./Components/WorkHistory/WorkHistory";

{
  /*main app.js/ Route paths to the various pages within the site*/
}

function App() {
  return (
    <div id="main-wrapper">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/AboutMe" exact component={AboutMe}></Route>
          <Route path="/ProjectPage" exact component={ProjectPage}></Route>
          <Route path="/Hobbies" exact component={Hobbies}></Route>
          <Route path="/WorkHistory" exact component={WorkHistory}></Route>
          <HeroImage />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
