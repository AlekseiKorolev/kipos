import React from "react";

import classes from "./project-title.module.css";

const ProjectTitle = () => {
  return (
    <div className={classes.titleContainer}>
      <div>
        <div className={classes.mainTitle}>квартира в жк "солнечный олимп"</div>
        <div></div>
      </div>
      <div className={classes.comment}>дизайн интерьера</div>
    </div>
  );
};

export default ProjectTitle;
