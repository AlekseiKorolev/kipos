import React from "react";

import classes from "./home.module.css";

//components
import Nav from "../../components/nav/nav.component";
import ProjectInfo from "../../components/project-info/project-info.component";
import Info from "../../components/info/info.component";
import Calc from "../../components/calc/calc.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <Nav />
      </div>
      <div className={classes.spaceBetween} />
      <div className={classes.content}>
        <ProjectInfo />
        <Info />
        <Calc />
        <Footer />
      </div>
      <div className={classes.spaceAtEnd} />
    </div>
  );
};

export default Home;
