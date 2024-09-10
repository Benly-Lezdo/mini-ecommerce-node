const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    ratings: String,
    images: [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: String,
    numOfReviews: String,
    created_at: Date,
})

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel