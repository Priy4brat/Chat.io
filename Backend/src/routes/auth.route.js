import express from "express";
import { login, logout, signup, updateProfilePic, checkAuth} from "../controllers/auth.controller.js"; // .js extension is mandagtory otherwise it will crash in type = module 
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router()

router.post("/signup", signup) // it will trigger to the controllers 
router.post("/login", login)
router.post("/logout", logout)
router.put("/update-profile", protectRoute, updateProfilePic)
router.get("/check", protectRoute, checkAuth)

export default router