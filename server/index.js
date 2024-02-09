import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './connectDb.js';
import ProductsRoute from './routes/products.js'
dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())
connectDB();

//Routes
app.use('/api/',ProductsRoute)

app.listen(PORT,() => {
    console.log(`Listening to Port : ${PORT}`)
})