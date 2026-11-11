
// Programming Resources
const programmingResources = [

    {
        title: "Programming Basics",
        description: "Learn variables, data types, conditions, loops and functions.",
        link: "https://www.w3schools.com/programming/"
    },

    {
        title: "Problem Solving",
        description: "Learn how to solve programming problems step by step.",
        link: "https://www.geeksforgeeks.org/problem-solving/"
    },

    {
        title: "Algorithms",
        description: "Learn basic searching, sorting and other important algorithms.",
        link: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/"
    }

];


// Web Development Resources
const webResources = [

    {
        title: "HTML Basics",
        description: "Learn headings, paragraphs, links, images, forms and page structure.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },

    {
        title: "CSS Basics",
        description: "Learn colors, fonts, spacing, layouts and website styling.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },

    {
        title: "JavaScript Basics",
        description: "Learn JavaScript and add simple interactive features to websites.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },

    {
        title: "Web Accessibility",
        description: "Learn simple ways to make websites easier for everyone to use.",
        link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
    }

];


// Study Tips
const studyTips = [

    {
        title: "Manage Your Time",
        description: "Create a simple study schedule and divide your time properly."
    },

    {
        title: "Make Good Notes",
        description: "Write short and clear notes to make revision easier."
    },

    {
        title: "Revise Regularly",
        description: "Revise important topics regularly instead of waiting for exams."
    },

    {
        title: "Practice",
        description: "Practice questions and small projects to improve your skills."
    }

];


// Function to display resource cards
function displayResources(resources, containerId) {

    const container = document.getElementById(containerId);

    resources.forEach(function(resource) {

        // Create a new card
        const card = document.createElement("article");

        card.className = "resource-card";

        // Create heading
        const heading = document.createElement("h3");

        heading.textContent = resource.title;

        // Create description
        const paragraph = document.createElement("p");

        paragraph.textContent = resource.description;

        // Add content to card
        card.appendChild(heading);

        card.appendChild(paragraph);


        // Add link if available
        if (resource.link) {

            const link = document.createElement("a");

            link.href = resource.link;

            link.className = "resource-link";

            link.textContent = "Explore Resource →";

            link.target = "_blank";

            link.rel = "noopener noreferrer";

            card.appendChild(link);

        }

        // Add card to container
        container.appendChild(card);

    });

}


// Display all resource sections
displayResources(programmingResources, "programmingResources");

displayResources(webResources, "webResources");

displayResources(studyTips, "studyTips");
