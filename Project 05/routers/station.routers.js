const {Station} = require("../models")

const express = require("express");
const {createStation, getAllStation, getDetailStation, updateStation, deleteStation} = require("../controllers/station.controllers")

const stationRouter = express.Router();

stationRouter.post("/", createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", async (req, res, next) => {
    const {id} = req.params;
    const station = await Station.findOne({
        where: {
            id,
        }
    });
    if(station){
        next();
    }else {
        res.status(404).send("Không tìm thấy !!!");
    }

}, updateStation);
stationRouter.delete("/:id", deleteStation);

module.exports = {
    stationRouter,

}