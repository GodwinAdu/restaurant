import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    clerkId: String,
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
            itemType: {
                type: String,
                default: "default"
            },
            color: {
                type: String,
                default: "default"
            },
            size: {
                type: String,
                default: "default"
            },
            quantity: Number,
        },
    ],
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    shippingRate: String,
    totalAmount: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }

})

const Order = models.Order || model("Order", OrderSchema);

export default Order