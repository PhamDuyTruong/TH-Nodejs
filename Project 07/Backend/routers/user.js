const userController = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

// Get ALL user
router.get("/",authMiddleware.verifyToken, userController.getAllUsers);

//Delete user
router.delete("/:id", authMiddleware.verifyTokenAndAdminAuth, userController.deleteUser);

module.exports = router;