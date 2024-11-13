const express= require('express')

 
const {add, sub, multiply, devide} = require("./module.js")


const app= express()

app.get('/', (req, res) => {
    res.send('hello world!')
})

const PORT= 3000;










console.log(add(5, 3)); 

console.log(sub(5, 3));

console.log(multiply(5, 3));

console.log(devide(6, 3));


app.listen(PORT, () => console.log(`server is running ${PORT}`))
