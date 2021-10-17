import React from "react";

import classes from "./project-arch-bogdanovo.module.css";

import data from "./bogdanovo.util";
import { imgComponent } from "../../utils/img-component";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const ArchBogdanovo = ({ openPreviewModal }) => {
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
          <div>{data.text3}</div>
        </div>
      </div>
      <div className={classes.secondBlock}>
        <div>{data.text4}</div>
        <div>{data.text5}</div>
        {img(1)}
      </div>
      <div className={classes.thirdBlock}>{data.text6}</div>
      <div className={classes.fourthBlock}>
        {img(2)}
        {img(3)}
      </div>
      <div className={classes.fifthBlock}>
        <div>
          <div>{data.text7}</div>
          {img(4)}
          <div>{data.text9}</div>
        </div>
        <div>
          {img(5)}
          <div>{data.text8}</div>
        </div>
      </div>
      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default ArchBogdanovo;
