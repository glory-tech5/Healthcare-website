window.onload = function() {
    alert("Welcome to our Healthcare Clinic website! We are dedicated to providing you with the best healthcare services. Explore our website to learn more about our services, doctors, and how to book an appointment. Your health is our priority!");
};

document.addEventListener("DOMContentLoaded", function() {
    const bookAppointmentBtn = document.getElementById("bookAppointment");
    if (bookAppointmentBtn) {
        bookAppointmentBtn.addEventListener("click", function() {
            window.location.href = "pages/appointment.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const bookAppointmentBtn = document.getElementById("BookAppointment");
    if (bookAppointmentBtn) {
        bookAppointmentBtn.addEventListener("click", function() {
            window.location.href = "pages/appointment.html";
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const viewButton = document.getElementById("view"); 
    if (viewButton) {
        viewButton.addEventListener("click", function() {
            window.location.href = "/pages/doctor.html";
            
        });
    } 
        });

const button = document.querySelectorAll("learnmore");
button.forEach(btn => {
    button.addEventListener("click", function() {
        let serviceCard = btn.closest(".service-card");
        if (serviceCard) {
            let serviceTitle = serviceCard.querySelector("h3").textContent;
            alert(`You clicked on Learn More for: ${serviceTitle}`);
        }
        })
    });
    



    
    
