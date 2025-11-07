// typing animation script.js
var typed = new Typed('.typing', {
    strings: [" ", "Computer Engineer", "Web Developer", "UI/UX Designer", "Tech Enthusiast", "Photographer"], 
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
});

var typed1 = new Typed('.typing1', {
    strings: ["Wongani Edgar Kamanga"], 
    typeSpeed: 100, 
    backSpeed: 60,
    loop: false
});

// click active highlight
const navLinks = document.querySelectorAll('.nav li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });
});

// scroll-based highlight (scroll spy)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
