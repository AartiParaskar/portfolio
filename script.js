// Typing Effect
const textArray = ["Web Developer", "Frontend Developer"];
let typingElement = document.getElementById("typing");
let arrayIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[arrayIndex].length) {
        typingElement.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        arrayIndex = (arrayIndex + 1) % textArray.length;
        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeEffect();
});

// Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
    this.reset();
});
