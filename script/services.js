const learnButtons = document.querySelectorAll(".button");


learnButtons.forEach(button => {

    button.addEventListener("click", function(){

        const service = this.dataset.service;

        let description = "";


        switch(service){

            case "General Consultation":
                description = 
                "Our doctors provide professional medical consultation, diagnosis, and treatment advice for different health conditions.";
                break;


            case "Laboratory Services":
                description =
                "Our laboratory provides accurate medical tests using modern equipment to support proper diagnosis.";
                break;


            case "Pharmacy":
                description =
                "Our pharmacy provides quality medicines and professional guidance to help you manage your health.";
                break;


            case "Emergency Care":
                description =
                "We provide quick emergency medical attention for urgent health situations with experienced healthcare professionals.";
                break;


            case "Health Screening":
                description =
                "Regular health screening helps detect possible health problems early and keeps you informed about your health.";
                break;


            case "Dental Care":
                description =
                "Our dental services include checkups, cleaning, fillings, extraction, and other treatments for a healthy smile.";
                break;


            case "Home Medical Services":
                description =
                "We bring healthcare support directly to your home for patients who need convenient medical assistance.";
                break;


            case "Nutrition and Diabetes":
                description =
                "Our specialists provide nutrition advice and diabetes management plans for a healthier lifestyle.";
                break;

        }


        alert(service + "\n\n" + description);

    });

});

const bookappointment = document.getElementById("bookappointment");
const contactsupport = document.getElementById("contactsupport");

bookappointment.addEventListener("click", function(){
    window.location.href = "pages/appointment.html";
});

contactsupport.addEventListener("click", function(){
    window.location.href = "pages/contact.html";
});