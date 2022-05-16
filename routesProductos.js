const Contenedor = require('./productos');
const { Router } = require('express');
const router = Router();

const productos = new Contenedor();

{/*[
    { "id": 1, "title": "Charango", "price": "5000", "thumbnail": "url.com/charango" },
    { "id": 2, "title": "Guitarra", "price": "25000", "thumbnail": "url.com/guitarra" },
    { "id": 3, "title": "Ukelele", "price": "10000", "thumbnail": "url.com/ukelele" }
];*/}

//  devuelve todos los productos
router.get('/', (req, res) => {
    res.json({ productos: productos })
});

// devuelve un producto según su id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundProduct = productos.filter(product => product.id === parseInt(id))
    if (foundProduct.length > 0) {
        res.json(foundProduct)
    } else {
        res.json({ error: 'Producto no encontrado' })
    }
});

// recibe y agrega un producto, y lo devuelve con su id asignado
router.post('/', (req, res) => {
    const newProduct = req.body;
    const newId = productos.length + 1;
    const object = {
        "id": newId,
        "title": newProduct.title,
        "price": newProduct.price,
        "thumbnail": newProduct.thumbnail
    }
    productos.push(object)
    res.json({ mensaje: 'producto agregado con exito, ID: ' + newId });
});

// recibe y actualiza un producto según su id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    const oldProductIndex = productos.indexOf(productos.find(product => product.id === parseInt(id)));
    if (oldProductIndex != -1) {
        const object = {
            "id": parseInt(id),
            "title": updatedProduct.title,
            "price": updatedProduct.price,
            "thumbnail": updatedProduct.thumbnail
        }
        productos[oldProductIndex] = object;
        res.json({ mensaje: 'Producto con el ID ' + id + ' actualizado con exito' })
    } else {
        res.json({ error: 'Producto no encontrado' })
    }
});

// elimina un producto según su id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const indexProduct = productos.indexOf(productos.find(product => product.id === parseInt(id)));
    if (indexProduct != -1) {
        productos.splice(indexProduct, 1)
        res.json({mensaje:  'Producto con el ID ' + id + ' eliminado con exito' })
    } else {
        res.json({ error: 'Producto no encontrado' });
    }
});

module.exports = router;