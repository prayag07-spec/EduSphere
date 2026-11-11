
// Course details
const courses = [
    {
        name: "HTML & CSS",
        level: "Beginner",
        duration: "4 Weeks",
        description: "Learn how websites are created using HTML and styled using CSS.",
        topics: "HTML Basics, Forms, CSS, Flexbox, Responsive Design",
        link: "html"
    },
    {
        name: "Python",
        level: "Beginner",
        duration: "6 Weeks",
        description: "Learn Python programming from the basics and develop problem-solving skills.",
        topics: "Variables, Conditions, Loops, Functions, Data Structures",
        link: "python"
    },
    {
        name: "Java",
        level: "Beginner",
        duration: "6 Weeks",
        description: "Understand the fundamentals of Java programming and object-oriented concepts.",
        topics: "Variables, Methods, Classes, Objects, Inheritance",
        link: "java"
    },
    {
        name: "Data Structures",
        level: "Intermediate",
        duration: "9 Weeks",
        description: "Learn how data is organized and processed using important data structures.",
        topics: "Arrays, Stacks, Queues, Linked Lists, Sorting",
        link: "dsa"
    },
    {
        name: "Computer Networks",
        level: "Beginner",
        duration: "5 Weeks",
        description: "Understand how computers communicate and how the Internet works.",
        topics: "Network Basics, IP Addresses, Protocols, Internet, Network Devices",
        link: "networks"
    }
];

// Select the course grid from HTML
const courseGrid = document.querySelector(".course-grid");

// Display courses on the page
courses.forEach(function(course) {
    courseGrid.innerHTML += `
        <div class="course-card">

            <h2>${course.name}</h2>

            <span>${course.level}</span>

            <p>Duration: ${course.duration} | Online</p>

            <p>${course.description}</p>

            <h4>Topics</h4>

            <p>${course.topics}</p>

            <a href="course-details.html?course=${course.link}" class="course-link">
                View Course →
            </a>

        </div>
    `;
});
