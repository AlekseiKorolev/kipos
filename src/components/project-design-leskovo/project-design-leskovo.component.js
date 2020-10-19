import React from "react";

import classes from "./project-design-leskovo.module.css";

import data from "./leskovo.util";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const loadImage = fileName => {
  return require(`../../images/projects/design/leskovo/${fileName}`);
};

const DesignLeskovo = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />
      <div className={classes.firstBlock}>
        <div>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
          <img src={loadImage(data.urls[0])} alt="проект Лесково" />
          <div>{data.text3}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[1])} alt="проект Лесково" />
          <div>{data.text4}</div>
        </div>
      </div>

      <div className={classes.secondBlock}>
        <div>
          <img src={loadImage(data.urls[2])} alt="проект Лесково" />
          <div>{data.text5}</div>
        </div>
        <div>
          <div>{data.text6}</div>
          <img src={loadImage(data.urls[3])} alt="проект Лесково" />
        </div>
        <div>
          <img src={loadImage(data.urls[4])} alt="проект Лесково" />
          <div>{data.text7}</div>
        </div>
      </div>

      <div className={classes.thirdBlock}>
        <div>
          <img src={loadImage(data.urls[5])} alt="проект Лесково" />
          <div>{data.text8}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[6])} alt="проект Лесково" />
          <div>{data.text9}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[7])} alt="проект Лесково" />
          <div>{data.text10}</div>
        </div>
      </div>

      <div className={classes.fourthBlock}>{data.text11}</div>

      <div className={classes.fifthBlock}>
        <div>
          <img src={loadImage(data.urls[8])} alt="проект Лесково" />
          <div>{data.text9}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[9])} alt="проект Лесково" />
          <div>{data.text12}</div>
        </div>
      </div>

      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default DesignLeskovo;
