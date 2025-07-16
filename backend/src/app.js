const express = require("express");

const { userRouter } = require("./routes/index");

const app = express();

app.use("/api/v1/users", userRouter);

module.exports = app;
