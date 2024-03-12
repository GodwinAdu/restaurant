import { Schema, model, models } from "mongoose";


const ProductSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    price:Number,
    ingredients:[String],
    dietaryInfo: String,
    imageUrl:{
        type:String,
        require:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }

})

const Product = models.Product || model("Product",ProductSchema);

export default Product;