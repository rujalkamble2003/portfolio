// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(0); 
        if (targetId && document.querySelector(targetId)) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add a Dynamic Typing Effect for Introduction Text (Optional)
const textArray = ["Web Developer", ".NET Enthusiast", "SQL Expert", "JavaScript Coder"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector('.lead');

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, 500);
    }
}

// Start Typing Effect
if (typingElement) {
    setTimeout(typeText, 500);
}

// Scroll to Top Button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "⬆ Top";
scrollToTopBtn.className = "scroll-top-btn";
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
