import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    console.log(product)
    const {img,name,id,price,quantity} = product;
    return (
        <>
          <div className='ml-96 mr-96 border-2 mt-9'>
          <div className='flex items-center justify-center'>
              <img className='w-24' src={img} alt="" />
              <div className='flex-grow ml-9'>
                <p>{name}</p>
                <p>Price : {price}</p>
                <p>Quantity :{quantity}</p>
              </div>
              <button onClick={()=>handleRemoveFromCart(id)} className='bg-gray-500 text-white p-2 px-4 rounded mr-4 '> <FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>  
          </div>
        </>
    );
};

export default ReviewItem;