
// Featured course information
const featuredCourses = [
    {
        name: "HTML & CSS",
        level: "Beginner",
        description: "Learn the basics of web pages, HTML structure, CSS styling and responsive design.",
        link: "html"
    },

    {
        name: "Python",
        level: "Beginner",
        description: "Learn variables, conditions, loops, functions and basic data structures in Python.",
        link: "python"
    },

    {
        name: "Java",
        level: "Beginner",
        description: "Understand Java programming, methods, classes, objects and basic inheritance.",
        link: "java"
    }
];


// Select the featured courses container
const courseContainer = document.getElementById("featuredCourses");


// Display featured courses
featuredCourses.forEach(function(course) {

    const courseCard = document.createElement("div");

    courseCard.className = "course-card";

    courseCard.innerHTML = `
        <h3>${course.name}</h3>
        <span>${course.level}</span>
        <p>${course.description}</p>
        <a href="course-details.html?course=${course.link}">
            View Course →
        </a>
    `;

    courseContainer.appendChild(courseCard);

});
