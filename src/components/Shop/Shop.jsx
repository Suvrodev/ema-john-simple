import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='ShopContent' >
            <div className="Product_Container">
                <h2>Product Coming Here: {products.length}</h2>
            </div>

            <div className="Cart_Container">
                <h4>Order Summery</h4>
            </div>
            
        </div>
       
    );
};

export default Shop;