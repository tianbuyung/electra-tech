require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const router = require("./routers");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined"));

app.use("/", router);

app.use(errorHandler);

module.exports = app;
