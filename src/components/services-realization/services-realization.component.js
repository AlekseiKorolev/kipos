import React from "react";

import classes from "./services-realization.module.css";

import data from "./services-realization.util";

const blockOfDetails = item => (
  <div>
    <div>
      <div className={classes.detailsTitle}>{item.title}</div>
    </div>
    <div className={classes.verticalSlider}>
      <div></div>
      <div></div>
    </div>
    <div className={classes.detailsText}>{item.text}</div>
  </div>
);

const ServicesRealization = () => {
  const part1 = data.list.filter((_, index) => index < 2);
  const part2 = data.list.filter((_, index) => index > 1);

  return (
    <div className={classes.container}>
      <div className={classes.textBlock}>
        <div>{data.text1}</div>
        <div>{data.text2}</div>
        <div>{data.text3}</div>
        <div>{data.text4}</div>
        <div>{data.text5}</div>
      </div>

      <div className={classes.details}>
        <div className={classes.firstBlock}>
          <div>{part1.map(item => blockOfDetails(item))}</div>
          <div></div>
        </div>
        <div className={classes.secondBlock}>
          <div></div>
          <div>{part2.map(item => blockOfDetails(item))}</div>
        </div>
      </div>

      <div className={classes.textLast}>
        <div>{data.text6}</div>
        <div>{data.text7}</div>
      </div>
    </div>
  );
};

export default ServicesRealization;
