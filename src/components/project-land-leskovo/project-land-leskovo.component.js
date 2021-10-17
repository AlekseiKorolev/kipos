import React from "react";

import classes from "./project-land-leskovo.module.css";

import data from "./leskovo.util";
import { imgComponent } from "../../utils/img-component";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const LandLeskovo = ({ openPreviewModal }) => {
  const img = (index) => imgComponent(data.path, data.urls, index, openPreviewModal);

  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />

      <div className={classes.firstBlock}>
        <div>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
          <div>{data.text3}</div>
        </div>
        {img(0)}
      </div>

      <div className={classes.secondBlock}>
        {img(1)}
        <div>{data.text4}</div>
      </div>

      <div className={classes.thirdBlock}>
        <div>{data.text5}</div>
        <div>{data.text6}</div>
      </div>

      <div className={classes.fourthBlock}>
        <div>
          {img(2)}
          <div>{data.text7}</div>
        </div>
        <div>
          {img(3)}
          <div>{data.text8}</div>
        </div>
      </div>

      <div className={classes.fifthBlock}>
        <div>{data.text9}</div>
      </div>

      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default LandLeskovo;
