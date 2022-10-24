const express = require("express");
const {createStation, getAllStation} = require("../controllers/station.controllers")

const stationRouter = express.Router();

stationRouter.post("/", createStation);
stationRouter.get("/", getAllStation);

module.exports = {
    stationRouter,

}