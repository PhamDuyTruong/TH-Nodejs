const userController = require("../controllers/userControllers");

const router = require("express").Router();

// Get ALL user
router.get("/", userController.getAllUsers);

//Delete user
router.delete("/:id", userController.deleteUser);

module.exports = router;