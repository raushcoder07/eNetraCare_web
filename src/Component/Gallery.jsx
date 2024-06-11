import React from 'react';

const images = [
  'url1.jpg',
  'url2.jpg',
  'url3.jpg',
  'url4.jpg',
  // Add more image URLs as needed
];

const Gallery = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {images.map((url, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <img src={url} alt={`Gallery Image ${index + 1}`} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
