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
    viewFactor: 0.15
})

sr.reveal(".home-text", {delay: 50, duration: 1750, reset: false, origin: "top",});
sr.reveal(".navigation-menu", {delay: 150, duration: 1750, reset: false, origin: "right"});
sr.reveal(".about-col-1", {delay: -200, duration: 2000, origin: "left"});
sr.reveal(".about-col-2", {delay: -200, duration: 2000, origin: "right"});
sr.reveal(".technologies", {delay: -200, duration: 2000, origin: "left"});
sr.reveal(".project-section-information", {delay: -200, duration: 2000, origin: "left"});
sr.reveal(".project-information", {delay: 100, duration: 2000, origin: "bottom"});