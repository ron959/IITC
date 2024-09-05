const express= require("express");
const app=express()
const port= 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });

app.get('/', (req, res) => {
    res.send('Welcome to my basic Express server!')})

app.get('/about', (req, res) => {
  res.send('this server made by Ron')})

const info ={
  email: "ronmail@gmail.com",
  phone: "0586818445",
}
app.get('/contact', (req, res) => {
  res.json(info)})
  
const products=[
  {id: 1, name: "phone", price: 2000},
  {id: 2, name: "airphone", price: 1000},
  {id: 3, name: "screen", price: 3000},
]
app.get('/api/products', (req, res) => {
  res.json(products)})

  app.get('/api/products/:productId', (req, res) => {
    const productId = req.params.productId;    let idNum = null;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) idNum = products[i];
    }
    if (products[i].id= null) res.send("id not found");
    else res.json(idNum)})