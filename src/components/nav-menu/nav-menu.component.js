import React from "react";

import classes from "./nav-menu.module.css";

const mainMenu = [
  "о нас",
  "проекты",
  "дизайн",
  "архитектура",
  "ландшафт",
  "услуги",
  "контакты",
  "блог",
  "калькулятор",
  "заказать проект"
];

//const subMenu = ["дизайн", "архитектура", "ландшафт"];

const NavMenu = () => {
  return (
    <ul className={classes.mainMenu}>
      {mainMenu.map((item, index) => (
        <li
          key={`navMenu${index}`}
          className={
            index > 1 && index < 5 ? classes.subItem : classes.mainItem
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
