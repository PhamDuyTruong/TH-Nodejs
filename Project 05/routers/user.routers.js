const {User} = require("../models")
const {checkExist} = require("../middleware/Validations/checkExist")
const express = require("express");
const {createUser, getAllUser, getDetailUser, updateUser, deleteUser, login, uploadAvatar} = require("../controllers/user.controllers")

const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.post("/login", login);

const multer = require("multer");
const { authenticate } = require("../middleware/auth/authenticate");
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/images/avatars")
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + "_" +  file.originalname) // dặt lại tên cho file
    }
})
const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb){
        const extensionImageList = [".png", ".jpg"];
        const extension = file.originalname.slice(-4);
        const check = extensionImageList.includes(extension);
        if(check){
            cb(null, true);
        }else{
            cb(new Error("extention không hợp lệ"))
        }
    }
})

userRouter.post("/upload-avatar", authenticate, upload.single('avatar'), uploadAvatar)
userRouter.get("/", getAllUser);
userRouter.get("/:id", getDetailUser);
userRouter.put("/:id", checkExist(User), updateUser);
userRouter.delete("/:id", checkExist(User), deleteUser);

module.exports = {
    userRouter,

}