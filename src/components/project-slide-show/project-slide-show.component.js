import React from "react";

import classes from "./project-slide-show.module.css";
import img from "../../images/project.png";

const ProjectSlideShow = () => {
  return (
    <div className={classes.container}>
      <img src={img} alt="slide show" />
    </div>
  );
};

export default ProjectSlideShow;
