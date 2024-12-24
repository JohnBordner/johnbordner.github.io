// ImageContainer.tsx
import React from "react";
import "./ImageContainer.css";

interface ImageContainerProps {
  src: string;
  alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="ImageContainer" />
    </div>
  );
};

export default ImageContainer;
