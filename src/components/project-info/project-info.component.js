import React from "react";

import classes from "./project-info.module.css";

// components
import ProjectTitle from "../project-title/project-title.component";
import ProjectSlideShow from "../project-slide-show/project-slide-show.component";
import ViewProjectButton from "../view-project-button/view-project-button.component";

// emulation of data
const project = {
  title: 'квартира в жк "солнечный олимп"',
  caption: "дизайн интерьера",
  path: "",
  urls: []
};

const ProjectInfo = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={project.title} caption={project.caption} uppercase />
      <div className={classes.projectPreview}>
        <div>
          <ViewProjectButton />
        </div>
        <ProjectSlideShow />
      </div>
    </div>
  );
};

export default ProjectInfo;
