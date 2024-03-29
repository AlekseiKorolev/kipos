import React from "react";

import classes from "./projects-design.module.css";

import { projects } from "./projects-design.util";

// components
import ProjectTitle from "../project-title/project-title.component";
import ViewProjectButton from "../view-project-button/view-project-button.component";

const loadImage = fileName => {
  return require(`../../images/projects/design/preview/${fileName}`);
};

const ProjectsDesign = () => {
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
            <ViewProjectButton path={projects[0].path} />
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
          <img src={loadImage(projects[1].urls[0])} alt="project" />
        </div>
        <div>
          <div className={classes.header}>
            <ProjectTitle
              title={projects[1].title}
              caption={projects[1].caption}
            />
          </div>
          <div className={classes.text}>{projects[1].text}</div>
          <ViewProjectButton path={projects[1].path} />
        </div>
      </div>
      {/* third */}
      <div className={classes.thirdProject}>
        <div>
          <div className={classes.header}>
            <ProjectTitle
              title={projects[2].title}
              caption={projects[2].caption}
            />
          </div>
          <div className={classes.text}>{projects[2].text}</div>
          <ViewProjectButton path={projects[2].path} />
          <div>
            <img src={loadImage(projects[2].urls[0])} alt="project" />
          </div>
        </div>
        <div>
          <img src={loadImage(projects[2].urls[1])} alt="project" />
        </div>
      </div>
      {/* fourth */}
      <div className={classes.fourthProject}>
        <div>
          <div className={classes.header}>
            <ProjectTitle
              title={projects[3].title}
              caption={projects[3].caption}
            />
          </div>
          <div className={classes.text}>{projects[3].text}</div>
          <ViewProjectButton path={projects[3].path} />
        </div>
        <div>
          <img src={loadImage(projects[3].urls[0])} alt="project" />
        </div>
      </div>
      {/* fifth */}
      <div className={classes.fifthProject}>
        <div className={classes.header}>
          <ProjectTitle
            title={projects[4].title}
            caption={projects[4].caption}
          />
        </div>
        <div className={classes.subContainer}>
          <div>
            <div className={classes.text}>{projects[4].text}</div>
            <ViewProjectButton path={projects[4].path} />
            <div>
              <img src={loadImage(projects[4].urls[0])} alt="project" />
            </div>
          </div>
          <div>
            <img src={loadImage(projects[4].urls[1])} alt="project" />
          </div>
        </div>
      </div>
      {/* sixth */}
      <div className={classes.sixthProject}>
        <div>
          <div>
            <img src={loadImage(projects[5].urls[0])} alt="project" />
          </div>
          <div>
            <div className={classes.text}>{projects[5].text[0]}</div>
            <div className={classes.text}>{projects[5].text[1]}</div>
          </div>
        </div>
        <div className={classes.header}>
          <ProjectTitle
            title={projects[5].title}
            caption={projects[5].caption}
          />
        </div>
        <ViewProjectButton path={projects[5].path} />
      </div>
      {/* seventh */}
      <div className={classes.seventhProject}>
        <div>
          <img src={loadImage(projects[6].urls[1])} alt="project" />
        </div>
        <div>
          <div className={classes.header}>
            <ProjectTitle
              title={projects[6].title}
              caption={projects[6].caption}
            />
          </div>
          <div className={classes.text}>{projects[6].text}</div>
          <ViewProjectButton path={projects[6].path} />
          <div>
            <img src={loadImage(projects[6].urls[0])} alt="project" />
          </div>
        </div>
      </div>
      {/* eighth */}
      <div className={classes.eighthProject}>
        <div className={classes.header}>
          <ProjectTitle
            title={projects[7].title}
            caption={projects[7].caption}
          />
        </div>
        <div className={classes.subContainer}>
          <div>
            <ViewProjectButton path={projects[7].path} />
            <div className={classes.text}>{projects[7].text[0]}</div>
            <div className={classes.text}>{projects[7].text[1]}</div>
            <div className={classes.text}>{projects[7].text[2]}</div>
          </div>
          <div>
            <img src={loadImage(projects[7].urls[0])} alt="project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDesign;
