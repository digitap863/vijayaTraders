import React from "react";
import "./GalleryCard.css";
function GalleryCard() {
  return (
    <div
      className="GallerycardMain"
      style={{
        backgroundImage:
          "url(https://preview.colorlib.com/theme/franclin/assets/img/gallery/gallery1.jpg.webp)",
      }}
    >
      <div className="GallercardLayer"></div>
    </div>
  );
}

export default GalleryCard;
