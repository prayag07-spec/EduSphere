const express = require("express");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Student = require("./models/Student");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Serve EduSphere website files
app.use(express.static(__dirname));


// ======================================
// CREATE - Register a new student
// POST /register
// ======================================

app.post("/register", async function(req, res) {
    try {
        const { name, email, course, password } = req.body;

        if (!name || !email || !course || !password) {
            return res.status(400).json({
                message: "Please fill all required fields."
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters."
            });
        }

        const existingStudent = await Student.findOne({
            email: email.trim().toLowerCase()
        });

        if (existingStudent) {
            return res.status(400).json({
                message: "This email is already registered."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newStudent = new Student({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            course: course,
            password: hashedPassword
        });

        await newStudent.save();

        res.status(201).json({
            message: "Registration saved successfully in MongoDB!"
        });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            message: "Unable to complete registration."
        });
    }
});


// ======================================
// READ - Fetch all students
// GET /students
// ======================================

app.get("/students", async function(req, res) {
    try {
        const students = await Student.find().select("-password");

        res.json({
            message: "Students fetched successfully!",
            students: students
        });

    } catch (error) {
        console.error("Fetch students error:", error);
        res.status(500).json({
            message: "Unable to fetch students."
        });
    }
});


// ======================================
// READ - Fetch one student by ID
// GET /students/:id
// ======================================

app.get("/students/:id", async function(req, res) {
    try {
        const studentId = req.params.id;

        if (!mongoose.isValidObjectId(studentId)) {
            return res.status(400).json({
                message: "Invalid student ID."
            });
        }

        const student = await Student.findById(studentId)
            .select("-password");

        if (!student) {
            return res.status(404).json({
                message: "Student not found."
            });
        }

        res.json({
            message: "Student fetched successfully!",
            student: student
        });

    } catch (error) {
        console.error("Fetch student error:", error);
        res.status(500).json({
            message: "Unable to fetch student."
        });
    }
});


// ======================================
// UPDATE - Update student details
// PUT /students/:id
// ======================================

app.put("/students/:id", async function(req, res) {
    try {
        const studentId = req.params.id;
        const { name, email, course } = req.body;

        if (!mongoose.isValidObjectId(studentId)) {
            return res.status(400).json({
                message: "Invalid student ID."
            });
        }

        if (!name || !email || !course) {
            return res.status(400).json({
                message: "Name, email and course are required."
            });
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            {
                name: name.trim(),
                email: email.trim().toLowerCase(),
                course: course
            },
            {
                returnDocument: "after",
                runValidators: true
            }
        ).select("-password");

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found."
            });
        }

        res.json({
            message: "Student updated successfully!",
            student: updatedStudent
        });

    } catch (error) {
        console.error("Update student error:", error);

        if (error.code === 11000) {
            return res.status(400).json({
                message: "This email is already registered."
            });
        }

        res.status(500).json({
            message: "Unable to update student."
        });
    }
});


// ======================================
// DELETE - Delete a student by ID
// DELETE /students/:id
// ======================================

app.delete("/students/:id", async function(req, res) {
    try {
        const studentId = req.params.id;

        if (!mongoose.isValidObjectId(studentId)) {
            return res.status(400).json({
                message: "Invalid student ID."
            });
        }

        const deletedStudent = await Student.findByIdAndDelete(studentId);

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found."
            });
        }

        res.json({
            message: "Student deleted successfully!"
        });

    } catch (error) {
        console.error("Delete student error:", error);
        res.status(500).json({
            message: "Unable to delete student."
        });
    }
});


// ======================================
// CONTACT - Save messages in local JSON
// POST /contact
// ======================================

app.post("/contact", async function(req, res) {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                message: "Please fill all required fields."
            });
        }

        const filePath = path.join(
            __dirname,
            "data",
            "contact_messages.json"
        );

        const data = await fs.promises.readFile(filePath, "utf8");
        const contactMessages = JSON.parse(data);

        contactMessages.push({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            subject: subject.trim(),
            message: message.trim()
        });

        await fs.promises.writeFile(
            filePath,
            JSON.stringify(contactMessages, null, 4)
        );

        res.json({
            message: "Your message has been sent successfully!"
        });

    } catch (error) {
        console.error("Contact form error:", error);
        res.status(500).json({
            message: "Unable to save contact message."
        });
    }
});


// ======================================
// START SERVER AFTER DATABASE CONNECTION
// ======================================

async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, function() {
            console.log("EduSphere server is running");
            console.log(`Open http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error);
    }
}

startServer();
