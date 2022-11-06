const userController = require("../controllers/userControllers");

const router = require("express").Router();

// Get ALL user
router.get("/", userController.getAllUsers);

module.exports = router;