import React from "react";

import classes from "./contacts.module.css";

import doc from "../../images/doc.jpg"

const Contacts = () => {
  const dataLeft = [
    {
      title: "Время работы:",
      text: <React.Fragment>Понедельник - Пятница с 9.00 до 18.00<br/>
          Суббота, Воскресенье выходной
        </React.Fragment>
    },
    {
      title: "Контакты:",
      text: <React.Fragment>
          +7 (900) 300 7000<br/>
          +7 (473) 210 67 06<br/>
          info@kiposgroup.ru
        </React.Fragment>
    },
    {
      title: "Адрес",
      text: <React.Fragment>394055, Воронеж, ул. Моисеева дом 35б помещение II</React.Fragment>
    }
  ];

  const dataRight = {
      title: "Реквизиты:",
      text: [
          'ООО "КИПОС"',
          'ОГРН: 1163668105006',
          'ИНН: 3666212451', 
          'КПП: 366401001',
          'р.счёт: 4070 2810 3005 1000 2151',
          'Филиал: № 3652 ВТБ (ПАО) в г. Воронеже',
          'БИК: 042007855', 
          'кор.счёт: 3010 1810 5452 5000 0855'
      ]
    };
  return (
    <div class={classes.contacts}>
        <div class={classes.triangle01}></div>
        <div class={classes.triangle02}></div>
        <div class={classes.triangle03}></div>
        <div class={classes.container}>
          <div class={classes.leftContainer}>
            { dataLeft.map(data => <div class={classes.item}>
                <div class={classes.title}>{ data.title }</div>
                <div class={classes.text}>{ data.text }</div>
              </div>) }
          </div>
          <div class={classes.rightContainer}>
            <div class={classes.item}>
              <div class={classes.title}>{ dataRight.title }</div>
              { dataRight.text.map(text => <div class={classes.text}>{ text }</div>) }
            </div>
          </div>
        </div>
        <a href={doc} class={classes.link} download>Ведомость социальной оценки условий труда</a>
    </div>
  );
};

export default Contacts;
