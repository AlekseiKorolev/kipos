import React from "react";

import classes from "./service-slider.module.css";

const ServiceSlider = ({ data, active, setActive }) => {
  return (
    <div>
      <div className={classes.sliderText}>{data[active].text}</div>
      <div className={classes.slider}>
        <div className={classes.sliderLine}></div>
        <div className={classes.sliderList}>
          {data.map((item, index) => (
            <div className={classes.sliderItem} key={`slider${index}`}>
              <div
                className={
                  index === active ? classes.active : classes.noneActive
                }
                onClick={() => setActive(index)}
              ></div>
              <div
                className={
                  index === active
                    ? classes.activeTitle
                    : classes.noneActiveTitle
                }
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
