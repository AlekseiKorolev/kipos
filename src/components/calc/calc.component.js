import React from "react";

import classes from "./calc.module.css";

import img from "../../images/calc.png";

const Calc = () => {
  return (
    <div className={classes.container}>
      <img src={img} alt="calc" />
      <div className={classes.calcForm}>
        <div className={classes.text}>рассчитайте стоимость онлайн</div>
        <button>калькулятор</button>
        <div className={classes.text}>
          Заполните простую форму и мгновенно узнайте стоимость работ
        </div>
      </div>
    </div>
  );
};

export default Calc;
