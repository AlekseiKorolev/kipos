import radiobarData from "../project-design-radiobar/radiobar.util";
import bogdanovoData from "../project-design-bogdanovo/bogdanovo.util";
import leskovoData from "../project-design-leskovo/leskovo.util";
import millenniumData from "../project-design-millennium/millennium.util";

export const projects = [
  {
    title: "Гостевой дом во Владимирской области",
    caption: "площадь объекта: 158 м2",
    text:
      "Павильон на большом участке вблизи леса предназначается для временного проживания и приема гостей. Проект создавался для семейной пары, которая отдает предпочтение органической архитектуре, натуральным материалам в отделке и мебели, любит простор и воздух в интерьере",
    path: "",
    urls: ["first01.png", "first02.png"]
  },
  {
    title: bogdanovoData.title,
    caption: bogdanovoData.caption,
    text: bogdanovoData.text2,
    path: "/projects/design/bogdanovo",
    urls: ["second01.png"]
  },
  {
    title: 'Квартира в ЖК "Солнечный Олимп"',
    caption: "площадь объекта: 84 м2",
    text:
      "Элегантные апартаменты в новом жилом комплексе бизнес-класса в Воронеже. Светлый интерьер с нотками классики создавался для супружеской пары. Заказчики отдают предпочтение простым формам, качественным дорогим материалам и функциональной мебели и предметам освещения классичиской стилистики.",
    path: "",
    urls: ["third01.png", "third02.png"]
  },
  {
    title: "Красочная квартира в центре Воронежа",
    caption: "площадь объекта: 106 м2",
    text:
      "Квартира для семьи из двух человек. В задачу входило увеличить количество существующих жилых комнат и организовать уютное пространство для хозяев, которые проводят много времени дома",
    path: "",
    urls: ["fourth01.png"]
  },
  {
    title: radiobarData.title,
    caption: radiobarData.caption,
    text: radiobarData.text2,
    path: "/projects/design/radiobar",
    urls: ["fifth01.png", "fifth02.png"]
  },
  {
    title: millenniumData.title,
    caption: millenniumData.caption,
    text: [millenniumData.text2, millenniumData.text5],
    path: "/projects/design/millennium",
    urls: ["sixth01.png"]
  },
  {
    title: leskovoData.title,
    caption: leskovoData.caption,
    text: leskovoData.text2,
    path: "/projects/design/leskovo",
    urls: ["seventh01.png", "seventh02.png"]
  },
  {
    title: "Небольшой частный дом в Рамони",
    caption: "площадь объекта: 66 м2",
    text: [
      "Коттедж в Рамонском районе Воронежской области для семьи с ребенком. Несмотря на маленькую площадь проектирования нам удалось предусмотреть все необходимые помещения в достаточном объеме.",
      "Контрастная цветовая палитра с сочными оттенками в сочетании с минималистичным дизайном мебели, текстилем и декором делает интерьер дома атмосферным и индивидуальным.",
      "В доме комфортно расположились две спальни, гостиная и кухня с обеденной зоной, также удалось выделить вместительную прихожую с естественным светом и раздельный санузел."
    ],
    path: "",
    urls: ["eighth01.png"]
  }
];
