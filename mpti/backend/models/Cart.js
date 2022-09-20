import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    
    titleParfum: String,
    urlParfum: String,
    sumParfum: String,
    priceParfum: String,
    ProductId: String,
    UserId: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const CartMessage = mongoose.model('CartMessage', cartSchema)

export default CartMessage