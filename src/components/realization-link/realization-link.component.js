import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./realization-link.module.css";

const RealizationLink = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/services/realization");
  };

  return (
    <div className={classes.realization} onClick={handleClick}>
      реализация
    </div>
  );
};

export default RealizationLink;
