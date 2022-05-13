const express = require('express');
const app = express();
const morgan = require('morgan');
const routesProductos = require('./productos')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')) 

// Routes
app.use('/api/productos', routesProductos);

//Server
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT)
});
