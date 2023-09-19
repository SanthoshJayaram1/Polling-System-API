import mongoose from "mongoose";
import dotenv from "dotenv";

//env config and env variables
dotenv.config();
const url = process.env.URI;

const connectWithDb = () => {
    try{
        // connect to mongoose
        mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Database connected successfully");
    }catch(err){
        console.log("Error while comnnecting to the database",err);
    }
};

export default connectWithDb;
