import React from "react";

import classes from "./projects-architecture.module.css";

import { projects } from "./projects-architecture.util";

// components
import ProjectTitle from "../project-title/project-title.component";
import WatchProjectButton from "../watch-project-button/watch-project-button.component";

const loadImage = fileName => {
  return require(`../../images/projects/arch/preview/${fileName}`);
};

const ProjectsArchitecture = () => {
  return (
    <div className={classes.container}>
      {/* first */}
      <div className={classes.firstProject}>
        <div className={classes.header}>
          <ProjectTitle
            title={projects[0].title}
            caption={projects[0].caption}
          />
        </div>
        <div className={classes.subContainer}>
          <div>
            <div className={classes.text}>{projects[0].text}</div>
            <WatchProjectButton />
            <div>
              <img src={loadImage(projects[0].urls[0])} alt="project" />
            </div>
          </div>
          <div>
            <img src={loadImage(projects[0].urls[1])} alt="project" />
          </div>
        </div>
      </div>
      {/* second */}
      <div className={classes.secondProject}>
        <div>
          <div className={classes.header}>
            <ProjectTitle
              title={projects[1].title}
              caption={projects[1].caption}
            />
          </div>
          <WatchProjectButton />
        </div>
        <div className={classes.subContainer}>
          <div className={classes.text}>{projects[1].text}</div>
          <div>
            <img src={loadImage(projects[1].urls[0])} alt="project" />
          </div>
        </div>
      </div>
      {/* third */}
      <div className={classes.thirdProject}>
        <div className={classes.header}>
          <ProjectTitle
            title={projects[2].title}
            caption={projects[2].caption}
          />
        </div>
        <div className={classes.subContainer}>
          <div>
            <div className={classes.text}>{projects[2].text}</div>
            <WatchProjectButton />
            <div>
              <img src={loadImage(projects[2].urls[0])} alt="project" />
            </div>
          </div>
          <div>
            <img src={loadImage(projects[2].urls[1])} alt="project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsArchitecture;
