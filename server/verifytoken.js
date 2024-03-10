import jwt from "jsonwebtoken";

export const verifytoken = (req,res,next) => {
    token = req.cookies.access_token;

    if(!token) return res.status(401).json('Please sign in')

    jwt.verify(token,process.env.JWT,(err,user) => {
        if(err) return res.status(403).json('Invalid token')

        req.user = user;
        next()
    })
}