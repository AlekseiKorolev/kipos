import React from "react";

import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div>
        <span>&copy; 2017-2020, OOO "КИПОС"</span>
      </div>
      <div>
        <span>Контакты:</span>
        <span>+7 (900) 300 7000</span>
        <span>+7 (473) 210 67 06</span>
        <span>info@kiposgroup.ru</span>
      </div>
      <div>
        <span>Адрес:</span>
        <span>394055, Воронеж,</span>
        <span>ул. Моисеева дом 35,</span>
        <span>помещение II</span>
      </div>
      <div>
        <span>Реквизиты:</span>
        <span>ООО "КИПОС"</span>
        <span>ОГРН: 1163668105006</span>
        <span>ИНН: 3666212451</span>
        <span>КПП: 366401001</span>
      </div>
    </div>
  );
};

export default Footer;
