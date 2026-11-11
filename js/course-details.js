
// Course Information
const courses = {

    html: {
        name: "HTML & CSS",
        level: "Beginner",
        duration: "4 Weeks",

        description:
            "Learn the fundamentals of web development and understand how websites are created and styled.",

        about:
            "This beginner-friendly course introduces students to the basic concepts of HTML and CSS. You will learn how to create the structure of a webpage using HTML and style it using CSS.",

        extra:
            "The course also introduces Flexbox and responsive design so that webpages can work properly on different screen sizes.",

        audience:
            "This course is suitable for beginners, college students, and anyone interested in learning web development.",

        learning: [
            "Understand the basic structure of HTML documents.",
            "Use headings, paragraphs, links, images and forms.",
            "Understand CSS selectors, properties and values.",
            "Use Flexbox to create organized layouts.",
            "Create simple responsive webpages."
        ],

        topics: [
            "Introduction to HTML",
            "HTML Elements and Forms",
            "Introduction to CSS",
            "CSS Layout and Flexbox",
            "Responsive Web Design"
        ],

        outcome:
            "After completing this course, students will be able to create simple, structured and responsive webpages using HTML and CSS."
    },


    python: {
        name: "Python",
        level: "Beginner",
        duration: "6 Weeks",

        description:
            "Learn Python programming from the basics and develop problem-solving skills.",

        about:
            "This beginner-friendly course introduces students to Python programming. Students will learn how to write simple programs and understand important programming concepts.",

        extra:
            "The course covers conditions, loops, functions and basic data structures to help students develop programming skills.",

        audience:
            "This course is suitable for beginners, college students and anyone interested in learning Python programming.",

        learning: [
            "Understand Python variables and data types.",
            "Use conditions and loops.",
            "Create and use functions.",
            "Understand lists, tuples and dictionaries.",
            "Develop basic problem-solving skills."
        ],

        topics: [
            "Introduction to Python",
            "Variables and Data Types",
            "Conditions and Loops",
            "Functions",
            "Basic Data Structures"
        ],

        outcome:
            "After completing this course, students will be able to write basic Python programs and solve simple programming problems."
    },


    java: {
        name: "Java",
        level: "Beginner",
        duration: "6 Weeks",

        description:
            "Understand the fundamentals of Java programming and object-oriented concepts.",

        about:
            "This course introduces students to Java programming. Students will learn how to write Java programs and understand the basic structure of Java classes and objects.",

        extra:
            "The course introduces methods, classes, objects and inheritance to help students understand object-oriented programming.",

        audience:
            "This course is suitable for beginners, college students and anyone interested in learning Java programming.",

        learning: [
            "Understand Java variables and data types.",
            "Write methods in Java.",
            "Understand classes and objects.",
            "Learn basic inheritance.",
            "Develop simple Java programs."
        ],

        topics: [
            "Introduction to Java",
            "Variables and Data Types",
            "Methods",
            "Classes and Objects",
            "Inheritance"
        ],

        outcome:
            "After completing this course, students will be able to write basic Java programs and understand fundamental object-oriented programming concepts."
    },


    dsa: {
        name: "Data Structures",
        level: "Intermediate",
        duration: "9 Weeks",

        description:
            "Learn how data is organized and processed using important data structures.",

        about:
            "This course introduces students to important data structures used in programming. Students will learn how data is organized and processed efficiently.",

        extra:
            "The course covers arrays, stacks, queues, linked lists and sorting techniques.",

        audience:
            "This course is suitable for students who understand basic programming and want to improve their problem-solving skills.",

        learning: [
            "Understand arrays and their operations.",
            "Learn stack and queue concepts.",
            "Understand linked lists.",
            "Learn basic sorting techniques.",
            "Improve problem-solving skills."
        ],

        topics: [
            "Introduction to Data Structures",
            "Arrays",
            "Stacks and Queues",
            "Linked Lists",
            "Sorting Techniques"
        ],

        outcome:
            "After completing this course, students will be able to understand and implement basic data structures and use them to solve programming problems."
    },


    networks: {
        name: "Computer Networks",
        level: "Beginner",
        duration: "5 Weeks",

        description:
            "Understand how computers communicate and how the Internet works.",

        about:
            "This course introduces students to computer networks and communication between computers. Students will learn important networking concepts and how the Internet works.",

        extra:
            "The course covers network basics, IP addresses, protocols and common network devices.",

        audience:
            "This course is suitable for beginners, college students and anyone interested in understanding computer networking.",

        learning: [
            "Understand basic networking concepts.",
            "Learn about IP addresses.",
            "Understand network protocols.",
            "Learn how the Internet works.",
            "Identify common network devices."
        ],

        topics: [
            "Introduction to Computer Networks",
            "Network Basics",
            "IP Addresses",
            "Network Protocols",
            "Internet and Network Devices"
        ],

        outcome:
            "After completing this course, students will be able to understand basic networking concepts and explain how computers communicate."
    }

};


// Get selected course from URL
const urlParams = new URLSearchParams(window.location.search);

const courseId = urlParams.get("course");


// Find selected course
const selectedCourse = courses[courseId];


// Display course information
if (selectedCourse) {

    document.getElementById("courseTitle").textContent =
        selectedCourse.name;

    document.getElementById("courseDescription").textContent =
        selectedCourse.description;

    document.getElementById("courseLevel").textContent =
        "Level: " + selectedCourse.level;

    document.getElementById("courseDuration").textContent =
        "Duration: " + selectedCourse.duration;

    document.getElementById("aboutCourse").textContent =
        selectedCourse.about;

    document.getElementById("aboutCourseExtra").textContent =
        selectedCourse.extra;

    document.getElementById("courseAudience").textContent =
        selectedCourse.audience;

    document.getElementById("courseOutcome").textContent =
        selectedCourse.outcome;


    // Display learning points
    const learningList =
        document.getElementById("learningList");

    learningList.innerHTML = "";

    selectedCourse.learning.forEach(function(item) {

        const learningItem = document.createElement("div");

        learningItem.className = "learning-item";

        learningItem.innerHTML = "<span>✓</span><p></p>";

        learningItem.querySelector("p").textContent = item;

        learningList.appendChild(learningItem);

    });


    // Display course topics
    const topicList =
        document.getElementById("topicList");

    topicList.innerHTML = "";

    selectedCourse.topics.forEach(function(item, index) {

        const topic = document.createElement("div");

        topic.className = "topic";

        topic.innerHTML = "<span></span><p></p>";

        topic.querySelector("span").textContent = index + 1;

        topic.querySelector("p").textContent = item;

        topicList.appendChild(topic);

    });


    // Send selected course to registration page
    document.getElementById("registerButton").href =
        "registration.html?course=" + courseId;

}

else {

    // If course is not selected
    document.getElementById("courseTitle").textContent =
        "Course Not Found";

    document.getElementById("courseDescription").textContent =
        "Please select a course from our courses page.";

    document.getElementById("courseLevel").textContent = "";

    document.getElementById("courseDuration").textContent = "";

    document.getElementById("aboutCourse").textContent = "";

    document.getElementById("aboutCourseExtra").textContent = "";

    document.getElementById("courseAudience").textContent = "";

    document.getElementById("courseOutcome").textContent = "";

    document.getElementById("learningList").innerHTML = "";

    document.getElementById("topicList").innerHTML = "";

    document.getElementById("registerButton").style.display = "none";

}
