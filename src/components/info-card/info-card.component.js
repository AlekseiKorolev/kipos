import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./info-card.module.css";

const InfoCard = ({ card }) => {
  const history = useHistory();

  const handleClick = path => {
    history.push(path);
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${require(`../../images/${card.url}`)})`
        }}
      ></div>
      <div className={classes.title}>{card.title}</div>
      <div className={classes.text}>
        {card.text.map((text, index) => (
          <div key={`cardText${index}`}>{text}</div>
        ))}
      </div>
      <div className={classes.link} onClick={() => handleClick(card.path)}>
        смотреть проекты
      </div>
    </div>
  );
};

export default InfoCard;
