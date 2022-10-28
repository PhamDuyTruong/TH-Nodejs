const express = require("express");
const { createTrip, getAllTrip, deleteTrip } = require("../controllers/trip.controllers");

const tripRouters = express.Router();

tripRouters.post("/", createTrip);
tripRouters.get("/", getAllTrip);
tripRouters.delete("/:id", deleteTrip);


module.exports = {
    tripRouters,
}