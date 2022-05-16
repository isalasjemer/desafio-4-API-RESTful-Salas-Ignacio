const { Router } = require('express');
const Productos = require('./Productos');

const router = Router();
const products = new Productos();

//	Obtener todos los productos
router.get('/', (req, res) => {
	const data = products.getAll();
	res.json(data);
});

// Obtener un producto por su id
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const product = products.getById(id);
	if (!product) {
		return res.json({ error: 'producto no encontrado' });
	}
	res.json(product);
});

//	Agregar producto
router.post('/', (req, res) => {
	const { title, price, thumbnail } = req.body;
	const product = products.addProduct({
		title,
		price,
		thumbnail,
	});
	res.json(product);
});

// Modificar producto segun id
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const { title, price, thumbnail } = req.body;
	const product = products.update(id, {
		title,
		price,
		thumbnail,
	});
	res.json(product);
});

// Borrar producto especifico segun su id
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const product = products.deleteById(id);
	res.json(product);
});

module.exports = router;