import React from 'react';
import './Cart.css';

const Cart = (props) => {
     const {cart}=props
    // console.log(cart)
    // const price=props.cart.price;

    let Total=0;
    let Total_Shipping=0;
    let quantity=0;

    for(const product of props.cart){
       
        if(product.quantity===0){
            product.quantity=1;
        }
        
        Total_Shipping=Total_Shipping+product.shipping;
        quantity= quantity + product.quantity;
        Total=Total+ product.price*product.quantity;
    }

    const Tax= (Total*7)/100
    const Grand_Total= Total+ Total_Shipping+Tax;
    return (
        <div className='cart'>
             <h4>Order Summery</h4>
             <p>Selected Item: {quantity} </p>
             <p>Total Price:$ {Total} </p>
             <p>Total Shipping: ${Total_Shipping} </p>
             <p>Tax: ${Tax.toFixed(2)} </p>
             <h6>Grand Total:$ {Grand_Total} </h6> 
        </div>
    );
};

export default Cart;