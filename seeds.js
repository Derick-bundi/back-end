const mongoose = require('mongoose')
const Product = require('./models/products');
const express = require('express');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('Connection open to MongoDB')
    })
    .catch(err => {
        console.log('There is an error:')
        console.log(err)
    })




// const pro = new Product({
//     name: 'ruby grae fruit',
//     price: 1.99,
//     category: fruit
// })

// pro.save()
//     .then(pro => {
//         console.log(pro)
//     })
//     .catch(e =>{
//         console.log(e)
//     })


// // const veggie = new Product({

//     name: cucumber,
//     category: fruit,
//     price:7.99

// })

// veggie.save()
//     .then(veggie => {
//         consolole.log(veggie)
//     })



const seedProducts = [
    {
        name: "Apple",
        price: 1.2,
        category: "fruit"
    },
    {
        name: "Banana",
        price: 1,
        category: "fruit"
    },
    {
        name: "Carrot",
        price: 1,
        category: "vegetable"
    },
    {
        name: "Spinach",
        price: 1.,
        category: "vegetable"
    },
    {
        name: "Milk",
        price: 1.5,
        category: "dairy"
    },
    {
        name: "Cheese",
        price: 2.5,
        category: "dairy"
    },
    {
        name: "Orange",
        price: 1.1,
        category: "fruit"
    },
    {
        name: "Potato",
        price: 0.7,
        category: "vegetable"
    },
    {
        name: "Yogurt",
        price: 1.8,
        category: "dairy"
    },
    {
        name: "Broccoli",
        price: 1.3,
        category: "vegetable"
    }
];

Product.insertMany(seedProducts)
    .then(ress => { 
        console.log(ress)
    }).catch(e => { 
        console.log(e)
    })