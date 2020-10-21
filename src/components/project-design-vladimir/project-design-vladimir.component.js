import React from "react";

import classes from "./project-design-vladimir.module.css";

import data from "./vladimir.util";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const loadImage = fileName => {
  return require(`../../images/projects/design/vladimir/${fileName}`);
};

const DesignVladimir = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />
      <div className={classes.firstBlock}>
        <div>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
          <img
            src={loadImage(data.urls[0])}
            alt="проект Владимирская область"
          />
          <div>{data.text3}</div>
        </div>
        <div>
          <img
            src={loadImage(data.urls[1])}
            alt="проект Владимирская область"
          />
          <div>{data.text4}</div>
        </div>
      </div>
      <div className={classes.secondBlock}>
        <div>{data.text5}</div>
        <img src={loadImage(data.urls[2])} alt="проект Владимирская область" />
        <div>{data.text6}</div>
      </div>

      <div className={classes.thirdBlock}>
        <div>
          <img
            src={loadImage(data.urls[3])}
            alt="проект Владимирская область"
          />
          <div>{data.text7}</div>
        </div>
        <div>
          <img
            src={loadImage(data.urls[4])}
            alt="проект Владимирская область"
          />
          <div>{data.text8}</div>
        </div>
        <div>
          <img
            src={loadImage(data.urls[5])}
            alt="проект Владимирская область"
          />
          <div>{data.text9}</div>
        </div>
      </div>

      <div className={classes.fourthBlock}>
        <div>
          <div>{data.text10}</div>
          <img
            src={loadImage(data.urls[6])}
            alt="проект Владимирская область"
          />
          <div>{data.text11}</div>
          <div>{data.text12}</div>
        </div>
        <div>
          <img
            src={loadImage(data.urls[7])}
            alt="проект Владимирская область"
          />
          <div>{data.text13}</div>
          <img
            src={loadImage(data.urls[8])}
            alt="проект Владимирская область"
          />
          <div>{data.text14}</div>
        </div>
      </div>

      <div className={classes.fifthBlock}>
        <div>
          <img
            src={loadImage(data.urls[9])}
            alt="проект Владимирская область"
          />
          <div>{data.text15}</div>
        </div>
        <div>
          <img
            src={loadImage(data.urls[10])}
            alt="проект Владимирская область"
          />
          <div>{data.text16}</div>
        </div>
      </div>

      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default DesignVladimir;
