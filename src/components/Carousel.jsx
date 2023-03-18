import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={handlePrev}>{"<"}</button>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            transform: `translateX(-${currentImage * 100}%)`,
            transition: "transform 0.5s",
          }}
        >
          {images.map((image, index) => (
            <div key={index} style={{ flex: "0 0 100%" }}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext}>{">"}</button>
    </div>
  );
};

export default Carousel;
