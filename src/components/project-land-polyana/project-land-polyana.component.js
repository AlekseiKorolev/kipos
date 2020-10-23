import React from "react";

import classes from "./project-land-polyana.module.css";

import data from "./polyana.util";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const loadImage = fileName => {
  return require(`../../images/projects/land/polyana/${fileName}`);
};

const LandPolyana = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />

      <div className={classes.firstBlock}>
        <div>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
        </div>
        <img src={loadImage(data.urls[0])} alt="проект Заячья Поляна" />
      </div>

      <div className={classes.secondBlock}>
        <img src={loadImage(data.urls[1])} alt="проект Заячья Поляна" />
        <div>{data.text3}</div>
      </div>

      <div className={classes.thirdBlock}>
        <div>{data.text4}</div>
        <div>{data.text5}</div>
      </div>

      <div className={classes.fourthBlock}>
        <img src={loadImage(data.urls[2])} alt="проект Заячья Поляна" />
        <img src={loadImage(data.urls[3])} alt="проект Заячья Поляна" />
      </div>

      <div className={classes.fifthBlock}>
        <div>{data.text6}</div>
        <div>{data.text7}</div>
      </div>

      <div className={classes.sixthBlock}>
        <div>
          <img src={loadImage(data.urls[4])} alt="проект Заячья Поляна" />
          <div>{data.text8}</div>
        </div>
      </div>

      <div className={classes.seventhBlock}>
        <img src={loadImage(data.urls[5])} alt="проект Заячья Поляна" />
        <div>
          <img src={loadImage(data.urls[6])} alt="проект Заячья Поляна" />
          <img src={loadImage(data.urls[7])} alt="проект Заячья Поляна" />
        </div>
      </div>

      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default LandPolyana;
