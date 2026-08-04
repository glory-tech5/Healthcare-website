const header = document.getElementById("header");

const headerContent = `
<div class="logo">
    <h2 id="title" style="font-size: 20px;">🏥Healthcare Clinic</h2>
</div>

<nav class="navbar">
    <ul class="nav-links">
    

        <li><a href="../index.html" class="nav-link">Home</a></li>
        <li><a href="../pages/contact.html" class="nav-link">Contact Us</a></li>
        <li><a href="../pages/about.html" class="nav-link">About</a></li>
        <li><a href="../pages/appointment.html" class="nav-link">Appointment</a></li>
        <li><a href="../pages/services.html" class="nav-link">Services</a></li>
        <li><a href="../pages/doctor.html" class="nav-link">Doctor</a></li>

        <button onclick="location.href='../pages/appointment.html'" class="btn3">
            Book Now
        </button>

        <button id="bookAppointment" class="btn3">
            Book Appointment
        </button>

    </ul>
</nav>
`;

header.innerHTML = headerContent;




// Active navigation link
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href").split("/").pop();

    if(linkPage === currentPage){
        link.classList.add("active");
    }

});