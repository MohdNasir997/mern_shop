import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = Schema({
    userId: {
        type : String,
    },
    OrderDetails:{
        productId:{
            type:String
        },
        Quantity:{
            type:Number
        }
    },
    total:{
        type:Number
    },
    OrderAt:{
        type:Date,
        default:Date.now()
    }
})

export default mongoose.model("Orders",OrderSchema)