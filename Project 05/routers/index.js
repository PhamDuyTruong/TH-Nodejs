const express = require("express");
const { stationRouter } = require("./station.routers");
const {userRouter} = require("./user.routers")
const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
userRouter.use("/users", userRouter);

module.exports = {
    rootRouter,
    userRouter
}