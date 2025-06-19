import mongoose from "mongoose";
import { DB_NAME  } from "../constants.js";
import dotenv from "dotenv";


const connectDB = async () => {
    try {
         const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

         console.log(`\n MongoDB Connected Sucessfully DB host : ${connection.connection.host}`);
         
    } catch (error) {
        console.log("MongoDB Connection Error :" , error)
        process.exit(1);
    }
}
export default connectDB;