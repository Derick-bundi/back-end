const mongoose = require('mongoose')
 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
       lowercase: true,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    category: {
        type: String,
        lowercase:true,
        // enum: ['fruit', 'vegatable', 'dairy']
            enum: ['fruit', 'vegetable', 'dairy']  // only these values are allowed
    },
    
})


const Product = mongoose.model('Products', productSchema);

module.exports = Product;