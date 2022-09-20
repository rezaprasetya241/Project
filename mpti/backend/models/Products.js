import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: String,
    image: String,
    priceMl: Number,
    descripsi: String,
    stokMl: Number,
    urlPic: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const ProductMessage = mongoose.model('ProductMessage', productSchema)

export default ProductMessage