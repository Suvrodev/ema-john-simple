import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props)
   const {img,name,seller,price,ratings}= props.info
   const handleAddToCart=props.handleAddToCart;

  
    return (
        <div className='product_container'>
            <img src={img} alt="" />
             <h4 className='product_name' >{name}</h4>
             <div className='product_info'>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star </p>
             </div>
             <button onClick={()=> handleAddToCart(props.info)} className='btn_cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;