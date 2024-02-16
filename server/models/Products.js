import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = Schema({
    title:{
        type:String
    },
    Vendor:{
        type:String
    },
    price:{
        type:Number
    },
    isFresh:{
        type:Boolean
    },
    oldPrice:{
        type:Number
    },
    img:{
        type:String
    },
    desc:{
        type:String
    },
    categories:{
        type:[String]
    }
})

export default mongoose.model("Products",ProductSchema)