// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(0); 
        if (targetId && document.querySelector(targetId)) {
            document.querySelector(targetId).scrollIntoView
