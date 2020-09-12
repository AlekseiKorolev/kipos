import React from "react";

import classes from "./project-info.module.css";

import ProjectTitle from "../project-title/project-title.component";
import ProjectSlideShow from "../project-slide-show/project-slide-show.component";

const ProjectInfo = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle />
      <div className={classes.projectPreview}>
        <div>
          <button>смотреть проект</button>
        </div>
        <ProjectSlideShow />
      </div>
    </div>
  );
};

export default ProjectInfo;
