import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
    },
    password:{
        type: String,
        required: true
    },
    Img:{
        type: String,
    },
    Orders:{
        type: [String]
    }
})

export default mongoose.model("User",UserSchema)