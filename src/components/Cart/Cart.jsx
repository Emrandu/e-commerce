import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Cart = ({cart,handleClearCart}) => {
    console.log(cart)
    let totalPrice = 0;
    let totalShipping =  0;
    let totalQuantity = 0;
    for (const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const total = totalPrice + totalShipping + tax;
    return (
        <>
           <div className='text-center mt-4 font-bold text-2xl text-white mb-5'>
            <h2>Order Summary</h2>
            </div> 
            <div className='text-white'>
              <h4 className='mb-2'>Selected Items: {totalQuantity }</h4>
              <h4 className='mb-2'>Total Prize : $ {totalPrice}</h4>
              <h4 className='mb-2'>Total Shipping : $  {totalShipping}</h4>
              <h4 className='mb-2'>Tax : $ {tax} </h4>

            </div> 
            <h1 className='text-yellow-800 font-bold mt-6 text-center text-xl'>Grand Total: $ {total}</h1> 

            <button onClick={handleClearCart} className='btn-proceed flex items-center bg-gray-500 text-white p-2 px-4 gap-2 rounded mt-4'>Remove Cart  <FontAwesomeIcon icon= {faTrashAlt} /> </button> <br />
               
        </>
    );
};

export default Cart;