import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart} from '../../utilities/database';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    console.log(products)
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        let storedCart = getShoppingCart();
        let savedCart =[];
        for(const id in storedCart){
            const addedProduct = products.find(product=> product.id ===id);
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])

    
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
        
    }
    return (
        <>
            <div className="shop-container grid relative">
                <div >
                 
                 <div className="product-container">
                    {
                        products.map(product =><Product
                        key={product.id}
                        product = {product}
                        handleAddToCart={handleAddToCart}
                        />)
                    }
                 </div>
                </div>
                <div className="cart-container sticky top-0 h-96">
                    <Cart
                    cart = {cart}
                    />
                </div>
            </div>
        </>
    );
};

export default Shop;