import { Router } from "express";
import { checkUser, getUser } from "../controllers/AuthController.js";


const router =Router()

router.post("/check-user",checkUser)
router.get("/check-user",getUser)


export default router