const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dontEnv = require("dotenv");
const app = express();
require("dotenv").config();
const database = require("./config/database");
const authRouter = require("./routes/auth.js");
const PORT = process.env.PORT || 8080;

dontEnv.config();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

app.use("/", authRouter);

database();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
