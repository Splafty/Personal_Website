// ScrollReveal - cool text reveal on entering the website
const sr = ScrollReveal ({
    distance: "50px",
    reset: true
})

sr.reveal(".home-text", {delay: 100, duration: 2000, reset: false, origin: "top"});
sr.reveal(".navigation-menu", {delay: 300, duration: 2000, reset: false, origin: "right"});
sr.reveal(".about-col-1", {delay: -200, duration: 2000, origin: "left"});
sr.reveal(".about-col-2", {delay: -200, duration: 2000, origin: "right"});
sr.reveal(".technologies", {delay: -200, duration: 2000, origin: "left"});
sr.reveal(".data-table-information", {delay: -200, duration: 2000, origin: "left"});
sr.reveal(".format-information", {delay: 100, duration: 2000, origin: "bottom"}); 

// Function to fetch CSV data
function fetchCSV() 
{
    // Fetch CSV file
    fetch("./MOCK_DATA.csv") // <-----------------------------------------------------------  Write your CSV file name here! If not the function will do a flip
        .then(response => response.text()) // Convert the response into plain text
        .then(data => 
            {
            // Split the data into rows and then split each row into columns
            const rows = data.split("\n").map(row => row.split(","));
            
            // Get the table body element by ID
            const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

            // Iterate over rows up to 10 rows 
            for (let index = 1; index <= 10; index++) 
            {
                // Create a table row element for each row in the CSV
                const tr = document.createElement("tr");

                // Iterate over columns in the current row (FOR LOOP IN A FOR LOOP)
                for (let columnIndex = 0; columnIndex < rows[index].length; columnIndex++) 
                {
                    // Create a table cell for each column and import the data
                    const td = document.createElement("td");
                    td.textContent = rows[index][columnIndex].trim();
                    tr.appendChild(td); // Add the created cell to the current row
                }

                // Add the created row to the table body
                tableBody.appendChild(tr);
            }
        })
        .catch(error => console.error("Error fetching CSV data:", error)); // Log an error if fetching fails
}

// If you have any questions fell free to ask! ~ Piotr Henzolt
// And finaly call the function to fetch CSV data and import it to the table
fetchCSV();



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

function openFile(dataFile) 
{
    window.open(dataFile);
}

function openFileCSV() 
{
    const newWindow = window.open()
    
    fetch('MOCK_DATA.csv')
    .then(response => response.text())
    .then(content => 
    {
        newWindow.document.write('<pre>' + content + '</pre>');
        newWindow.document.title = 'MOCK_DATA.csv';
        newWindow.document.body.style.backgroundColor = "black";
        newWindow.document.body.style.color = "white";
        newWindow.document.body.style.fontSize = 16;
    })
    .catch(error => console.error('Error fetching CSV file:', error));
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

// Get current date
document.addEventListener("DOMContentLoaded", function()
{
    const year = new Date().getFullYear();
    document.querySelectorAll('.current-date')
    .forEach(el =>
    {
        el.textContent = year;
    });
});