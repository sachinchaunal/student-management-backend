const express = require("express");
const Student = require("../models/student");
const upload = require("../config/multerConfig");

const router = express.Router();

// @route   POST /students
// @desc    Create a new student
router.post("/", upload.single("studentPhoto"), async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Debugging log

    const {
      firstName, lastName, rollNumber, class: studentClass, session,
      dateOfBirth, gender, permanentAddress, correspondenceAddress, contactNumber,
      alternateContactNumber, email, nationality, religion, category,
      dateOfAdmission, bloodGroup, fatherName, fatherOccupation,
      motherName, motherOccupation, aadhaarNumber
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !rollNumber || !studentClass || !session ||
        !dateOfBirth || !gender || !permanentAddress || !contactNumber || !nationality ||
        !category || !fatherName || !motherName || !req.file || !req.file.path) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const admissionNumber = `ADM${new Date().getFullYear()}${Math.floor(1000 + Math.random() * 9000)}`;

    const newStudent = new Student({
      admissionNumber,
      firstName,
      lastName,
      rollNumber,
      class: studentClass,
      session,
      dateOfBirth,
      gender,
      permanentAddress,
      correspondenceAddress,
      contactNumber,
      alternateContactNumber,
      email,
      nationality,
      religion,
      category,
      dateOfAdmission: dateOfAdmission || new Date(),
      bloodGroup,
      fatherName,
      fatherOccupation,
      motherName,
      motherOccupation,
      studentPhoto: req.file.path, // Cloudinary image URL
      aadhaarNumber
    });

    await newStudent.save();
    res.status(201).json({ success: true, message: "Student added successfully", student: newStudent });
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ success: false, message: "Error adding student", error: error.message });
  }
});



// @route   GET /students
// @desc    Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching students", error: error.message });
  }
});

// @route   GET /students/:id
// @desc    Get a student by ID
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching student", error: error.message });
  }
});

// @route   PUT /students/:id
// @desc    Update a student's details
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }
    res.status(200).json({ success: true, message: "Student updated successfully", student: updatedStudent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating student", error: error.message });
  }
});

// @route   DELETE /students/:id
// @desc    Delete a student
router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }
    res.status(200).json({ success: true, message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting student", error: error.message });
  }
});

module.exports = router;
