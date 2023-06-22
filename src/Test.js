import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <img src={images[currentIndex]} alt="Slideshow" style={{ maxWidth: '300px' }} />
      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

// Usage example
const App = () => {
    const images = [
        "https://nmdinteriors.com/images/projects/Mr%20Phatak/1.JPG",
        "https://nmdinteriors.com/images/projects/Mr%20Phatak/2.JPG",
        "https://nmdinteriors.com/images/projects/Mr%20Phatak/3.JPG",
        // Add more image URLs as needed
    ];

  return (
    <div>
      <h1>Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;
