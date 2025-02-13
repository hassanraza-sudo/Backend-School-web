const express = require("express");
const cors = require("cors");
const { connectDb } = require("./db/index"); // Import database connection function
const admissionRoutes = require("./routes/admission.routes");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Import and use admission routes
app.use("/api", admissionRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend of the school website!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Connect to PostgreSQL database
connectDb();
