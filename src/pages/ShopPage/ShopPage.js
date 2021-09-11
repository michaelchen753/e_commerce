import React,{
  useState
} from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import SHOP_DATA from '../../shop_data';
export default function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);
    
  return (
        <div className='shop_page'>
          {collections.map((collection) => {
            return (
              <CollectionPreview
                key={collection.id}
                id={collection.id}
                title={collection.title} 
                items={collection.items}/>
            )
          })}
        </div>
    )
}
