import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import classes from "./nav.module.css";

//components
import NavLogo from "../nav-logo/nav-logo.component";
import NavMenu from "../nav-menu/nav-menu.component";
import NavSocial from "../nav-social/nav-social.component";

const Nav = ({ history }) => {
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [history.location.pathname]);

  return (
    <div className={classes.container}>
      <NavLogo />
      <NavMenu />
      <NavSocial />
    </div>
  );
};

export default withRouter(Nav);
