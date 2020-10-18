import React from "react";

import classes from "./project-arch-nelga.module.css";

import data from "./nelga.util";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const loadImage = fileName => {
  return require(`../../images/projects/arch/nelga/${fileName}`);
};

const ArchNelga = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />
      <div className={classes.firstBlock}>
        <div className={classes.left}>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
        </div>
        <div className={classes.right}>
          <img src={loadImage(data.urls[0])} alt="проект Нелжа" />
          <div>{data.text3}</div>
        </div>
      </div>
      <div className={classes.secondBlock}>
        <div>{data.text4}</div>
        <div>{data.text5}</div>
        <img src={loadImage(data.urls[1])} alt="проект Нелжа" />
      </div>
      <img
        className={classes.thirdBlock}
        src={loadImage(data.urls[2])}
        alt="проект Нелжа"
      />
      <div className={classes.fourthBlock}>{data.text6}</div>

      <div className={classes.fifthBlock}>
        <div>
          <img src={loadImage(data.urls[3])} alt="проект Нелжа" />
          <div>{data.text7}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[4])} alt="проект Нелжа" />
          <div>{data.text8}</div>
        </div>
      </div>
      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default ArchNelga;
