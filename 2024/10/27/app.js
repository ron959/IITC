console.log('hello, node');


const express = require('express')
const app= express();

app.get('/', (req, res) => res.send('api פועל'))