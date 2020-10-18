import React from "react";

import classes from "./project-title.module.css";

const ProjectTitle = ({ title, caption, uppercase }) => {
  const reCaption = caption => {
    if (!/\d+/.test(caption))
      return <div className={classes.caption}>{caption}</div>;
    const newCaption = caption.split(" ");
    const units = newCaption.pop();
    const numbers = newCaption.pop();
    return (
      <div className={classes.caption}>
        {newCaption.join(" ")} <span className={classes.square}>{numbers}</span>{" "}
        {units}
      </div>
    );
  };

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
      {reCaption(caption)}
    </div>
  );
};

export default ProjectTitle;
