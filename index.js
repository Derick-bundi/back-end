const express = require('express');
const app = express();
const path = require("path");
const mongoose  = require('mongoose');
const Product = require('./models/products');


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('Connection open to MongoDB')
    })
    .catch(err => {
        console.log('There is an error:')
        console.log(err)
    })

app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => { 
    const products = await Product.find({});
    res.render('products/index', { products });
});


app.get('/products', async (req, res) => { 
    const products = await Product.find({});
    res.render('products/index', { products });
});








// Start server
app.listen(3000, () => {
    console.log('App is listening on port 3000')
});
