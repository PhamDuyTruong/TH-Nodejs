const authorController = require("../controllers/authorControllers");

const router = require("express").Router();

router.post("/", authorController.addAuthor);


module.exports = router