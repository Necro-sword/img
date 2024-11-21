import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'missing details' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password : hashedPassword
        }

        const newUsser = new userModel(userData)
        const user = await newUsser.save()
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        
<<<<<<< HEAD
        res.json({ success: true, token, name: { name: user.name } })
=======
        res.json({ success: true, token, name:user.name })
>>>>>>> 9ba7c15 (second commit)

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "user not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        
<<<<<<< HEAD
            res.json({ success: true, token, name: { name: user.name } })
=======
            res.json({ success: true, token, name:user.name })
>>>>>>> 9ba7c15 (second commit)

        } else {
            return res.json({ success: false, message: "password is incorrect" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
const userCredit = async (req, res) => {
    try {
        const { userId } = req.body
        const user = await userModel.findById(userId)
        res.json({succecc:true , credits : user.credit , user : {name : user.name}})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
export { registerUser, loginUser ,userCredit};
