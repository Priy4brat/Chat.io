import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        // console.log("jwt :",jwt);
        
        if(!token) res.status(401).json({message: "Unauthorised - No token Provided"})
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded) res.status(401).json({message: "Unauthorised - Invalid token"})

        const user = await User.findById(decoded.userId).select("-password")
        if(!user) res.status(401).json({message: "User Not Found"})

        req.user = user 

        next()
        
    } catch (error) {
        console.log("Error in protectroute middleware : ",error.message);
        res.status(500).json("Internal server error")   
    }

}