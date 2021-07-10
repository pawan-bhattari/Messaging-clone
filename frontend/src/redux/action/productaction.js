import * as actionTypes from "../constants/Productcon";
import axios from 'axios';


export const getProducts= () => async (dispatch) =>{

   try{
  
     dispatch({type:actionTypes.GET_PRODUCTS_REQUEST});

     const { data } = await axios.get("/api/products")

     dispatch({
         type:actionTypes.GET_PRODUCTS_SUCESS,
         payload: data,
     });

   }catch(error){
 
     dispatch({
         type:actionTypes.GET_PRODUCTS_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message:error.message,
     });

   }

   
};

export const getProductDetails= (id) => async (dispatch) =>{

    try{
   
      dispatch({type:actionTypes.GET_PRODUCTS_DETAILS_REQUEST});
 
      const { data } = await axios.get(`/api/products/${id}`)
 
      dispatch({
          type:actionTypes.GET_PRODUCTS_DETAILS_SUCESS,
          payload: data,
      });
 
    }catch(error){
  
      dispatch({
          type:actionTypes.GET_PRODUCTS_DETAILS_FAIL,
          payload: error.response && error.response.data.message ? error.response.data.message:error.message,
      });
 
    }
 
    
 };
 


 export const removeProductDetails = () => (dispatch) =>{

    dispatch({
        type:actionTypes.GET_PRODUCTS_DETAILS_RESET
    });
 }