import React from 'react';
import './_ImageBox.scss';

export const ImageBox = ({ width, height, url, alt }) => {
  const imgStyle = {
    width: width,
    height: height,
  };

  return (
    <div className='img-wrap' style={imgStyle}>
      <img src={url} alt={alt} />
    </div>
  );
};
