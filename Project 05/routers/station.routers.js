const {Station} = require("../models")
const {checkExist} = require("../middleware/Validations/checkExist");
const {authenticate} = require("../middleware/auth/authenticate");
const {authorize} = require("../middleware/auth/authorize")
const express = require("express");
const {createStation, getAllStation, getDetailStation, updateStation, deleteStation} = require("../controllers/station.controllers")

const stationRouter = express.Router();

stationRouter.post("/", authenticate, authorize(["ADMIN"]), createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", checkExist(Station), updateStation);
stationRouter.delete("/:id", authenticate, checkExist(Station), deleteStation);

module.exports = {
    stationRouter,

}