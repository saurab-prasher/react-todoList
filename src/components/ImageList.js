import "./ImageList.css";
import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description}></img>;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
