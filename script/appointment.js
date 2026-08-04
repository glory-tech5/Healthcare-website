const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(e){

    e.preventDefault();


    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;


    
    alert(
        "✅ Appointment booked successfully!\n\n" +
        "Thank you for booking an appointment with HealthCare Clinic.\n" +
        "Our doctor will get back to you shortly."
    );


    // WhatsApp message
    const whatsappMessage =
    `New Appointment Booking\n\n` +
    `Patient Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Doctor: ${doctor}\n` +
    `Appointment Date: ${date}`;


    
    const clinicWhatsApp = "237680000000";


    const whatsappURL =
    `https://wa.me/${clinicWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;



    window.location.href = whatsappURL;


    // Clear form
    form.reset();

});