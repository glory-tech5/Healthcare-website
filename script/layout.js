const footer = document.getElementById("footer");

const footerContent = `

<div class="footer-container">

    <div class="footer-section">
        <h2>🏥 HealthCare Clinic</h2>
        <p>
            Providing quality healthcare services for everyone.
        </p>
    </div>


    <div class="footer-section">
        <h3>Quick Links</h3>

       <li><a href="../index.html" class="nav-link">Home</a></li>
        <li><a href="../pages/contact.html" class="nav-link">Contact Uu</a></li>
        <li><a href="../pages/about.html" class="nav-link">About</a></li>
        <li><a href="../pages/appointment.html" class="nav-link">Appointment</a></li>
        <li><a href="../pages/services.html" class="nav-link">Services</a></li>
        <li><a href="../pages/doctor.html" class="nav-link">Doctor</a></li>
    </div>


    <div class="footer-section">
        <h3>Contact</h3>

        <p> Phone: +237 681399796</p>
        <p>Email: info@clinic.com</p>
        <p> Location: Cameroon</p>

    </div>

</div>


<div class="footer-bottom">
    <p>
    © 2026 HealthCare Clinic. All Rights Reserved.
    </p>
</div>

`;

footer.innerHTML = footerContent;