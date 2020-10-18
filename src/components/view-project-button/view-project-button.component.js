import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./view-project-button.module.css";

const ViewProjectButton = ({ path }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      смотреть проект
    </button>
  );
};

export default ViewProjectButton;
