import React, { useState } from 'react';
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/database';




const Order = () => {
    const savedCart = useLoaderData();
    console.log(savedCart)
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) =>{
        let remaining = cart.filter(product=>product.id !== id);
        setCart(remaining)
        removeFromDb(id)
        console.log('console from Reviewitem')
    }
    const handleClearCart = () =>{
      setCart([]);
      deleteShoppingCart()
    }
    return (
        <>
           <div className="shop-container">
            <div className=''>
            <div className="review-container">
                {
                    cart.map(product=><ReviewItem 
                    key={product.id}
                    product = {product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    />)
                }
            </div>
            </div>
            <div className='cart-container'>
                <Cart 
                cart = {cart}
                handleClearCart={handleClearCart}
                />
                <Link to='/checkout'>
                  <button className='btn-proceed bg-gray-500 text-white p-2 px-4 rounded mb-6'>Proceed CheckOut</button>
                </Link>
            </div>
            </div>   
        </>
    );
};

export default Order;