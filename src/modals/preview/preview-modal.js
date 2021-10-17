import React, { useState, useEffect } from "react";

import classes from "./preview-modal.module.css";
import arrow from "../../images/slide-show/arrow.png";

const loadImage = (path, urls, idx) => {
  return require(`../../images/projects/${path}${urls[idx]}`);
};

const PrivewModal = ({ preview }) => {
  const { path, urls, index } = preview;
  //console.warn('>>> path, urls, index ', path, urls, index);

  const [img, setImg] = useState();
  const [loading, setLoading] = useState();
  const [init, setInit] = useState(false);
  const [idx , setIdx] = useState()

  useEffect(() => {
    setIdx(index);
  },[index]);

  useEffect(() => {
    if (Number.isFinite(idx)) {
      setLoading(true);
      setImg(loadImage(path, urls, idx));
    }
  },[idx]);

  const loadingFinished = () => {
    setLoading(false);
    if (!init) {
      setInit(true);
    }
  }

  const turnPictures = (side) => {
    switch(side) {
      case 'right':
        if (idx === urls.length - 1) {
          setIdx(0);
        } else {
          setIdx(idx + 1);
        }
        break;
      case 'left':
        if (idx === 0) {
          setIdx(urls.length - 1);
        } else {
          setIdx(idx - 1);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className={classes.previewPopup}>
      <img src={img} alt="slide show" className={`${classes.image} ${loading ? classes.loading : null}` } onLoad={() => loadingFinished()}/>
      {init && <img src={arrow} alt="arrow" className={classes.rightArrow} onClick={() => turnPictures('right')}/>}
      {init && <img src={arrow} alt="arrow" className={classes.leftArrow} onClick={() => turnPictures('left')}/>}
      {init && <div className={classes.bar}>
        {urls.map((x, i) => <span key={`justAPoint${i}`} className={classes.point}></span>)}
      </div>}
    </div>
  );
};

export default PrivewModal;
