const express = require("express");
const {
	httpGetAllLaunches,
	httpAddNewLaunch,
	httpAbbortLaunch,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);
launchesRouter.delete("/:id", httpAbbortLaunch);

module.exports = launchesRouter;
