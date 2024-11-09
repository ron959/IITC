import express from 'express'
import morgan from 'morgan'; 

import jokes from './db/jokes.json' assert { type: 'json' };

import products from './db/products.json' assert { type: 'json' };





const app = express()

const PORT = 3000

app.use(express.json());
app.use(morgan("short")); //check what it do

app.get('/api/status', (req, res) => {
    res.send({status: 'Server is running'})
})

//get random joke
app.get('/api/joke/random', (req, res) => {
    const randomJoke= jokes[Math.floor(Math.random()*jokes.length)]
    res.send(randomJoke)
})

// get filtered by id
app.get('/api/joke/:id', (req, res) => {
    const jokeId = +(req.params.id); // Get the 'id' from the URL parameter and convert it to a number
    const joke = jokes.find(j => j.id === jokeId); // Search the 'jokes' array for a joke with the matching 'id'
    
    if (joke) {
        res.send(joke); // If the joke is found, return it
    } else {
        res.send({ message: 'Joke not found' }); // If not found, return a 404 status with an error message
    }
});


//get random product 
app.get('/api/products/random', (req, res) => {
    const randomproduct= products[Math.floor(Math.random()*products.length)]
    res.send(randomproduct)
})

//get product filtered by id
app.get('/api/products/:id', (req, res) =>{
    const productId= +(req.params.id)
    const product= products.find(p => p.id === productId)
    if(product){
        res.send(product)
    }else{
        res.send({message: 'product not found'})
    }
})

//patch product
app.patch('/api/products/')

//post new joke
app.post('/api/joke/random', (req, res) => {
    const newJoke = req.body;
    jokes.push(newJoke);
    res.send({
        message: "New joke added",
        joke: newJoke
    });
});

//post new product
app.post('/api/product/random', (req, res) => {
    const newProd = req.body; // Retrieve the new product object from the request body
    products.push(newProd);   // Add the new product to the products array
    // Send a response with a success message and the new product details
    res.send({
        message: "New product added",
        product: newProd
    });
});



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
