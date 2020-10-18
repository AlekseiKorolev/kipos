import React from "react";

import classes from "./project-arch-bogdanovo.module.css";

//import loadImage from "../../util/load-image";
import data from "./bogdanovo.util";
// components
import ProjectTitle from "../project-title/project-title.component";
import ViewOthersProjectsLink from "../view-others-projects-link/view-others-projects-link.component";

const loadImage = fileName => {
  return require(`../../images/projects/arch/bogdanovo/${fileName}`);
};

const ArchBogdanovo = () => {
  return (
    <div className={classes.container}>
      <ProjectTitle title={data.title} caption={data.caption} />
      <div className={classes.firstBlock}>
        <div className={classes.left}>
          <div>{data.text1}</div>
          <div>{data.text2}</div>
        </div>
        <div className={classes.right}>
          <img src={loadImage(data.urls[0])} alt="проект Богданово" />
          <div>{data.text3}</div>
        </div>
      </div>
      <div className={classes.secondBlock}>
        <div>{data.text4}</div>
        <div>{data.text5}</div>
        <img src={loadImage(data.urls[1])} alt="проект Богданово" />
      </div>
      <div className={classes.thirdBlock}>{data.text6}</div>
      <div className={classes.fourthBlock}>
        <img src={loadImage(data.urls[2])} alt="проект Богданово" />
        <img src={loadImage(data.urls[3])} alt="проект Богданово" />
      </div>
      <div className={classes.fifthBlock}>
        <div>
          <div>{data.text7}</div>
          <img src={loadImage(data.urls[4])} alt="проект Богданово" />
          <div>{data.text9}</div>
        </div>
        <div>
          <img src={loadImage(data.urls[5])} alt="проект Богданово" />
          <div>{data.text8}</div>
        </div>
      </div>
      <div className={classes.projectsLink}>
        <ViewOthersProjectsLink />
      </div>
    </div>
  );
};

export default ArchBogdanovo;
