import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./view-others-projects-link.module.css";

const ViewOthersProjectsLink = () => {
  const history = useHistory();

  const handleClick = () => {
    const newPath = history.location.pathname.split("/");
    newPath.pop();
    history.push(newPath.join("/"));
  };

  return (
    <div className={classes.link} onClick={handleClick}>
      смотреть другие проекты
    </div>
  );
};

export default ViewOthersProjectsLink;
