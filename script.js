// Dates
document.addEventListener("DOMContentLoaded", function()
{
    // Get current date for copyright
    const year = new Date().getFullYear();
    document.querySelectorAll('#current-date')
    .forEach(el =>
    {
        el.textContent = year;
    });

    // Get years worked as freelancer 
    const startDate = new Date(2018,6);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0)
    {
        years--;
        months+=12;
    }

    if (months == 0)
    {
        timeWorked = `${years} years`;
    }
    else if (years == 0)
    {
        timeWorked = `${months} months`;
    }
    else
    {
        timeWorked = `${years} years ${months} months`;
    }

    document.querySelectorAll('#time-worked-freelance')
    .forEach(el =>
    {
        el.textContent = timeWorked;
    });

    // Saved Theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light");
    }
});

// Dark mode / Light mode switch
function toggleMode() {
    const isLight = document.body.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
}

// ScrollReveal - cool text reveal on entering the website
const sr = ScrollReveal ({
    distance: "50px",
    reset: true,
    viewFactor: 0.15,
    mobile: false
})

sr.reveal(".home-text", {delay: 50, duration: 1750, reset: false, origin: "top",});
sr.reveal(".navigation-menu", {delay: 150, duration: 1750, reset: false, origin: "right"});
sr.reveal(".about-col-1", {delay: -200, duration: 2000, origin: "left"});
sr.reveal(".about-col-2", {delay: -200, duration: 2000, origin: "right"});
sr.reveal(".technologies", {delay: -200, duration: 2000, origin: "left"}); 
sr.reveal(".project-section-information", {delay: -200, duration: 2000, origin: "left"});
sr.reveal(".project-information", {delay: -100, duration: 2000, origin: "bottom"});
sr.reveal(".github-repos-preview", {delay: -100, duration: 2000, origin: "bottom"});
sr.reveal(".repo-button-container", {delay: 100, duration: 2000, origin: "bottom"});

// Technologies data
const technologies = [
  {
    name: "WordPress",
    type: "CMS Platform",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    bgClass: "wordpress-bg"
  },
  {
    name: "HTML",
    type: "Markup Language",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    bgClass: "html-bg"
  },
  {
    name: "CSS",
    type: "Style Sheet Language",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    bgClass: "css-bg"
  },
  {
    name: "JavaScript",
    type: "Programming Language",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    bgClass: "js-bg"
  },
  {
    name: "RWD",
    type: "Responsive Web Design",
    img: "https://www.svgrepo.com/show/261938/responsive.svg",
    bgClass: "rwd-bg"
  },
  {
    name: "Figma",
    type: "Design Tool",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    bgClass: "figma-bg"
  },
  {
    name: "Photoshop",
    type: "Image Editing",
    img: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
    bgClass: "photoshop-bg"
  },
  {
    name: "Git",
    type: "Version Control",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    bgClass: "git-bg"
  },
  {
    name: "GitHub",
    type: "Code Hosting",
    img: "https://cdn.simpleicons.org/github/ffffff",
    bgClass: "github-bg"
  },
  {
    name: "Python",
    type: "Programming Language",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    bgClass: "python-bg"
  },
  {
    name: "MySQL",
    type: "Relational Database",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    bgClass: "mysql-bg"
  },
  {
      name: "Jira",
      type: "Project Management",
      img: "https://cdn.simpleicons.org/jira/0052CC",
      bgClass: "jira-bg"
  }
];


// Load technologies to grid
const container = document.getElementById("technologies-grid");

technologies.forEach(tech => {
  const card = document.createElement("div");
  card.className = "tech-card";

  const iconWrapper = document.createElement("div");
  iconWrapper.className = `icon-wrapper ${tech.bgClass}`;

  // Load image
  const img = document.createElement("img");
  img.src = tech.img;
  img.alt = tech.name;

  iconWrapper.appendChild(img);

  // Div for text
  const textWrapper = document.createElement("div");

  const title = document.createElement("h4");
  title.textContent = tech.name;

  const description = document.createElement("p");
  description.innerHTML = `<span>${tech.type}</span>`;

  textWrapper.appendChild(title);
  textWrapper.appendChild(description);

  card.appendChild(iconWrapper);
  card.appendChild(textWrapper);

  container.appendChild(card);
});

// Switching between tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab", "show");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab", "show");
}

// Hamburger menu
function toggleMenu()
{
    const menu = document.getElementById("sideMenu");
    menu.classList.toggle("active");
}

window.addEventListener('resize', () => {
    const sideMenu = document.querySelector('.side-menu');
    if (window.innerWidth > 800)
    {
        sideMenu.classList.remove('active');
    }
});

// Load GitHub repositories
const username = "Splafty";
const apiUrl = `https://api.github.com/users/${username}/repos`;

const VISIBLE_COUNT = 4;
let isExpanded = false;
let repositories = [];

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP Error");
    }
    return response.json();
  })
  .then(repos => {
    repositories = repos;
    renderRepositories();
  })
  .catch(error => console.error(error));


// Render repositories form GitHub API data
function renderRepositories() {
  const container = document.getElementById("github-repos");
  container.innerHTML = "";

  // Check how many repos to show
  const reposToRender = isExpanded
  ? repositories
  : repositories.slice(0, VISIBLE_COUNT);

  reposToRender.forEach(repo => {
    // Main repo card
    const repoCard = document.createElement("div");
    repoCard.className = "main-repo-card";
    repoCard.tabIndex = 0;
    repoCard.setAttribute("role", "link");

    repoCard.addEventListener("click", () => {
      window.open(repo.html_url, "_blank", "noopener,noreferrer");
    });

    // Repo data
    const title = document.createElement("h4");
    title.textContent = repo.name;

    const description = document.createElement("p");
    description.textContent = repo.description || "No description provided.";

    // Technologies div
    const technologiesCard = document.createElement("div");
    technologiesCard.className = "project-technologies";

    const list = document.createElement("ul");
    const listElement = document.createElement("li");
    listElement.innerHTML = `
      <strong>Main language:</strong> ${repo.language || "No data"}
    `;

    // const link = document.createElement("a");
    // link.href = repo.html_url;
    // link.textContent = "View repository on GitHub";
    // link.target = "_blank";
    // link.rel = "noopener noreferrer";

    repoCard.appendChild(title);
    repoCard.appendChild(description);
    repoCard.appendChild(list);

    technologiesCard.appendChild(list);
    list.appendChild(listElement);
    repoCard.appendChild(technologiesCard);
    
    container.appendChild(repoCard);
  });

  // UPDATING BUTTON!!!!!
  updateToggleButton();
}


// Toggle repos view funciton
function toggleRepositoryView() {
  const container = document.getElementById("github-repos");

  isExpanded = !isExpanded;

  if (isExpanded) {
    container.classList.remove("github-repos-preview");
    container.classList.add("github-repos-expanded");

    sr.reveal(".github-repos-expanded", {delay: 100, delay: -100, duration: 2000, origin: "left"});

  } else {
    container.classList.remove("github-repos-expanded");
    container.classList.add("github-repos-preview");
  }

  renderRepositories();

  // Smooth scroll to top of repos section
  const reposSection = document.getElementById("github-repos-container");
  reposSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  sr.reveal(".repo-button-container", {delay: 100, duration: 2000, origin: "bottom"});
}

document
  .getElementById("toggle-repos-btn")
  .addEventListener("click", toggleRepositoryView);


// Update toggle button text
function updateToggleButton() {
  const button = document.getElementById("toggle-repos-btn");

  button.textContent = isExpanded
    ? "See less"
    : "See more";
}
