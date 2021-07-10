const Product = require('../models/Product');


const getProducts = async (req,res) =>{

    // Get   from DB 
    // Post  to DB
    // Delete at DB
    //  Update at server  
 try{ 
     const products = await Product.find({});
 
     res.json(products);
 }
 catch(error){
    console.log(error);
    res.status(500).json({message:"server"})
 }

}

const  getProductById = async (req,res) =>{

    try{
        const product = await Product.findById(req.params.id);
    
        res.json(product);
    }
    catch(error){
       console.log(error);
       res.status(500).json({message:"server Error"})
    }
   
   }


   const postproduct = async (req,res)=>{
  
         

    try{
         
        const product = new Product(req.body);

       res.save(product);
    }catch(error){
 
        res.status(500).json({message:"server Error"})
    }  

    
   }





module.exports={
    getProducts,
    getProductById,
    postproduct,
}