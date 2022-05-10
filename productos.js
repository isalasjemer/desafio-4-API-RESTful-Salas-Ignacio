const { Router } = require('express');
const router = Router();

const productos = [];

router.get('/', (req, res)=>{
    res.json({productos: productos})
})

router.post('/', (req, res)=>{
    const producto = req.body;
    productos.push(producto);
    res.send({mensaje:'producto agregado con exito'})
})

module.exports = router;