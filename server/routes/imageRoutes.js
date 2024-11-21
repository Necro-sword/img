import express from 'express'
import { generateImage } from '../controllers/imageController.js'
<<<<<<< HEAD
import userAuth from '../middleware/auth.js'

const imageRouter = express.Router()

imageRouter.post('/generate-image', userAuth, generateImage)
=======


const imageRouter = express.Router()

imageRouter.post('/generate-image', generateImage)
>>>>>>> 9ba7c15 (second commit)

export default imageRouter;