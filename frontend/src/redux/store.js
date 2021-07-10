import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from 'redux-thunk';

import { composeWithDevTools }  from "redux-devtools-extension";

import {cartReducer} from "./reducers/cartReducer"

import { getproductreducer , getProductsDetailsReducer } from "./reducers/productReducer"
// import { getProductsDetails } from "./action/productaction";

const reducer = combineReducers({
     cart:cartReducer,
     getProducts:getproductreducer,
     getProductDetails:getProductsDetailsReducer,
     
     
})


const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};



const store = createStore(

     reducer ,
     INITIAL_STATE,
     composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
