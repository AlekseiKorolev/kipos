import React from "react";

import classes from "./about.module.css";

import { info } from "./about.util";

// components
import Info from "../../components/info/info.component";

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.text01}>
          Компания "КИПОС" работает в сфере дизайна жилых и общественных
          интерьеров, архитектурного проектирования, ландшафтного дизайна,
          занимается ремонтно-отделочными работами и строительством жилых и
          общественных объектов.
        </div>
        <div className={classes.text02}>
          Сегодня мы предлагаем нашим заказчкам полный цикл улуг от разработки
          концепции проекта, заканчивая полной реализацией объекта. Независимо
          от площади и назначения пранируемого обхекта, учитывая все ваши
          пожелания, мы предложим вам оригинальное стилевое решение, при этом не
          забывая про функциональность и эргономику.
        </div>
        <div className={classes.text02}>
          За многолетнюю практку наши специалисты накопили знания и умения,
          которые незаменимы в проектировании и реализации проектов разных
          масштабов и стилевых направлений. Мы гарантируем высокое качество
          работы, четкое соблюдение сроков проектирования и реализации.
        </div>
        <div className={classes.text03}>что вы можете у нас заказать?</div>
      </div>
      <Info />
      <div className={classes.textContainer}>
        <div className={classes.text03}>почему именно мы?</div>
      </div>
      <div className={classes.tips}>
        {info.map((item, index) => (
          <div key={`tip${index}`} className={classes.tip}>
            <div className={classes.number}>{`${index + 1}.`}</div>
            <div className={classes.miniTextContainer}>
              <div className={classes.text04}>{item.title}</div>
              <div className={classes.text05}>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
