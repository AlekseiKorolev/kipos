import React, { useState } from "react";

import classes from "./services-design.module.css";

import data from "./services-design.util";

// components
import RealizationLink from "../realization-link/realization-link.component";
import ServiceSlider from "../service-slider/service-slider.component";

const loadImage = fileName => {
  return require(`../../images/services/design/${fileName}`);
};

const blockOfDetails = (item, key, index) => (
  <div key={`bd${key}${index}`}>
    <div>
      <div className={classes.detailsTitle}>{item.title}</div>
      {"subtitle" in item && (
        <ul className={classes.subList}>
          {item.subtitle.map((item, j) =>
            item[0] !== "-" ? (
              <li key={`list${key}${j}`}>&nbsp;&nbsp;&nbsp;{item}</li>
            ) : (
              <li key={`list${key}${j}`}>{item}</li>
            )
          )}
        </ul>
      )}
    </div>
    <div className={classes.verticalSlider}>
      <div></div>
      <div></div>
    </div>
    <div className={classes.detailsText}>{item.text}</div>
  </div>
);

const ServicesDesign = () => {
  const [active, setActive] = useState(0);

  const part1 = data.list2.filter((_, index) => index < 2);
  const part2 = data.list2.filter((_, index) => index > 1 && index < 4);
  const part3 = data.list2.filter((_, index) => index > 3);

  const handleSetActive = index => {
    setActive(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.textBlock}>
        <div>{data.text1}</div>
        <div>{data.text2}</div>
        <div>{data.text3}</div>
        <div>{data.text4}</div>
        <div>{data.text5}</div>
        <div className={classes.subTitle}>{data.text6}</div>
        <div>{data.text7}</div>
      </div>

      <div className={classes.stepsBlock}>
        <div>
          <img src={loadImage(data.urls[0])} alt="услуга дизайн" />
          <img src={loadImage(data.urls[1])} alt="услуга дизайн" />
        </div>
        <div>
          {data.list1.map((item, index) => (
            <div className={classes.stepsItem} key={`list1${index}`}>
              <div>{`${index + 1}.`}</div>
              <div>
                <div>{item.title}</div>
                <div>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.subTitle}>{data.text8}</div>

      <ServiceSlider
        data={data.slider}
        active={active}
        setActive={handleSetActive}
      />

      <div className={classes.details}>
        <div className={classes.firstBlock}>
          <div>
            {part1.map((item, index) => blockOfDetails(item, "part1", index))}
          </div>
          <img src={loadImage(data.urls[2])} alt="услуга дизайн" />
        </div>
        <div className={classes.secondBlock}>
          <img src={loadImage(data.urls[3])} alt="услуга дизайн" />
          <div>
            {part2.map((item, index) => blockOfDetails(item, "part2", index))}
          </div>
        </div>
        <div className={classes.thirdBlock}>
          <div>
            {part3.map((item, index) => blockOfDetails(item, "part3", index))}
          </div>
          <div>
            <img src={loadImage(data.urls[4])} alt="услуга дизайн" />
            <img src={loadImage(data.urls[5])} alt="услуга дизайн" />
          </div>
        </div>
      </div>

      <RealizationLink />
    </div>
  );
};

export default ServicesDesign;
