import React from "react";

import classes from "./project-design-radiobar.module.css";

//import loadImage from "../../util/load-image";
import data from "./radiobar.util";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const loadImage = fileName => {
  return require(`../../images/projects/design/radiobar/${fileName}`);
};

const DesignRadiobar = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />
      <div className={classes.firstBlock}>
        <div className={classes.left}>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
          <img src={loadImage(data.urls[0])} alt="проект Radiobar" />
          <div>{data.text3}</div>
        </div>
        <div className={classes.right}>
          <img src={loadImage(data.urls[1])} alt="проект Radiobar" />
          <div>{data.text4}</div>
        </div>
      </div>
      <div className={classes.secondBlock}>
        <div>{data.text5}</div>
        <img src={loadImage(data.urls[2])} alt="проект Radiobar" />
        <div>{data.text6}</div>
      </div>

      <div className={classes.thirdBlock}>
        <div>
          <img src={loadImage(data.urls[3])} alt="проект Radiobar" />
          <div>{data.text7}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[4])} alt="проект Radiobar" />
          <div>{data.text8}</div>
        </div>
      </div>
      <div className={classes.fourthBlock}>{data.text9}</div>

      <div className={classes.fifthBlock}>
        <div>
          <img src={loadImage(data.urls[5])} alt="проект Radiobar" />
          <div>{data.text10}</div>
        </div>
        <img src={loadImage(data.urls[6])} alt="проект Radiobar" />
      </div>

      <div className={classes.sixthBlock}>
        <img src={loadImage(data.urls[7])} alt="проект Radiobar" />
        <div>{data.text4}</div>
      </div>

      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default DesignRadiobar;
