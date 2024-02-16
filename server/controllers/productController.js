import Products from '../models/Products.js'


// Get Products

export const GetProducts = async (req,res) => {
    
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json('something went wrong')
    }
}

// Get Product by params

export const GetOneProduct = async (req,res) => {
    try {
        const product = await Products.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        
    }
}

// Get product by category

export const CategoryProduct = async (req,res) => {
    const categories = req.query.category.split(',')
    try {
        const productbycategory = await Products.find({categories: {$in : categories}}).limit(20);
        res.status(200).json(productbycategory);
    } catch (error) {
        res.status(404).json('No such category')
    }
}



// Post Product listing

export const CreateProduct = async () => {
    try {
        
    } catch (error) {
        
    }
}


// Put update product listing

export const UpdateProduct = async () => {
    try {
        
    } catch (error) {
        
    }
}
