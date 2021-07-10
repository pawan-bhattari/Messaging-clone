import React from 'react'
import "./ProductScreen.css";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductDetails } from "../redux/action/productaction";
import { addToCart } from "../redux/action/cartAction";

const ProductScreen = ({ match , history }) => {
   

  const[qty , setQty] = useState(1);

   const dispatch = useDispatch();

   const productDetails = useSelector(state => state.getProductDetails);

  
// This one is the Error of the 
  const { loading, error, product } = productDetails;


  //  useEffect(()=>{

  //    if(product && match.params.id !== product._id){
  //      dispatch(getProductDetails(match.params.id))
  //    }

  //  },[dispatch, product, match]);

   useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);



   const addToCartHandler= () =>{

    dispatch(addToCart(product._id, qty));
    history.push('/cart');
   }

    return (
        <div className="productscreen">
            {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
 
            <>
        
        <div className="product__left">
            
            <img  src={product.imageurl} alt={product.name} />

            <div className="left__info">
              <p className="left__name"> {product.name} </p>
              <p className="left__pr"> ${product.price}</p>
              <p className="left__dr"> {product.description}</p>
            </div>

            </div>

            <div className="product__right">

                <div className="right__info">

                  <p> Price:<span> ${product.price} </span> </p>
                  <p>Status: <span> {product.countInstock > 0 ? "In stock": "out of stock"} </span> </p>
                  <p> Quality:
                    
                 <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                   {[...Array(product.countInstock).keys()].map((x)=>(

                     <option key={x+1} value={x+1}> {x+1} </option>
                   ))}
                      
                      </select> </p>
                  <p> <button type="button" onClick={addToCartHandler} >Add To Cart</button> </p>
                </div>

          </div>


            </>





            ) }
        
        </div>

    )
}

export default ProductScreen
