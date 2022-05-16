const express = require('express');

const app = express();

const routes = require('./routes.js');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('index.html');
});

app.use('/api/productos', routes);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ err, message: 'Something went wrong, sorry' });
});

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});

app.on('error', err => {
	console.log(`Algo salio mal: ${err}`);
});
