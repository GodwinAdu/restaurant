import { Schema, model, models } from "mongoose";


const CategorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    imageUrl:String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
})


const Category = models.Category || model("Category",CategorySchema);

export default Category;