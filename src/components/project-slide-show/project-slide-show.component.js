import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import classes from "./project-slide-show.module.css";
import arrow from "../../images/slide-show/arrow.png";

const ProjectSlideShow = ({ img, turnPictures, total, current, path }) => {
  const history = useHistory();

  const [loading, setLoading] = useState();
  const [init, setInit] = useState(false);

  useEffect(() => {
    setLoading(true);
  },[img]);

  const loadingFinished = () => {
    setLoading(false);
    if (!init) {
      setInit(true);
    }
  }

  const handleClick = () => {
    history.push(path);
  }

  return (
    <div className={classes.container}>
      <img 
        src={img} 
        alt="slide show" 
        className={`${classes.image} ${loading ? classes.loading : null}` } 
        onLoad={() => loadingFinished()}
        onClick={handleClick}/>
      {init && <img src={arrow} alt="arrow" className={classes.rightArrow} onClick={() => turnPictures('right')}/>}
      {init && <img src={arrow} alt="arrow" className={classes.leftArrow} onClick={() => turnPictures('left')}/>}
      {init && <div className={classes.bar}>
        {total.map((x, i) => <span key={`justAPoint${i}`}className={classes.point}></span>)}
      </div>}
    </div>
  );
};

export default ProjectSlideShow;
