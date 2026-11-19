const mongoose = require("mongoose");

// Student registration schema
const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    course: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        select: false
    }

}, {
    timestamps: true
});

// Create Student model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
