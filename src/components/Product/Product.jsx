import React from 'react';
import './Product.css'

const Product = (props) => {
   const {img,name,seller,quantity}= props.info
    return (
        <div className='product_container'>
            <img src={img} alt="" />
             <h4>{name}</h4>
        </div>
    );
};

export default Product;