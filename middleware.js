const express = require("express")
const app = express()
const morgan = require("morgan")


app.use(morgan('dev'))

app.use((req, res, next) => {
    // req.method = "GET"
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path);
    next();
})
 
app.use("/derick", (req, res, next) => { 
    res.send('my name is derick bundi');
    next();
})


// app.use((req, res, next) => { 
//     console.log("this is my firt middleware")
//     return next()
//     // console.log('this is mu f middleware after next ')
// })

// app.use((req, res, next) => { 
//     console.log('this is my second ')
//     return next()
// })

app.get("/", (req, res) => {
    res.send("HOME-PAGE!!")
})

app.get("/dogs", (req, res) => {
 console.log(`the date is ${req.requestTime}`)
 res.send( 'woof woof' )
})


app.use((req,res) => { 
    res.status(404).send("404-not-found")
})



app.listen(3000, ()=> {
    console.log("app is running on localhost:3000")
})