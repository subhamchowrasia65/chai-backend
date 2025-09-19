//connecting to the database in this folder and export to the main file ,so easy to debug.

import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";  // ✅ must include .js extension

const connectDB=async()=>{
    try {
        const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST:${connectioninstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error:",error);
        process.exit(1)
    }
}
export default connectDB