const authController = require("../controllers/authControllers");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

router.post("/refresh", authController.requestRefreshToken);

router.post("/logout", authMiddleware.verifyToken, authController.logOut);

module.exports = router;