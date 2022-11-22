import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Section.css";
function Section() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <span
          className="slideBtn"
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
        >
          <FiberManualRecordIcon />
        </span>
        <span
          className="slideBtn"
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
        >
          <FiberManualRecordIcon />
        </span>
        <span
          className="slideBtn"
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
        >
          <FiberManualRecordIcon />
        </span>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="heroBannerMain">
            <img src="https://res.cloudinary.com/dbpxhm5vt/image/upload/v1668856164/50-years-of-raukantex-1920-x-686-px-header-1086620_r20ejj.webp"></img>
            <h1>
              My Home is Almost Put Together, But I could really use a new rug
            </h1>
            <a href="">Check Our Services</a>
          </div>
        </div>
        <div class="carousel-item">
          <div className="heroBannerMain">
            <img src="https://res.cloudinary.com/dbpxhm5vt/image/upload/v1669015346/screwing-self-tapping-screw-into-metal-fastening-hole-wood-strip-using-screwdriver-work-carpenter_zcs3j1.jpg"></img>
            <h1>
              My Home is Almost Put Together, But I could really use a new rug
            </h1>
            <a href="">Check Our Services</a>
          </div>
        </div>
        <div class="carousel-item">
          <div className="heroBannerMain">
            <img src="https://res.cloudinary.com/dbpxhm5vt/image/upload/v1669018517/custom-kitchen-various-installation-base-cabinets-kitchen-remodel_p2u5at.jpg"></img>
            <h1>
              My Home is Almost Put Together, But I could really use a new rug
            </h1>
            <a href="">Check Our Services</a>
          </div>
        </div>
      </div>
      {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a> */}
    </div>
  );
}

export default Section;
