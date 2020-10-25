import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";

import classes from "./nav-menu.module.css";

const mainMenu = [
  { key: "about", text: "о нас" },
  { key: "projects", text: "проекты" },
  { key: "projects/design", text: "дизайн" },
  { key: "projects/architecture", text: "архитектура" },
  { key: "projects/landscape", text: "ландшафт" },
  { key: "services", text: "услуги" },
  { key: "services/design", text: "дизайн" },
  { key: "services/architecture", text: "архитектура" },
  { key: "services/landscape", text: "ландшафт" },
  { key: "services/realization", text: "реализация" },
  { key: "contacts", text: "контакты" },
  { key: "calc", text: "калькулятор" },
  { key: "order", text: "заказать проект" }
];

const NavMenu = ({ history }) => {
  const [active, setActive] = useState("");

  const handleClick = path => {
    history.push(`/${path}`);
    setActive(path);
  };

  useEffect(() => {
    let newPath = history.location.pathname;
    if (newPath === "/projects" || newPath === "/services") {
      newPath += "/design";
      history.push(newPath);
    }
    if (newPath !== active) {
      setActive(newPath);
    }
  }, [active, history, history.location.pathname]);

  return (
    <ul className={classes.mainMenu}>
      {mainMenu.map((item, index) => (
        <li
          key={`navMenu${index}`}
          className={
            item.key.includes("/")
              ? (active.includes("projects") &&
                  item.key.includes("projects")) ||
                (active.includes("services") && item.key.includes("services"))
                ? `${classes.subItem} ${
                    active.includes(item.key) ? classes.subItemActive : ""
                  }`
                : classes.subItemDisabled
              : `${classes.mainItem} ${
                  active.includes(item.key) ? classes.mainItemActive : ""
                }`
          }
          onClick={() => handleClick(item.key)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default withRouter(NavMenu);
