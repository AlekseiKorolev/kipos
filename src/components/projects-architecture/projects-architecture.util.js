import nelgaData from "../project-arch-nelga/nelga.util";
import bogdanovoData from "../project-arch-bogdanovo/bogdanovo.util";
import vladimirData from "../project-arch-vladimir/vladimir.util";
export const projects = [
  {
    title: nelgaData.title,
    caption: nelgaData.caption,
    text: nelgaData.text2,
    path: "/projects/architecture/nelga",
    urls: ["first01.png", "first02.png"]
  },
  {
    title: bogdanovoData.title,
    caption: bogdanovoData.caption,
    text: bogdanovoData.text2,
    path: "/projects/architecture/bogdanovo",
    urls: ["second01.png"]
  },
  {
    title: vladimirData.title,
    caption: vladimirData.caption,
    text: vladimirData.text2,
    path: "/projects/architecture/vladimir",
    urls: ["third01.png", "third02.png"]
  }
];
