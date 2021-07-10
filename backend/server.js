const express = require ('express')
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const path = require('path')
require ('dotenv').config();

connectDB();

const app = express();

app.use(express.json());



app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });
  
  app.use("/api/products", productRoutes);


  app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })

//  Server Static assests if in production


if(process.env.NODE_ENV === 'production'){

  // set static folder 

  app.use(express.static('frontend/build'));

  app.get("*",(req,res)=>{
    
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
     
  //   // "proxy":"http://0.0.0.0:8000",
  })
}

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))