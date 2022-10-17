const express  = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()
const app = express()
app.use(express.json());
app.use(cors())
const port = process.env.port || 3066
const CONNECTION_URL = process.env.DB_URL;
const router = require("./app/controller/userController")

app.use("/api", router);





mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => 
  app.listen(port, ()=> console.log(`server is running on the port ${port}`)))
  .catch((error) => console.log(`${error} did not connect`));