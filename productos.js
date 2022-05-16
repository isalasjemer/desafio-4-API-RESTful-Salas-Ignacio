
//Implementacion de la API en una clase separada, utilizando un array como soporte de persistencia en memoria.

class Contenedor {
    
    constructor(){
        this.productos=[];
    }

    newId() {
        const lastProduct = this.productos[this.productos.length - 1];
        console.log(lastProduct);
        let id = 1;
        if (lastProduct) {
            id = lastProduct.id + 1;
        }
        return id;
    }

    newProduct(data) {
        data.id = this.newId();
        this.productos.push(data);
        return this.productos;
    }

    getById(id) {
        return this.productos.find(product => product.id === parseInt(id));
    }

    update(id, data) {
        let updatedProduct;
        const updatedProducts = this.productos.map(product => {
            if (product.id === parseInt(id)) {
                product = Object.assign(product, data);
                updatedProduct = product;
            }
            return product;
        });
        this.productos = updatedProducts;
        return updatedProduct;
    }

    getAll() {
        return this.productos;
    }

    deleteById(id) {
        const newProducts = this.productos.filter(
            product => product.id !== parseInt(id)
        );
        this.productos = newProducts;
        return this.productos;
    }
}

module.exports = Ci;