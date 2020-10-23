import React from "react";

import classes from "./project-land-leskovo.module.css";

import data from "./leskovo.util";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const loadImage = fileName => {
  return require(`../../images/projects/land/leskovo/${fileName}`);
};

const LandLeskovo = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />

      <div className={classes.firstBlock}>
        <div>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
          <div>{data.text3}</div>
        </div>
        <img src={loadImage(data.urls[0])} alt="проект Лесково" />
      </div>

      <div className={classes.secondBlock}>
        <img src={loadImage(data.urls[1])} alt="проект Лесково" />
        <div>{data.text4}</div>
      </div>

      <div className={classes.thirdBlock}>
        <div>{data.text5}</div>
        <div>{data.text6}</div>
      </div>

      <div className={classes.fourthBlock}>
        <div>
          <img src={loadImage(data.urls[2])} alt="проект Лесково" />
          <div>{data.text7}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[3])} alt="проект Лесково" />
          <div>{data.text8}</div>
        </div>
      </div>

      <div className={classes.fifthBlock}>
        <div>{data.text9}</div>
      </div>

      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default LandLeskovo;
