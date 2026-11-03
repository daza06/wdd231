const courses = [
  {
    subject: "CSE 110",
    title: "Introduction to Programming",
    credits: 2,
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD 130",
    title: "Web Fundamentals",
    credits: 2,
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE 111",
    title: "Programming with Functions",
    credits: 2,
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE 210",
    title: "Programming with Classes",
    credits: 2,
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD 131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD 231",
    title: "Frontend Web Development I",
    credits: 2,
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

const cardsContainer = document.getElementById("course-container");
const totalCreditsResult = document.getElementById("total-credits");
const filterAllBtn = document.getElementById("filter-all");
const filterWDDBtn = document.getElementById("filter-wdd");
const filterCSEBtn = document.getElementById("filter-cse");

function displayCourses(courseArray) {
  cardsContainer.innerHTML = "";
  if (!cardsContainer) {
    return;
  }

  courseArray.forEach((course) => {
    const card = document.createElement("div");
    card.className = `course-card ${course.completed ? "completed" : ""}`;
    card.innerHTML = `
            <h3>${course.subject}</h3>
            <p><strong>Name:</strong> ${course.title}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Technology:</strong> ${course.technology}</p>
            <p><strong>Status:</strong> ${course.completed ? "Complete" : "Incomplete"}</p>
        `;
    cardsContainer.appendChild(card);
  });

  calculateTotalCredits(courseArray);
}

function calculateTotalCredits(courseArray) {
  const totalCredits = courseArray.reduce(
    (sum, course) => sum + course.credits,
    0,
  );

  totalCreditsResult.textContent = totalCredits;
}

function filterCourses(filterType) {
  let filteredList = [];

  if (filterType === "WDD") {
    filteredList = courses.filter((course) => course.subject.startsWith("WDD"));
  } else if (filterType === "CSE") {
    filteredList = courses.filter((course) => course.subject.startsWith("CSE"));
  } else {
    filteredList = courses;
  }

  updateButtonStatus(filterType);
  displayCourses(filteredList);
}

function updateButtonStatus(activeType) {
  [filterAllBtn, filterWDDBtn, filterCSEBtn].forEach((btn) => {
    btn.classList.remove("active");
  });

  if (activeType === "WDD") {
    filterWDDBtn.classList.add("active");
  } else if (activeType === "CSE") {
    filterCSEBtn.classList.add("active");
  } else {
    filterAllBtn.classList.add("active");
  }
}

if (filterAllBtn) {
  filterAllBtn.addEventListener("click", () => filterCourses("all"));
}
if (filterWDDBtn) {
  filterWDDBtn.addEventListener("click", () => filterCourses("WDD"));
}
if (filterCSEBtn) {
  filterCSEBtn.addEventListener("click", () => filterCourses("CSE"));
}

filterCourses("all");
