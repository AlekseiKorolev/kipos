import React from "react";

import classes from "./project-arch-vladimir.module.css";

import data from "./vladimir.util";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const loadImage = fileName => {
  return require(`../../images/projects/arch/vladimir/${fileName}`);
};

const ArchVladimir = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />
      <div className={classes.firstBlock}>
        <div className={classes.left}>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
        </div>
        <div className={classes.right}>
          <img
            src={loadImage(data.urls[0])}
            alt="проект Павильон Владимирская область"
          />
        </div>
      </div>
      <div className={classes.secondBlock}>
        <div>{data.text3}</div>
        <img
          src={loadImage(data.urls[1])}
          alt="проект Павильон Владимирская область"
        />
        <div>{data.text4}</div>
      </div>
      <div className={classes.thirdBlock}>
        <img
          src={loadImage(data.urls[2])}
          alt="проект Павильон Владимирская область"
        />
        <div>{data.text5}</div>
      </div>
      <div className={classes.fourthBlock}>{data.text6}</div>

      <div className={classes.fifthBlock}>
        <img
          src={loadImage(data.urls[3])}
          alt="проект Павильон Владимирская область"
        />
        <img
          src={loadImage(data.urls[4])}
          alt="проект Павильон Владимирская область"
        />
      </div>
      <div className={classes.sixthBlock}>
        <div>
          <img
            src={loadImage(data.urls[5])}
            alt="проект Павильон Владимирская область"
          />
          <div>{data.text7}</div>
        </div>
        <div>
          <img
            src={loadImage(data.urls[6])}
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

export default ArchVladimir;
