require('dotenv').config();
const express = require('express');
controller = require('./controller')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()

app.use(express.json());

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
        console.log('database is connected');
    })
    .catch(err => console.log(err));
    
    // ENDPOINTS
    app.get('/api/inventory', controller.getProducts)
    app.get('/api/product/:id', controller.getProduct);
    app.post('/api/product', controller.addProduct);
    // app.delete('/api/product/:id', controller.deleteProduct);
    // app.put('/api/product/:id', controller.editProduct);
    
    
    app.listen(SERVER_PORT, () =>
        console.log(`Congrats!  Your Simulation server is running on port ${SERVER_PORT}!`))