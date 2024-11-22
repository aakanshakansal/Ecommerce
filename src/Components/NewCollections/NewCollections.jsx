import React, {useState, useEffect} from 'react'
import './NewCollections.css'
import new_collection from '../Assets/Frontend_Assets/new_collections'
import Item from '../Item/Item';
import new_collections from './../Assets/Frontend_Assets/new_collections';

const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('https://shopping-yc6u.onrender.com/newcollections')
      .then((response)=>response.json())
      .then((data)=>setNew_collection(data))
  },[])
  



  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr/>
        <div className='collections'>
          {new_collection.map((item,i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
    
    </div>
  )
}

export default NewCollections
