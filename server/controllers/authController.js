import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req,res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body,password:hash})
        res.status(200).json('User sucessfully created')
       await newUser.save()
    } catch (error) {
        res.status(401).json(error)
    }
}

export const signin = async (req,res) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if(!user) return res.status(404).json('user not found')

        const isCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isCorrect) return res.status(401).json('Wrong Credentials')
        
      const token = jwt.sign({ id: user._id }, process.env.JWT);
      const { password, ...others } = user._doc;
      res
      .cookie("access_token", token, {
        httpOnly:true,
        sameSite: 'none',
        secure:true
      })
      .status(200)
      .json(others);
  } catch (error) {
        res.json(error)
    }
}

export const signout = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}