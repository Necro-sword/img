import express from 'express'
import { registerUser, loginUser, userCredit } from '../controllers/userController.js'
<<<<<<< HEAD
import userAuth from '../middleware/auth.js'
=======

>>>>>>> 9ba7c15 (second commit)

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
<<<<<<< HEAD
userRouter.get('/credit', userAuth ,userCredit)
=======
userRouter.get('/credit', userCredit)
>>>>>>> 9ba7c15 (second commit)

export default userRouter;

