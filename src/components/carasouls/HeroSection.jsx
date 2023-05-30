import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./herosection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel showThumbs={false} centerMode={true} centerSlidePercentage={80}>
        <div style={{ margin: "0 50px 0 50px" }}>
          <img
            style={{ width: "100%", height: "300px" }}
            src="https://imgpile.com/images/9sOUJR.th.png"
            alt="Image 1"
          />
        </div>
        <div style={{ margin: "0 50px 0 50px" }}>
          <img
            style={{ width: "100%", height: "300px" }}
            src="https://imgpile.com/images/9sLreN.th.png"
            alt="Image 2"
          />
        </div>
        <div style={{ margin: "0 50px 0 50px" }}>
          <img
            style={{ width: "100%", height: "300px" }}
            src="https://imgpile.com/images/9sOwAg.th.png"
            alt="Image 3"
          />
        </div>
        {/* Add more images here */}
      </Carousel>
    </div>
  );
};

export default HeroSection;
