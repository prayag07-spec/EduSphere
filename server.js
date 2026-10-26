
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Read JSON data from frontend requests
app.use(express.json());

// Open EduSphere website files
app.use(express.static(__dirname));


// ================================
// Registration API
// ================================

app.post("/register", function(req, res) {

    // Get registration details
    const name = req.body.name;
    const email = req.body.email;
    const course = req.body.course;
    const password = req.body.password;

    // Check required fields
    if (!name || !email || !course || !password) {

        return res.status(400).json({
            message: "Please fill all required fields."
        });

    }

    // JSON file location
    const filePath = path.join(__dirname, "data", "registrations.json");

    // Read existing registration data
    fs.readFile(filePath, "utf8", function(err, data) {

        if (err) {

            return res.status(500).json({
                message: "Unable to read registration data."
            });

        }

        // Convert JSON data into an array
        let registrations = JSON.parse(data);

        // Check duplicate email
        let existingStudent = registrations.find(function(student) {

            return student.email.toLowerCase() === email.toLowerCase();

        });

        if (existingStudent) {

            return res.status(400).json({
                message: "This email is already registered."
            });

        }

        // Add new registration
        registrations.push({

            name: name,
            email: email,
            course: course,
            password: password

        });

        // Save registration data in JSON file
        fs.writeFile(filePath, JSON.stringify(registrations, null, 4), function(err) {

            if (err) {

                return res.status(500).json({
                    message: "Unable to save registration."
                });

            }

            // Send success message
            res.json({
                message: "Registration saved successfully!"
            });

        });

    });

});


// ================================
// Contact API
// ================================

app.post("/contact", function(req, res) {

    // Get contact form details
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    // Check required fields
    if (!name || !email || !subject || !message) {

        return res.status(400).json({
            message: "Please fill all required fields."
        });

    }

    // JSON file location
    const filePath = path.join(__dirname, "data", "contact_messages.json");

    // Read existing contact messages
    fs.readFile(filePath, "utf8", function(err, data) {

        if (err) {

            return res.status(500).json({
                message: "Unable to read contact messages."
            });

        }

        // Convert JSON data into an array
        let contactMessages = JSON.parse(data);

        // Add new contact message
        contactMessages.push({

            name: name,
            email: email,
            subject: subject,
            message: message

        });

        // Save contact messages in JSON file
        fs.writeFile(filePath, JSON.stringify(contactMessages, null, 4), function(err) {

            if (err) {

                return res.status(500).json({
                    message: "Unable to save contact message."
                });

            }

            // Send success message
            res.json({
                message: "Your message has been sent successfully!"
            });

        });

    });

});


// ================================
// Start EduSphere server
// ================================

app.listen(PORT, function() {

    console.log("EduSphere server is running");
    console.log("Open http://localhost:3000");

});
