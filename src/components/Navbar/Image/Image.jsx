import React from 'react'
import './Image.css';

export default function Image(props) {
  const { imgSrc, alt, ...others } = props;
  return (
    <div className="img-div">
      <img src={imgSrc} alt={alt} {...others} />
    </div>
  )
}
