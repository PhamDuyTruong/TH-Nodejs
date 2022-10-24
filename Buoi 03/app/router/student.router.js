const express = require("express");
const studentRouter = express.Router();
const {getStudentList, getStudentDetailById, createStudent, updateStudentById, deleteStudentById} = require("../controllers/student.controllers")
const {logFeature} = require("../middlewares/logger/log-feature");
const {checkEmpty, checkNumberClass} = require("../middlewares/Validations/student.validation")
studentRouter.get("/", getStudentList);

// Lấy thông tin chi tiết học sinh
studentRouter.get("/:id", getStudentDetailById);

// Thêm học sinh
studentRouter.post("/",checkEmpty, checkNumberClass, createStudent);

// Cập nhật học sinh
studentRouter.put("/:id", updateStudentById);

// Xóa học sinh
studentRouter.delete("/:id",deleteStudentById);

module.exports = studentRouter;