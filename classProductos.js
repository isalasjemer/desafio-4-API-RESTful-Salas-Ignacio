
class Productos {
    productos = [
        { id: 1, title: "Charango", price: 5000, thumbnail: "url.com/charango" },
        { id: 2, title: "Guitarra", price: 25000, thumbnail: "url.com/guitarra" },
        { id: 3, title: "Ukelele", price: 10000, thumbnail: "url.com/ukelele" }
    ];

    newId() {
        const lastProduct = this.productos[this.productos.length - 1];
        console.log(lastProduct);
        let id = 1;
        if (lastProduct) {
            id = lastProduct.id + 1;
        }

        return id;
    }

    newProduct(newData) {
        newData.id = this.newId();

        this.productos.push(newData);

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

module.exports = Productos;