const form = document.getElementById("appointmentForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // Clear previous message
    errorMessage.textContent = "";
    errorMessage.className = "error-message";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const department = document.getElementById("department").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if(name === ""){
        errorMessage.textContent = "Please enter your full name.";
        return;
    }

    if(name.length < 3){
        errorMessage.textContent = "Name must be at least 3 characters.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    const phonePattern = /^[0-9]{9,15}$/;

    if(!phonePattern.test(phone)){
        errorMessage.textContent = "Phone number must contain 9-15 digits.";
        return;
    }

    if(gender === ""){
        errorMessage.textContent = "Please select your gender.";
        return;
    }

    if(age < 1 || age > 120){
        errorMessage.textContent = "Please enter a valid age.";
        return;
    }

    if(department === ""){
        errorMessage.textContent = "Please choose a department.";
        return;
    }

    if(doctor === ""){
        errorMessage.textContent = "Please select a doctor.";
        return;
    }

    if(date === ""){
        errorMessage.textContent = "Please choose an appointment date.";
        return;
    }

    if(time === ""){
        errorMessage.textContent = "Please choose an appointment time.";
        return;
    }

    // Success
    errorMessage.className = "success-message";
    errorMessage.textContent = "Appointment booked successfully!";

    form.reset();
});
