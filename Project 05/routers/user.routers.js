const {User} = require("../models")
const {checkExist} = require("../middleware/Validations/checkExist")
const express = require("express");
const {createUser, getAllUser, getDetailUser, updateUser, deleteUser, login} = require("../controllers/user.controllers")

const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.post("/login", login);
userRouter.get("/", getAllUser);
userRouter.get("/:id", getDetailUser);
userRouter.put("/:id", checkExist(User), updateUser);
userRouter.delete("/:id", checkExist(User), deleteUser);

module.exports = {
    userRouter,

}