import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
                {
                    products.map(product=> <Product 
                        key={product.id}
                        info={product}
                        ></Product> )
                }
            </div>

            <div className="Cart_Container">
                <h4>Order Summery</h4>
            </div>
            
        </div>
       
    );
};

export default Shop;