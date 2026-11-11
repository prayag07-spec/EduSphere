
// Information about what EduSphere offers
const offers = [
    {
        title: "Courses",
        description: "Beginner-friendly courses covering programming, data structures and computer networks."
    },

    {
        title: "Learning Resources",
        description: "Useful resources for programming, web development and regular study practice."
    },

    {
        title: "Study Guidance",
        description: "Simple study tips and planning ideas to help students organize their studies."
    }
];


// Select the container from HTML
const offerContainer = document.getElementById("offerCards");


// Display each offer on the webpage
offers.forEach(function(offer) {

    // Create a card
    const card = document.createElement("article");

    // Add the existing CSS class
    card.className = "card";

    // Add title and description
    card.innerHTML = `
        <h3>${offer.title}</h3>
        <p>${offer.description}</p>
    `;

    // Add the card to the container
    offerContainer.appendChild(card);

});
