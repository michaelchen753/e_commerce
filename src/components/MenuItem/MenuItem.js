import React from 'react';

const MenuItem = ({
  id,
  title,
  imageUrl,
  size,
  linkUrl
}) => {
  return (
    <div      
      className={`menu-item ${size}`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }} 
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>  
      </div>
    </div>
  )
};

export default MenuItem;