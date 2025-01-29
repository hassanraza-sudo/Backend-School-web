const express = require("express");
const cors = require("cors");
const connectDb = require("./db/index");
const app = express();

const PORT = 5000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
connectDb();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend of school website!" });
});
