import React from "react";

import classes from "./info.module.css";

import { info } from "./info.util";

//components
import InfoCard from "../info-card/info-card.component";

const Info = () => {
  return (
    <div className={classes.container}>
      {info.map((card, index) => (
        <InfoCard card={card} key={`infoCard${index}`} />
      ))}
    </div>
  );
};

export default Info;
