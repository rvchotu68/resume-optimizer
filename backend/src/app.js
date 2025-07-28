const express = require("express");
const cors = require("cors");

const { userRouter } = require("./routes/index");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1/users", userRouter);

module.exports = app;
