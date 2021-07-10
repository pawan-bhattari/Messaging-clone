import React from 'react'
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import "./HomeScreen.css";

//Slider 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Product page 
import Product from "../components/Product";

// Actions

import { getProducts as listProducts } from "../redux/action/productaction"


const HomeScreen = () => {


   const dispatch = useDispatch();
  
    const getProducts = useSelector((state) => state.getProducts)

    const {products , loading , error} = getProducts;
    
    console.log(getProducts.products,"this is the products")

      
      useEffect(()=>{

        dispatch(listProducts());
     },[dispatch]);

     
    return (
        <div className="homescreen">
 
      <Carousel className="cooo">
                <div className="slider">
                    <img className="image__1" src="https://cdn.shopify.com/s/files/1/0366/0962/2154/products/1213362.1_1500x.jpg?v=1598589197" />
                  
                </div>
                <div>
                    <img className="image__1" src="https://i.insider.com/555310515afbd3600f8b4567?width=500" />
                   
                </div>
                <div>
                    <img className="image__1" src="https://lh3.googleusercontent.com/proxy/FBPy0OkLAp9psVv5FkVaU9UnscBQs2xReGTGS43FIPQEOzS2Xmajey9NElvO1SAIIUaavho2kIKrAxENGlPWZhsod_xywDyoEjHdKCVG8-ekvw" />
                   
                </div>
     </Carousel>


        <div className="homescreen__title"> Popular Burmese Ruby</div> 


        <div className="homescreen__products"> 
        
        
        { loading ? <h2> Loading.... </h2> : error ? <h2> {error} </h2> : products.map(product=> ( <Product  
           key={product._id}
           productID ={product._id}
           name= {product.name}
           price = {product.price}
           description = {product.description}
           imageUrl = {product.imageurl}
        
        />))}
      
       
  
         </div>
        


        </div>
    )
}

export default HomeScreen
