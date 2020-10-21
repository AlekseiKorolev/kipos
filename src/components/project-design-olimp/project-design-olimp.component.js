import React from "react";

import classes from "./project-design-olimp.module.css";

import data from "./olimp.util";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const loadImage = fileName => {
  return require(`../../images/projects/design/olimp/${fileName}`);
};

const DesignOlimp = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />
      <div className={classes.firstBlock}>
        <div>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
          <img src={loadImage(data.urls[0])} alt="проект Солнечный Олимп" />
          <div>{data.text3}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[1])} alt="проект Солнечный Олимп" />
          <div>{data.text4}</div>
        </div>
      </div>
      <div className={classes.secondBlock}>
        <div>{data.text5}</div>
        <img src={loadImage(data.urls[2])} alt="проект Солнечный Олимп" />
        <div>{data.text6}</div>
      </div>

      <div className={classes.thirdBlock}>
        <div>
          <img src={loadImage(data.urls[3])} alt="проект Солнечный Олимп" />
          <div>{data.text7}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[4])} alt="проект Солнечный Олимп" />
          <div>{data.text8}</div>
        </div>
      </div>

      <div className={classes.fourthBlock}>
        <div>
          <div>{data.text9}</div>
          <img src={loadImage(data.urls[5])} alt="проект Солнечный Олимп" />
          <div>{data.text10}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[6])} alt="проект Солнечный Олимп" />
          <div>{data.text11}</div>
          <img src={loadImage(data.urls[7])} alt="проект Солнечный Олимп" />
          <div>{data.text12}</div>
        </div>
      </div>

      <div className={classes.fifthBlock}>
        <div>
          <img src={loadImage(data.urls[8])} alt="проект Солнечный Олимп" />
          <div>{data.text13}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[9])} alt="проект Солнечный Олимп" />
          <div>{data.text14}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[10])} alt="проект Солнечный Олимп" />
          <div>{data.text15}</div>
        </div>
      </div>

      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default DesignOlimp;
