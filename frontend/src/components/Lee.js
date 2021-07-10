import React from 'react'
import "./Card.css"
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


const Lee = ({  item, qtyChangeHandler, removeHandler  }) => {
  return (
    <div className="carditem">
    
      <img src= {item.imageurl}  alt={item.name}/>   

     <Link to={`/product/${item.product}`} className="carditem__name">
     
      <p> {item.name}</p>
     </Link>

     <p className="carditem__price"> ${item.price}</p>

     <select value={item.qty}
     onChange={(e) => qtyChangeHandler(item.product, e.target.value)}   
     className="carditem__select">
      
      {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
     </select>

    <IconButton> <DeleteIcon   onClick={() => removeHandler(item.product)} /> </IconButton>
    </div>
  )
}

export default Lee;





