import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom"
// import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import Avatar from '@material-ui/core/Avatar';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import "./Header.css";

import { useSelector } from "react-redux";


function Header() {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };


    return (
        <div className="header">
    
      <img className="header__icon"
            src="data:image/jpeg;base64,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" alt="photo__image" />  
        
        <div className="header__center">

        <input type="text" />
    
       <SearchIcon/>
        </div>
       
       <div className="header__right"> 
         
         
         <Link to= "/cart">  <IconButton> <AddShoppingCartIcon/> <span>{getCartCount()}</span> </IconButton>       </Link>
     
         <Link to ="/" > <IconButton>  <HomeIcon/> </IconButton>   </Link>

         <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQE68-rn298KEA/profile-displayphoto-shrink_800_800/0/1604587122402?e=1630540800&v=beta&t=t5T7jQEJsLq7PSNvOAvj347uitu0Wkw9a9Rd3qBcWKg"/>

         {/* <Link to ="/add" > <IconButton>  <MenuIcon/> </IconButton>   </Link> */}
{/* 
         <IconButton> <AddShoppingCartIcon/> </IconButton> 
         <IconButton>  <LockOpenRoundedIcon/> </IconButton>  */}
        
        {/* <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQE68-rn298KEA/profile-displayphoto-shrink_800_800/0/1604587122402?e=1630540800&v=beta&t=t5T7jQEJsLq7PSNvOAvj347uitu0Wkw9a9Rd3qBcWKg"/> */}

       </div>

      
        </div>

    )
}

export default Header
