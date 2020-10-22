import React from "react";

import classes from "./project-land-vladimir.module.css";

import data from "./vladimir.util";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const loadImage = fileName => {
  return require(`../../images/projects/land/vladimir/${fileName}`);
};

const LandVladimir = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />

      <div className={classes.firstBlock}>
        <div>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
          <div>{data.text3}</div>
          <div>{data.text4}</div>
        </div>
        <img
          src={loadImage(data.urls[0])}
          alt="проект Павильон Владимирская область"
        />
      </div>

      <div className={classes.secondBlock}>
        <img
          src={loadImage(data.urls[1])}
          alt="проект Павильон Владимирская область"
        />
        <div>{data.text5}</div>
      </div>

      <div className={classes.thirdBlock}>{data.text6}</div>

      <div className={classes.fourthBlock}>
        <img
          src={loadImage(data.urls[2])}
          alt="проект Павильон Владимирская область"
        />
        <img
          src={loadImage(data.urls[3])}
          alt="проект Павильон Владимирская область"
        />
      </div>

      <div className={classes.fifthBlock}>{data.text7}</div>

      <div className={classes.sixthBlock}>
        <div>
          <img
            src={loadImage(data.urls[4])}
            alt="проект Павильон Владимирская область"
          />
          <div>{data.text8}</div>
        </div>
      </div>

      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default LandVladimir;
