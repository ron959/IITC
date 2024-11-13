const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

res.get('/api/users', (req, res) => {
    res.send
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});