import React from 'react';
import { FaBeer, FaCartPlus } from 'react-icons/fa';

const Product = ({product,handleAddToCart}) => {
    const {name, id ,price,seller,ratings,img,} = product
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl mt-6 ml-6">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body relative">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className=" justify-start mb-9">
      <div className="">Price: $ {price}</div> 
      <div className="">Company: {seller}</div>
      <div className="">Rating: {ratings}</div>
    </div>
    <div className='text-center absolute bottom-0 right-28 '>
    <button onClick={() => handleAddToCart(product)} className='bg-green-500 rounded px-12 py-2 mb-1 flex items-center '>
        <p>Add to Cart</p>   <FaCartPlus className='ml-3 text-white' />
    </button>
   
    </div>
  </div>
</div>
        </>
    );
};

export default Product;