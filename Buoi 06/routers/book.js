const bookController = require("../controllers/bookControllers");

const router = require("express").Router();

router.post("/", bookController.addBook);

module.exports = router;