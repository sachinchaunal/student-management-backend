const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");


dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

app.use(cors({
  origin: ["https:student-management-system-ejci146q5-sachinchaunals-projects.vercel.app", "http://localhost:5000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
 // Enable CORS
app.use("/students", studentRoutes); // Use student routes

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

  
// Test Route
app.get("/", (req, res) => {
  res.send("Student Management API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
