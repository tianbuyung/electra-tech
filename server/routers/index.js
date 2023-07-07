const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/controller");
const apiRouter = require("./api");

router.get("/", Controllers.testServer);
router.use("/api", apiRouter);

module.exports = router;
