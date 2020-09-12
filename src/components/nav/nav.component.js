import React from "react";

import classes from "./nav.module.css";

//components
import NavLogo from "../nav-logo/nav-logo.component";
import NavMenu from "../nav-menu/nav-menu.component";
import NavSocial from "../nav-social/nav-social.component";

const Nav = () => {
  return (
    <div className={classes.container}>
      <NavLogo />
      <NavMenu />
      <NavSocial />
    </div>
  );
};

export default Nav;
