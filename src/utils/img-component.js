import React from "react";

export const imgComponent = (path, urls, index, callback) =>
  <img src={ 
      loadImage(`${path}${urls[index]}`)} 
      alt="проект Лесково" 
      onClick={() => callback(path, urls, index)}
  />


const loadImage = path => require(`../images/projects/${path}`);