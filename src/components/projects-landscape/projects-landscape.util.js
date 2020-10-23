import vladimirData from "../project-land-vladimir/vladimir.util";
import polyanaData from "../project-land-polyana/polyana.util";
import leskovoData from "../project-land-leskovo/leskovo.util";

export default [
  {
    title: leskovoData.title,
    caption: "",
    text: [leskovoData.text2, leskovoData.text3],
    path: "/projects/landscape/leskovo",
    urls: ["first01.png"]
  },
  {
    title: vladimirData.title,
    caption: "",
    text: [vladimirData.text2, vladimirData.text3],
    path: "/projects/landscape/vladimir",
    urls: ["second01.png", "second02.png"]
  },
  {
    title: polyanaData.title,
    caption: "",
    text: polyanaData.text2,
    path: "/projects/landscape/polyana",
    urls: ["third01.png"]
  }
];
