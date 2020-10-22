import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";

import classes from "./nav-logo.module.css";
import logoMain from "../../images/logoMain.png";
import logoArch from "../../images/logoArch.png";
import logoDesign from "../../images/logoDesign.png";
import logoLand from "../../images/logoLand.png";

const NavLogo = ({ history }) => {
  const [logo, setLogo] = useState(logoMain);

  const handleClick = () => {
    history.push("/");
  };

  useEffect(() => {
    const logo = history.location.pathname
      .split("/")
      .filter(path => path !== "");
    switch (logo[1]) {
      case "design":
        setLogo(logoDesign);
        break;
      case "architecture":
        setLogo(logoArch);
        break;
      case "landscape":
        setLogo(logoLand);
        break;
      default:
        setLogo(logoMain);
    }
  }, [history.location.pathname]);

  return (
    <div className={classes.container} onClick={handleClick}>
      <img src={logo} alt="logo" className={classes.img} />
      <div className={classes.title}>
        <div>кипос</div>
        <div>группа компаний</div>
      </div>
    </div>
  );
};

export default withRouter(NavLogo);
