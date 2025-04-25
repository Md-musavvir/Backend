import dotenv from "dotenv";
import mongoose, { Mongoose } from "mongoose";

import { DB_NAME } from "../constants.js";
dotenv.config();
const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`database connected at ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("database connection failed!!!", error);
    process.exit(1);
  }
};
export default connectDb;
