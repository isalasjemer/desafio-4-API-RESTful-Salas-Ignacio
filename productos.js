const { Router } = require('express');
const router = Router();

const productos = [{ "id": 1, "title": "Charango", "price": "5000", "thumbnail": "url.com/charango" }, { "id": 2, "title": "Guitarra", "price": "25000", "thumbnail": "url.com/guitarra" }, { "id": 3, "title": "Ukelele", "price": "10000", "thumbnail": "url.com/ukelele" }];

//  devuelve todos los productos
router.get('/', (req, res) => {
    res.json({ productos: productos })
});

// devuelve un producto según su id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundProduct = productos.filter(product => product.id === parseInt(id))
    console.log(foundProduct)
    if(foundProduct.length > 0){
        res.json(foundProduct)
    }else{
        res.json({'error': 'Producto no encontrado'})
    }
})



router.post('/', (req, res) => {
    const producto = req.body;
    console.log(producto)
    productos.push(producto);
    res.send({ mensaje: 'producto agregado con exito' });
});

module.exports = router;