import React from 'react';
import './Product.css'

const Product = (props) => {
   const {img,name,seller,price,ratings}= props.info
    return (
        <div className='product_container'>
            <img src={img} alt="" />
             <h4 className='product_name' >{name}</h4>
             <div className='product_info'>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star </p>
             </div>
             <button className='btn_cart'>Add to Cart</button>
        </div>
    );
};

export default Product;