import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";

import classes from "./nav-menu.module.css";

const mainMenu = [
  { key: "about", text: "о нас" },
  { key: "projects", text: "проекты" },
  { key: "design", text: "дизайн" },
  { key: "arch", text: "архитектура" },
  { key: "land", text: "ландшафт" },
  { key: "services", text: "услуги" },
  { key: "contacts", text: "контакты" },
  { key: "calc", text: "калькулятор" },
  { key: "order", text: "заказать проект" }
];

const NavMenu = ({ history }) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const newKey = history.location.pathname.substring(1);
    setActive(newKey);
  }, [history]);

  return (
    <ul className={classes.mainMenu}>
      {mainMenu.map((item, index) => (
        <li
          key={`navMenu${index}`}
          className={
            index > 1 && index < 5
              ? active === "projects"
                ? `${classes.subItem} ${
                    item.key === active ? classes.subItemActive : ""
                  }`
                : classes.subItemDisabled
              : `${classes.mainItem} ${
                  item.key === active ? classes.mainItemActive : ""
                }`
          }
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default withRouter(NavMenu);
