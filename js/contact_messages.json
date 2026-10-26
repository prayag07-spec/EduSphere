document.getElementById("contactForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    // Get form details
    let name = document.getElementById("full-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let formMessage = document.getElementById("contactFormMessage");

    // Check empty fields
    if (name === "" || email === "" || subject === "" || message === "") {

        formMessage.textContent = "Please fill all the fields.";
        formMessage.style.color = "red";
        return;

    }

    // Send data to backend
    try {

        let response = await fetch("/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            })

        });

        let result = await response.json();

        if (response.ok) {

            formMessage.textContent = result.message;
            formMessage.style.color = "green";

            document.getElementById("contactForm").reset();

        } else {

            formMessage.textContent = result.message;
            formMessage.style.color = "red";

        }

    } catch (error) {

        formMessage.textContent = "Unable to connect to server.";
        formMessage.style.color = "red";

    }

});
