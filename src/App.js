import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import classes from "./App.module.css";

// components
import Nav from "./components/nav/nav.component";
import Calc from "./components/calc/calc.component";
import Footer from "./components/footer/footer.component";
// container
import ProjectsContainer from "./components/projects-container/projects-container";
// pages
import Home from "./pages/home/home";
import About from "./pages/about/about";

const App = () => {
  return (
    <Router>
      <div className={classes.container}>
        <div className={classes.nav}>
          <Nav />
        </div>
        <div className={classes.spaceBetween} />
        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={ProjectsContainer} />
            <Route path="*" component={Home} />
          </Switch>
          <Calc />
          <Footer />
        </div>
        <div className={classes.spaceAtEnd} />
      </div>
    </Router>
  );
};

export default App;
