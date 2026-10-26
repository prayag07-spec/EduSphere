document.getElementById("registrationForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    // Get form values
    let name = document.getElementById("studentName").value.trim();
    let email = document.getElementById("studentEmail").value.trim();
    let course = document.getElementById("course").value;
    let password = document.getElementById("studentPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("formMessage");

    // Check empty fields
    if (name === "" || email === "" || course === "" ||
        password === "" || confirmPassword === "") {

        message.textContent = "Please fill all the fields.";
        message.style.color = "red";
        return;
    }

    // Check email
    if (!email.includes("@") || !email.includes(".")) {

        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    // Check password length
    if (password.length < 8) {

        message.textContent = "Password must contain at least 8 characters.";
        message.style.color = "red";
        return;
    }

    // Check password confirmation
    if (password !== confirmPassword) {

        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    // Send data to backend
    try {

        let response = await fetch("/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                name: name,
                email: email,
                course: course,
                password: password

            })

        });

        let result = await response.json();

        // Show backend response
        if (response.ok) {

            message.textContent = result.message;
            message.style.color = "green";

            document.getElementById("registrationForm").reset();

        } else {

            message.textContent = result.message;
            message.style.color = "red";

        }

    } catch (error) {

        message.textContent = "Unable to connect to server.";
        message.style.color = "red";

    }

});


// Automatically select course from URL
let urlParams = new URLSearchParams(window.location.search);

let selectedCourse = urlParams.get("course");

if (selectedCourse) {

    document.getElementById("course").value = selectedCourse;

}
