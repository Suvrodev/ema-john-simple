import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {
    const [products,setProducts]=useState([])
  


    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const [cart,setCart]=useState([])
    const handleAddToCart=(product)=>{
        //console.log('Product Added: '+props.name)
        const newCart=[...cart,product]
        setCart(newCart)
    }

    return (
        <div className='ShopContent' >
            <div className="Product_Container">
                {
                    products.map(product=> <Product 
                        key={product.id}
                        info={product}
                        handleAddToCart={handleAddToCart}
                        ></Product> )
                }
            </div>

            <div className="Cart_Container">
               <Cart cart={cart} ></Cart>
            </div>
            
        </div>
       
    );
};

export default Shop;