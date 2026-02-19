document.addEventListener("scroll", function() {
    let sections = document.querySelectorAll(".section");
    let images = document.querySelectorAll(".bg-img");
    
    let closestSection = null;
    let minDistance = Infinity;

    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        let distance = Math.abs(rect.top - window.innerHeight / 2);
        
        if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
        }
    });

    if (closestSection) {
        let index = closestSection.getAttribute("data-index");
        images.forEach(img => img.style.opacity = "0");
        let activeImg = document.querySelector(`.bg-img[data-section='${index}']`);
        if (activeImg) activeImg.style.opacity = "1";
    }
});

document.getElementById("ticketType").addEventListener("change", function() {
    let companyField = document.getElementById("companyField");
    if (this.value === "press") {
        companyField.style.display = "block";
    } else {
        companyField.style.display = "none";
    }
});
