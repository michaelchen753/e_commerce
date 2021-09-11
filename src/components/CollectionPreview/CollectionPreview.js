import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';
const CollectionPreview = ({
  title,
  items
}) => {
  return (
    <div className='collection_preview'>
      <h1 className='collection_preview_title'>{title}</h1>
      <div className='collection_preview_items'>
        {items
          .slice(0,4)
          .map((item) => {            
              return (
               <CollectionItem item={item} />
              )
          })}
      </div>
    </div>
  )
};

export default CollectionPreview;