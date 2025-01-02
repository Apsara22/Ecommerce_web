import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.MONGODB_URI){
    throw new Error(
        "please provide in the .env file"
    )
}

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect DB")

    }
    catch(error){
        console.log("database error", error)
        process.exit(1)
    }

}

export default connectDB;