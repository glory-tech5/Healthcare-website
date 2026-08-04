const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    btn.textContent = "Appointment Booked";
    btn.style.backgroundColor = "green";
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
        btn.style.transform ="scale(1)";
        
    }, 150);
})
