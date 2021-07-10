require('dotenv').config();
const mongoose = require ('mongoose')


const connectDB = async() =>{

 
    const db =`mongodb+srv://shopping123:shopping123@cluster0.yj9hx.mongodb.net/shop?retryWrites=true&w=majority`
    try {
 
         await mongoose.connect(db,{

            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:true,
         })
         console.log('Mogodb connect sucessfully')

    }
    catch(error){
 
        console.log("MongoDB connection FAIL")
        process.exit(1);
 
    }
}

module.exports = connectDB;