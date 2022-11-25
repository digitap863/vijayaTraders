import React from "react";
import "./GalleryCard.css";
function GalleryCard(props) {
  return (
    <div
      className="GallerycardMain"
      style={{
        backgroundImage:
          `url(${props.image})`,
      }}
    >
      <div className="GallercardLayer"></div>
    </div>
  );
}

export default GalleryCard;
