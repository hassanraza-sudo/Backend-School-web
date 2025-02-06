const express = require("express");
const cors = require("cors");
const { connectDb } = require("./db/index");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Add this to parse JSON request bodies

app.use("/api/students", studentRoutes); // Use student routes

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend of school website!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

connectDb();
