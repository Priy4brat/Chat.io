import mongoose from "mongoose"

export const connectDB = async () => { // it is used to connect to the database
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected : ${ conn.connection.host  }`); 
    } catch (error) {
        console.log(`MongoDB connection error : `,error);
    }

}