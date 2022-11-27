const productController = require("../Controller/productController");
const productModel = require("../models/productModel");
const router = require("express").Router();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", productController.getProduct);
router.get("/:id", productController.getProductById);
router.get("/product/delete/:id", productController.deleteProduct);
router.get("/product/add", (req, res) => {
    res.render("shop/addProduct")
})
router.post("/product/add",  urlencodedParser, productController.addProduct);

router.get("/product/update/:id", async (req, res) => {
    const id = req.params.id;
    const product = await productModel.getProductById(id);
    res.render("shop/updateProduct", {product: product})
});

router.post("/product/update/:id", productController.updateProduct);

module.exports = router;