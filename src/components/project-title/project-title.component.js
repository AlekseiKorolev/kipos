import React from "react";

import classes from "./project-title.module.css";

const ProjectTitle = ({ title, caption, uppercase }) => {
  return (
    <div className={classes.titleContainer}>
      <div>
        <div
          className={`${classes.mainTitle} ${uppercase && classes.uppercase}`}
        >
          {title}
        </div>
        <div></div>
      </div>
      <div className={classes.caption}>{caption}</div>
    </div>
  );
};

export default ProjectTitle;
