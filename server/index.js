import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './connectDb.js';
import ProductsRoute from './routes/products.js'
import AuthRoute from './routes/auth.js'
dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({origin:process.env.CLIENT,credentials:true,}))
connectDB();

//Routes
app.use('/api/',ProductsRoute)
app.use('/api/user/',AuthRoute)

app.listen(PORT,() => {
    console.log(`Listening to Port : ${PORT}`)
})