// ImageGallery.js

import React from "react";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img
            src={image.url}
            alt={`Image ${index + 1}`}
            onClick={() => onImageClick(image.label)}
          />
          <span>{image.label}</span>
          <br />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
