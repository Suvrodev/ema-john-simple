import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../Copy/utilities/fakedb';
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
        addToDb(product.id)
    }

   useEffect(()=>{
     const StoredCart=getShoppingCart()
     const SavedCart=[];

     for(const id in StoredCart){
        const addedProduct=products.find(product=>product.id===id)
        if(addedProduct){
            const quantity=StoredCart[id]
            addedProduct.quantity=quantity;
            SavedCart.push(addedProduct)
        }
       // console.log("Added Product: ",addedProduct)
     }

     setCart(SavedCart)
   },[products])

    return (
        // <div>
        //      <div className='Checkdiv'> This is Check MArgin </div>
        // </div>
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