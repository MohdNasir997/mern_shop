import express from 'express'
import { register, signin } from '../controllers/authController.js'

const router = express.Router()
// sign in
router.post('/signin',signin)
// sign-out
router.get('/signout')
//register
router.post('/register',register)

export default router