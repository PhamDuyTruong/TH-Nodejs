const productModel = require("../models/productModel");

const productController = {
    getProduct: async(req, res, next) => {
        const products = await productModel.getAll();
        res.render("shop/index", {title: 'Online Shop', products: products})
    },
    getProductById: async(req, res, next) => {
        const id = req.params.id;
        const product = await productModel.getProductById(id);
        // console.log(product);
        res.render("shop/detail", {product: product});
    },
    addProduct: async(req, res, next) => {
        const txtId = req.body.txtId;
        const txtTitle = req.body.txtTitle;
        const txtImagePath = req.body.txtImagePath;
        const txtDescription = req.body.txtDescription;
        const txtPrice = req.body.txtPrice;
        const txtMade = req.body.txtMade;

        const newProduct = {
            id: txtId,
            image_path: txtImagePath,
            title: txtTitle,
            description: txtDescription,
            price: txtPrice,
            made: txtMade
        };

        await productModel.addProduct(newProduct);
        res.redirect('../');
    },
    updateProduct: async(req, res, next) => {
        const txtId = req.params.id;
        const txtTitle = req.body.txtTitle;
        const txtImagePath = req.body.txtImagePath;
        const txtDescription = req.body.txtDescription;
        const txtPrice = req.body.txtPrice;
        const txtMade = req.body.txtMade;

        const newProduct = {
            id: txtId,
            image_path: txtImagePath,
            title: txtTitle,
            description: txtDescription,
            price: txtPrice,
            made: txtMade
        };
        await productModel.updateProduct(newProduct);
        res.redirect('/');
    },
    deleteProduct: async(req, res, next) => {
        const id = req.params.id;
        console.log(id);
        await productModel.deleteProduct(id);
        res.redirect('http://localhost:3000');
    }
};

module.exports = productController