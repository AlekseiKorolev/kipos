import React from "react";

import classes from "./project-land-vladimir.module.css";

import data from "./vladimir.util";
import { imgComponent } from "../../utils/img-component";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const LandVladimir = ({ openPreviewModal }) => {
  const img = (index) => imgComponent(data.path, data.urls, index, openPreviewModal);

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
        {img(0)}
      </div>

      <div className={classes.secondBlock}>
        {img(1)}
        <div>{data.text5}</div>
      </div>

      <div className={classes.thirdBlock}>{data.text6}</div>

      <div className={classes.fourthBlock}>
        {img(2)}
        {img(3)}
      </div>

      <div className={classes.fifthBlock}>{data.text7}</div>

      <div className={classes.sixthBlock}>
        <div>
          {img(4)}
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
