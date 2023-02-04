const mongoose = require("mongoose")

const connectDb = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log(`Mongo Db connected ${conn}`);
    }catch(err){
        console.log(`Error : ${err}`);
    }
}

module.exports = connectDb;