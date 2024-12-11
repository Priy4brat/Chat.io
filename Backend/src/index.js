import  express  from "express";
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
dotenv.config() // it will load the .env file into the process.env object
const PORT = process.env.PORT || 5002

app.use(cors({

    origin: "http://localhost:5173",
    credentials: true,
}))
 

app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));
// app.use(express.json()) // it will parse the incoming requests with JSON data
app.use(cookieParser()) // it will parse the incoming requests with cookies
app.use("/api/auth", authRoutes) // it will trigger to the routes folder 
app.use("/api/auth", messageRoutes)

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`); 
    connectDB();
    
})