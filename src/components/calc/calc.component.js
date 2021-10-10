import React from "react";
import { withRouter } from "react-router-dom";

import classes from "./calc.module.css";

import img from "../../images/calc.png";

const Calc = ({ history, openCalcModal }) => {
  const isContacts = history.location.pathname.split("/").filter(x => x !== "")[0] === "contacts";

  return !isContacts && (
    <div className={classes.container}>
      <img src={img} alt="calc" />
      <div className={classes.calcForm}>
        <div className={classes.text}>рассчитайте стоимость онлайн</div>
        <button onClick={openCalcModal}>калькулятор</button>
        <div className={classes.text}>
          Заполните простую форму и мгновенно узнайте стоимость работ
        </div>
      </div>
    </div>
  );
};

export default withRouter(Calc);
