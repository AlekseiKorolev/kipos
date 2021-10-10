import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import classes from "./App.module.css";

// components
import Nav from "./components/nav/nav.component";
import Calc from "./components/calc/calc.component";
import Footer from "./components/footer/footer.component";
// container
import ServicesAndProjectsContainer from "./containers/services-and-projects-container/services-and-projects-container";
// pages
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contacts from "./components/contacts/contacts";
// modal
import Modal from './modals/modal/modal';

const App = () => {
  const [calc, setCalc] = useState(false);
  const [order, setOrder] = useState(false);
 
  const openCalcModal = () => setCalc(true);
  const closeCalcModal = () => {
    setCalc(false)
  }

  const openOrderModal = () => setOrder(true);
  const closeOrderModal = () => {
    setOrder(false)
  }

  return (
    <Router>
      <div className={classes.container}>
        <div className={classes.nav}>
          <Nav openCalcModal={openCalcModal} openOrderModal={openOrderModal}/>
        </div>
        <div className={classes.spaceBetween} />
        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={ServicesAndProjectsContainer} />
            <Route path="/services" component={ServicesAndProjectsContainer} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
          <Calc openCalcModal={openCalcModal}/>
          <Footer />
          <Modal 
            calc={calc} 
            order={order} 
            closeCalcModal={closeCalcModal}
            closeOrderModal={closeOrderModal}/>
        </div>
        <div className={classes.spaceAtEnd} />
      </div>
    </Router>
  );
};

export default App;
