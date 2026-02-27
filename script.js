document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling is mostly handled by CSS (scroll-behavior),
    // but prevent default for '#' and ensure it doesn't jump to top unnecessarily.

    const darkToggleLink = document.getElementById("dark-mode-toggle");

    if (darkToggleLink) {
        darkToggleLink.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.toggle("dark-mode");
        });
    }

    // Handle active state on nav links when clicked
    const navLinks = document.querySelectorAll("#sec-1 nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active from all links
            navLinks.forEach(l => l.classList.remove("active"));
            // Add active to the clicked one
            this.classList.add("active");
        });
    });
});


