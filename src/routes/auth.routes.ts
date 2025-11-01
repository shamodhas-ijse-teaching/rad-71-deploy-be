import { Router } from "express"
import {
  getMyDetails,
  login,
  register,
  registerAdmin
} from "../controllers/auth.controller"
import { authenticate } from "../middleware/auth"

const router = Router()

router.post("/register", register)
router.post("/login", login)

// protected (USER, AUTHOR, ADMIN)
router.get("/me", authenticate, getMyDetails)

// protected
// ADMIN only 
// need create middleware for check req is from ADMIN
router.post("/admin/register", authenticate, registerAdmin)

export default router
