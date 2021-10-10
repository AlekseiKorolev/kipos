import React, { useState, useEffect } from "react";

import classes from "./project-info.module.css";

// components
import ProjectTitle from "../project-title/project-title.component";
import ProjectSlideShow from "../project-slide-show/project-slide-show.component";
import ViewProjectButton from "../view-project-button/view-project-button.component";

// emulation of data
const projects = [
  {
    title: 'квартира в жк "солнечный олимп"',
    caption: "дизайн интерьера",
    path: "/projects/design/olimp",
    img: "olimp"
  },
  {
    title: 'винный бар "radiobar"',
    caption: "дизайн интерьера",
    path: "/projects/design/radiobar",
    img: "radiobar"
  },
  {
    title: 'гостевой дом во владимирской области',
    caption: "архитектурное проектирование",
    path: "/projects/architecture/vladimir",
    img: "vladimir"
  },
  {
    title: 'жилой дом в поселке нелжа',
    caption: "архитектурное проектирование",
    path: "/projects/architecture/nelga",
    img: "nelga"
  },
];

const ProjectInfo = () => {
  let timeoutId = null; 

  const [count, setCount] = useState(0);
  const [title, setTitle] = useState();
  const [caption, setCaption] = useState();
  const [path, setPath] = useState();
  const [image, setImage] = useState();
  
  useEffect(() => {
    setImage(require(`../../images/slide-show/${projects[count].img}.png`));
    setTitle(projects[count].title);
    setCaption(projects[count].caption);
    setPath(projects[count].path);

    clearInterval(timeoutId);

    timeoutId = setTimeout(() => {
      const newCount = count === projects.length - 1 ? 0 : count + 1;
      setCount(newCount);
    }, 60000);

    return () => clearInterval(timeoutId);
  }, [count]);

  const turnPictures = (side) => {
    let newCount;
    if (side === 'right') {
      newCount = count === projects.length - 1 ? 0 : count + 1;
    } else {
      newCount = count === 0 ? projects.length - 1 : count - 1;
    }

    clearTimeout(timeoutId);
    setCount(newCount);
  }

  return (
    <div className={classes.container}>
      <ProjectTitle title={title} caption={caption} uppercase />
      <div className={classes.projectPreview}>
        <div className={classes.projectButton}>
          <ViewProjectButton path={path}/>
        </div>
          <ProjectSlideShow className={classes.slideShowComponent} img={image} turnPictures={turnPictures} total={projects.map(x => x.img)} current={count}/>
      </div>
    </div>
  );
};

export default ProjectInfo;
