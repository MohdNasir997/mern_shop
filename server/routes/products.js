import express from 'express'
import { CategoryProduct, GetOneProduct, GetProducts } from '../controllers/productController.js';

const router = express.Router();

// search for individual from unique id 

router.get('/product/:id',GetOneProduct)

// search all products 

router.get('/products',GetProducts)

// search all products by category

router.get('/products/category',CategoryProduct)

// add a Product
router.post('/add/product')
// update a listing
router.put('/product/:id/update')

export default router