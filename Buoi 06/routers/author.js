const authorController = require("../controllers/authorControllers");

const router = require("express").Router();

router.post("/", authorController.addAuthor);
router.get("/", authorController.getAllAuthors)


module.exports = router