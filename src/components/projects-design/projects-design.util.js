import radiobarData from "../project-design-radiobar/radiobar.util";
import bogdanovoData from "../project-design-bogdanovo/bogdanovo.util";
import leskovoData from "../project-design-leskovo/leskovo.util";
import millenniumData from "../project-design-millennium/millennium.util";
import nikitinskayData from "../project-design-nikitinskay/nikitinskay.util";
import olimpData from "../project-design-olimp/olimp.util";
import vladimirData from "../project-design-vladimir/vladimir.util";
import ramonData from "../project-design-ramon/ramon.util";

export const projects = [
  {
    title: vladimirData.title,
    caption: vladimirData.caption,
    text: vladimirData.text2,
    path: "/projects/design/vladimir",
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
    title: olimpData.title,
    caption: olimpData.caption,
    text: olimpData.text2,
    path: "/projects/design/olimp",
    urls: ["third01.png", "third02.png"]
  },
  {
    title: nikitinskayData.title,
    caption: nikitinskayData.caption,
    text: nikitinskayData.text2,
    path: "/projects/design/nikitinskay",
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
    title: ramonData.title,
    caption: ramonData.caption,
    text: [ramonData.text2, ramonData.text5, ramonData.text6],
    path: "/projects/design/ramon",
    urls: ["eighth01.png"]
  }
];
