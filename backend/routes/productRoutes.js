const express = require('express');


const router = express.Router();

const { getProducts,  getProductById ,postproduct } = require('../controller/productController');



// Get all the Product from the Database

//Route Get Api/Product

// Acess wold be public 

router.get("/", getProducts );

//by id nned to req.params.body or ID 
router.get("/:id", getProductById);

router.post('/',postproduct)
module.exports= router;