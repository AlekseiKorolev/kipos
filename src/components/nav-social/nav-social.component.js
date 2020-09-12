import React from "react";

import classes from "./nav-social.module.css";
import vkLogo from "../../images/vk.png";
import instaLogo from "../../images/insta.png";

const NavSocial = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src={vkLogo} alt="vk" />
      </div>
      <div>
        <img src={instaLogo} alt="instagramm" />
      </div>
    </div>
  );
};

export default NavSocial;
