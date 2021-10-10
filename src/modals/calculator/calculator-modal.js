import React, { useState } from "react";

import classes from "./calculator-modal.module.css";

const menuItems = [
  {
    key: "arch",
    text: "архитектура",
  },
  {
    key: "design",
    text: "дизайн интерьера",
  },
  {
    key: "landscape",
    text: "ландшафт",
  },
];
const calcItems = {
  arch: {
    header: [
      { key: "style", text: "стиль дома" },
      { key: "square", text: "площадь дома" },
      { key: "project", text: "этап проекта" },
      { key: "cost", text: "стоимость этапа" },
    ],
    body: [
      [
        { key: "classic", text: "классический" },
        { key: "modern", text: "современный" },
      ],
      [{ key: "input", text: "введите площадь" }],
      [
        { key: "pre", text: "предпроект" },
        { key: "sketch", text: "эскизный проект" },
        { key: "working", text: "рабочий проект" },
      ],
      [
        { key: "pre", value: null },
        { key: "sketch", value: null },
        { key: "working", value: null },
      ],
    ],
  },
  design: {
    header: [
      { key: "style", text: "стиль" },
      { key: "type", text: "тип объекта" },
      { key: "square", text: "площадь " },
      { key: "project", text: "тип проекта" },
      { key: "cost", text: "стоимость этапа" },
    ],
    body: [
      [
        { key: "classic", text: "классический" },
        { key: "modern", text: "современный" },
      ],
      [
        { key: "appartment", text: "квартира" },
        { key: "house", text: "дом" },
      ],
      [{ key: "input", text: "введите площадь" }],
      [
        { key: "sketch", text: "эскизный проект" },
        { key: "working", text: "рабочий проект" },
        { key: "visualization", text: "визуализация" },
      ],
      [
        { key: "sketch", value: null },
        { key: "working", value: null },
        { key: "visualization", value: null },
      ],
    ],
  },
  landscape: {
    header: [
      { key: "style", text: "стиль" },
      { key: "type", text: "тип объекта" },
      { key: "square", text: "площадь объекта" },
      { key: "project", text: "тип проекта" },
      { key: "cost", text: "стоимость этапа" },
    ],
    body: [
      [
        { key: "classic", text: "классический" },
        { key: "modern", text: "современны" },
      ],
      [
        { key: "garden", text: "сад" },
        { key: "lounge", text: "зона отдыха" },
      ],
      [{ key: "input", text: "введите площадь" }],
      [
        { key: "sketch", text: "эскизный проект" },
        { key: "working", text: "рабочий проект" },
      ],
      [
        { key: "sketch", value: null },
        { key: "working", value: null },
      ],
    ],
  },
};

const calcConst = {
  arch: {
    classic: {
      200: {
        pre: 300,
        sketch: 400,
        working: 450,
      },
      800: {
        pre: 260,
        sketch: 360,
        working: 410,
      },
      infinity: {
        pre: 220,
        sketch: 320,
        working: 370,
      },
    },
    modern: {
      200: {
        pre: 240,
        sketch: 340,
        working: 390,
      },
      800: {
        pre: 200,
        sketch: 300,
        working: 350,
      },
      infinity: {
        pre: 160,
        sketch: 260,
        working: 310,
      },
    },
  },
  design: {
    classic: {
      appartment: {
        80: {
          sketch: 900,
          working: 850,
          visualization: 750,
        },
        200: {
          sketch: 860,
          working: 810,
          visualization: 710,
        },
        infinity: {
          sketch: 820,
          working: 770,
          visualization: 670,
        },
      },
      house: {
        80: {
          sketch: 894,
          working: 843,
          visualization: 743,
        },
        200: {
          sketch: 854,
          working: 803,
          visualization: 703,
        },
        infinity: {
          sketch: 814,
          working: 763,
          visualization: 663,
        },
      },
    },
    modern: {
      appartment: {
        80: {
          sketch: 880,
          working: 830,
          visualization: 730,
        },
        200: {
          sketch: 840,
          working: 790,
          visualization: 690,
        },
        infinity: {
          sketch: 800,
          working: 750,
          visualization: 650,
        },
      },
      house: {
        80: {
          sketch: 874,
          working: 823,
          visualization: 723,
        },
        200: {
          sketch: 834,
          working: 783,
          visualization: 683,
        },
        infinity: {
          sketch: 794,
          working: 743,
          visualization: 643,
        },
      },
    },
  },
  landscape: {
    classic: {
      garden: {
        0.1: {
          sketch: 2600,
          working: 5800,
        },
        0.25: {
          sketch: 2500,
          working: 5700,
        },
        infinity: {
          sketch: 2400,
          working: 5600,
        },
      },
      lounge: {
        0.1: {
          sketch: 2700,
          working: 5900,
        },
        0.25: {
          sketch: 2600,
          working: 5800,
        },
        infinity: {
          sketch: 2500,
          working: 5700,
        },
      },
    },
    modern: {
      garden: {
        0.1: {
          sketch: 2560,
          working: 5740,
        },
        0.25: {
          sketch: 2460,
          working: 5640,
        },
        infinity: {
          sketch: 2360,
          working: 5540,
        },
      },
      lounge: {
        0.1: {
          sketch: 2650,
          working: 5850,
        },
        0.25: {
          sketch: 2550,
          working: 5750,
        },
        infinity: {
          sketch: 2450,
          working: 5650,
        },
      },
    },
  },
};

const CalculatorModal = () => {
  const [menuItem, setMenuItem] = useState("arch");
  const [value, setValue] = useState("");
  const [subMenu, setSubMenu] = useState({});

  const handleMenuClick = (key) => {
    setMenuItem(key);
    setSubMenu({});
    setValue("");
  };

  const handleSelectItem = (title, key) => {
    if (title === "project" || title === "cost") {
      return;
    }
    setSubMenu({ ...subMenu, [title]: key });
  };

  const handleSquare = (e) => {
    setValue(e.target.value);
  };

  const handleCalc = () => {
    const square = Number(value);
    const costs = {};
    let summary = 0;

    switch (menuItem) {
      case "arch":
        calcItems.arch.body[calcItems.arch.body.length - 1].forEach((x) => {
          const key =
            square <= 200 ? "200" : square <= 800 ? "800" : "infinity";
          const cost = calcConst.arch[subMenu.style][key][x.key] * square;
          costs[x.key] = cost;
          summary += cost;
        });
        setSubMenu({ ...subMenu, ...costs, summary });
        break;
      case "design":
        calcItems.design.body[calcItems.design.body.length - 1].forEach((x) => {
          const key = square <= 80 ? "80" : square <= 200 ? "200" : "infinity";
          const cost =
            calcConst.design[subMenu.style][subMenu.type][key][x.key] * square;
          costs[x.key] = cost;
          summary += cost;
        });
        setSubMenu({ ...subMenu, ...costs, summary });
        break;
      case "landscape":
        calcItems.landscape.body[calcItems.landscape.body.length - 1].forEach(
          (x) => {
            const key =
              square / 100 <= 0.1
                ? "0.1"
                : square / 100 <= 0.25
                ? "0.25"
                : "infinity";
            const cost =
              calcConst.landscape[subMenu.style][subMenu.type][key][x.key] *
              square;
            costs[x.key] = cost;
            summary += cost;
          }
        );
        setSubMenu({ ...subMenu, ...costs, summary });
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.calcPopup}>
      <ul className={classes.menu}>
        {menuItems.map((item, index) => (
          <li
            key={`calcMenu${index}`}
            className={`${classes.menuItem} ${
              menuItem === item.key ? classes.menuItemActive : null
            }`}
            onClick={() => handleMenuClick(item.key)}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div className={classes.tip}>
        выберите основные параметры и мгновенно узнайте результат*
      </div>
      <div className={classes.calcContainer}>
        {calcItems[menuItem].header.map((title, i) => (
          <div
            className={`${classes.calcItem}
            ${
              title.key === "square"
                ? classes.square
                : title.key === "cost"
                ? classes.cost
                : null
            }`}
            key={`calcItem${i}`}
          >
            <div className={classes.calcItemTitle}>{title.text}</div>
            <ul>
              {calcItems[menuItem].body[i].map((param, j) =>
                param.key === "input" ? (
                  <input
                    key={`bodyKey${j}`}
                    value={value}
                    placeholder={param.text}
                    onChange={(e) => handleSquare(e)}
                  />
                ) : title.key === "cost" ? (
                  <li className={classes.valueItem} key={`bodyKey${j}`}>
                    <span className={classes.value}>
                      {subMenu[param.key] || null}
                    </span>
                    рублей
                  </li>
                ) : (
                  <li
                    className={`${
                      subMenu[title.key] === param.key
                        ? classes.subMenuActive
                        : null
                    } ${title.key !== "project" ? classes.clicable : null}`}
                    key={`bodyKey${j}`}
                    onClick={() => handleSelectItem(title.key, param.key)}
                  >
                    {param.text}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className={classes.button} onClick={() => handleCalc()}>
        Рассчитать
      </div>
      <div className={classes.summary}>
        Суммарная стоимость трёх этапов проекта составит{" "}
        <span className={classes.summaryValue}>{subMenu.summary}</span> рублей
      </div>
      <div className={classes.attention}>
        По умолчанию данный рассчет применим для объектов, расположенных в
        пределах Воронежской области.
        <br />В случае, если объект расположен за пределами Воронежской области,
        применяется поправочный коэффициент*
      </div>
    </div>
  );
};

export default CalculatorModal;
