import React from "react";

import classes from "./project-design-millennium.module.css";

import data from "./millennium.util";
import { imgComponent } from "../../utils/img-component";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const DesignMillennium = ({ openPreviewModal }) => {
  const img = (index) => imgComponent(data.path, data.urls, index, openPreviewModal);

  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />
      <div className={classes.firstBlock}>
        <div>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
          {img(0)}
          <div>{data.text3}</div>
        </div>
        <div>
          {img(1)}
          <div>{data.text4}</div>
        </div>
      </div>

      <div className={classes.secondBlock}>
        <div>{data.text5}</div>
          {img(2)}
        <div>{data.text6}</div>
      </div>

      <div className={classes.thirdBlock}>
        <div>
          {img(3)}
          <div>{data.text7}</div>
        </div>
        <div>
          {img(4)}
          <div>{data.text8}</div>
        </div>
      </div>

      <div className={classes.fourthBlock}>{data.text9}</div>

      <div className={classes.fifthBlock}>
        <div>
          <div>
            {img(5)}
            <div>{data.text10}</div>
          </div>
          <div>
            {img(6)}
            <div>{data.text11}</div>
          </div>
        </div>
        <div>
          <div>
            {img(7)}
          </div>
          <div>
            {img(8)}
            <div>{data.text12}</div>
          </div>
        </div>
      </div>

      <div className={classes.sixthBlock}>
        <div>
          {img(9)}
          <div>{data.text13}</div>
        </div>
      </div>

      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default DesignMillennium;
