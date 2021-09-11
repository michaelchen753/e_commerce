import React from 'react'
import './CollectionItem.scss';

const CollectionItem = ({item}) => {
  const { id, imageUrl, name, price } = item;
  return (
    <div key={id}
      className='collection-item'>
      <div
        className='collection-item-image'
        style={{
          backgroundImage:`url(${imageUrl})`
        }}
      />
      <div className='collection-item-footer'>
        <span className='collection-item-footer-name'>{name} </span>
        <span className='collection-item-footer-price'>{price} </span>
      </div>
    </div>
  )
};

export default CollectionItem;