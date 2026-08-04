document.addEventListener("DOMContentLoaded", function() {
    const bookAppointmentBtn = document.getElementById("Book Appointment");
    if (bookAppointmentBtn) {
        bookAppointmentBtn.addEventListener("click", function() {
            window.location.href = "pages/appointment.html";
        });
    }
});