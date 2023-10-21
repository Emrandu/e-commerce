import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    let totalPrice = 0;
    let totalShipping =  0;
    for (const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity
    }
    const tax = totalPrice * 7 / 100;
    const total = totalPrice + totalShipping + tax;
    return (
        <>
           <div className='text-center mt-4 font-bold text-2xl text-white mb-5'>
            <h2>Order Summary</h2>
            </div> 
            <div className='text-white'>
              <h4 className='mb-2'>Selected Items: {cart.length}</h4>
              <h4 className='mb-2'>Total Prize :{totalPrice}</h4>
              <h4 className='mb-2'>Total Shipping :{totalShipping}</h4>
              <h4 className='mb-2'>Tax :{tax} </h4>

            </div> 
            <h1 className='text-yellow-800 font-bold mt-6 text-center text-xl'>Grand Total: $ {total}</h1>    
        </>
    );
};

export default Cart;