import React from "react";

import classes from "./project-arch-vladimir.module.css";

import data from "./vladimir.util";
import { imgComponent } from "../../utils/img-component";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const ArchVladimir = ({ openPreviewModal }) => {
  const img = (index) => imgComponent(data.path, data.urls, index, openPreviewModal);

  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />
      <div className={classes.firstBlock}>
        <div className={classes.left}>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
        </div>
        <div className={classes.right}>
          {img(0)}
        </div>
      </div>
      <div className={classes.secondBlock}>
        <div>{data.text3}</div>
        {img(1)}
        <div>{data.text4}</div>
      </div>
      <div className={classes.thirdBlock}>
        {img(2)}
        <div>{data.text5}</div>
      </div>
      <div className={classes.fourthBlock}>{data.text6}</div>

      <div className={classes.fifthBlock}>
        {img(3)}
        {img(4)}
      </div>
      <div className={classes.sixthBlock}>
        <div>
          {img(5)}
          <div>{data.text7}</div>
        </div>
        <div>
          {img(6)}
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
