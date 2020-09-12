import React from "react";

import classes from "./nav-logo.module.css";
import logoMain from "../../images/logoMain.png";

const NavLogo = () => {
  return (
    <div className={classes.container}>
      <img src={logoMain} alt="logo" className={classes.img} />
      <div className={classes.title}>
        <div>кипос</div>
        <div>группа компаний</div>
      </div>
    </div>
  );
};

export default NavLogo;
