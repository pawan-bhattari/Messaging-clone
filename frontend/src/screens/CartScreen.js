import React from 'react'
import "./CartScreen.css"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart, removeFromCart  } from "../redux/action/cartAction"
import { Link } from "react-router-dom";
import   Lee from "../components/Lee"

const CartScreen = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  console.log(cart, "This is the cart section")

  const { cartItems  } = cart ;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };


  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };



  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => price + item.price * item.qty, 0) .toFixed(2);
  };
    
    return (
      <>
        <div className="cartscreen">
            
            <div className="cart__left">
              <h2> Shopping Cart </h2>
              
         

              {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <Lee
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
           
            </div>

            <div className="cart__right">

           <div className="cart__info">
             <p> Subtotal ({getCartCount()}) items</p>
             <p> ${getCartSubTotal()}</p>
            </div>
            <button>  Proceed To CheckOut </button>
            </div>
        </div>
        </>
    )
}

export default CartScreen
