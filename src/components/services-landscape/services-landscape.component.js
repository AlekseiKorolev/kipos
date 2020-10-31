import React, { useState } from "react";

import classes from "./services-landscape.module.scss";

import data from "./services-landscape.util";

// components
import RealizationLink from "../realization-link/realization-link.component";
import ServiceSlider from "../service-slider/service-slider.component";

const loadImage = fileName => {
  return require(`../../images/services/landscape/${fileName}`);
};

const blockOfDetails = (item, key, index) => (
  <div key={`bd${key}${index}`}>
    <div className={classes.servicesDetailsHeader}>
      <div className={classes.servicesDetailsTitle}>{item.title}</div>
      {"subtitle" in item && (
        <ul className={classes.servicesDetailsSubList}>
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
    <div className={classes.servicesVerticalSlider}>
      <div></div>
      <div></div>
    </div>
    <div className={classes.servicesDetailsText}>{item.text}</div>
  </div>
);

const ServicesLandscape = () => {
  const [active, setActive] = useState(0);

  const part1 = data.list2.filter((_, index) => index < 2);
  const part2 = data.list2.filter((_, index) => index > 1 && index < 4);
  const part3 = data.list2.filter((_, index) => index > 3 && index < 6);

  const handleSetActive = index => {
    setActive(index);
  };

  return (
    <div className={classes.serviceLandscapeContainer}>
      <div className={classes.servicesTextBlock}>
        <div className={classes.servicesMainTitle}>{data.text1}</div>
        <div className={classes.servicesMainSubTitle}>{data.text2}</div>
        <div className={classes.servicesMainText}>{data.text3}</div>
        <div className={classes.servicesMainText}>{data.text4}</div>
        <div className={classes.servicesTitle}>{data.text5}</div>
        <div className={classes.servicesCaption}>{data.text6}</div>
      </div>

      <div className={classes.stepsBlock}>
        <div>
          <img src={loadImage(data.urls[0])} alt="услуга ландшафтный дизайн" />
          <img src={loadImage(data.urls[1])} alt="услуга ландшафтный дизайн" />
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

      <div className={classes.servicesTextBlock}>
        <div className={classes.servicesText}>{data.text7}</div>
        <div className={classes.servicesText}>{data.text8}</div>
        <div className={classes.servicesText}>{data.text9}</div>
        <div className={classes.servicesTitle}>{data.text10}</div>
      </div>

      <ServiceSlider
        data={data.slider}
        active={active}
        setActive={handleSetActive}
      />

      <div className={classes.details}>
        {part1.map((item, index) => blockOfDetails(item, "part1", index))}
        {part2.map((item, index) => blockOfDetails(item, "part2", index))}
        {part3.map((item, index) => blockOfDetails(item, "part3", index))}
      </div>

      <RealizationLink />
    </div>
  );
};

export default ServicesLandscape;
