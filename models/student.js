const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    admissionNumber: { type: String, required: true, unique: true },
    rollNumber: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    class: {
      type: String,
      enum: [
        "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th",
        "9th", "10th", "11th", "12th"
      ],
      required: true,
    },
    section: { type: String },
    session: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    permanentAddress: { type: String, required: true },
    correspondenceAddress: { type: String },
    contactNumber: { type: String, required: true },
    alternateContactNumber: { type: String },
    email: { type: String },
    nationality: { type: String, required: true },
    religion: { type: String },
    category: { type: String, required: true },
    dateOfAdmission: { type: Date, default: Date.now },
    bloodGroup: { type: String },
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String },
    motherName: { type: String, required: true },
    motherOccupation: { type: String },
    studentPhoto: { type: String, required: true }, // Cloudinary URL
    aadhaarNumber: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
