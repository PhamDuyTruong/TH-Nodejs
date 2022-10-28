const express = require("express");
const { stationRouter } = require("./station.routers");
const {userRouter} = require("./user.routers")
const rootRouter = express.Router();
const {tripRouters} = require("./trip.routers")

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouters);

module.exports = {
    rootRouter,
    userRouter
}