import React from "react";

import classes from "./projects-landscape.module.css";

import projects from "./projects-landscape.util";

// components
import ProjectTitle from "../project-title/project-title.component";
import ViewProjectButton from "../view-project-button/view-project-button.component";

const loadImage = fileName => {
  return require(`../../images/projects/land/preview/${fileName}`);
};

const ProjectsLandscape = () => {
  return (
    <div className={classes.container}>
      {/* first */}
      <div className={classes.firstProject}>
        <div>
          <div className={classes.header}>
            <ProjectTitle
              title={projects[0].title}
              caption={projects[0].caption}
            />
          </div>
        </div>
        <div className={classes.subContainer}>
          <div>
            <div className={classes.text}>{projects[0].text}</div>
            <ViewProjectButton path={projects[0].path} />
          </div>
          <img src={loadImage(projects[0].urls[0])} alt="project" />
        </div>
      </div>
      {/* second */}
      <div className={classes.secondProject}>
        <ProjectTitle title={projects[1].title} caption={projects[1].caption} />
        <div>
          <div>
            <div className={classes.text}>{projects[1].text[0]}</div>
            <div className={classes.text}>{projects[1].text[1]}</div>
            <ViewProjectButton path={projects[1].path} />
            <img src={loadImage(projects[1].urls[0])} alt="project" />
          </div>
          <img src={loadImage(projects[1].urls[1])} alt="project" />
        </div>
      </div>
      {/* third*/}
      <div className={classes.thirdProject}>
        <ProjectTitle title={projects[2].title} caption={projects[2].caption} />
        <div>
          <img src={loadImage(projects[2].urls[0])} alt="project" />
          <div>
            <div className={classes.header}></div>
            <div className={classes.text}>{projects[2].text}</div>
            <ViewProjectButton path={projects[2].path} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsLandscape;
