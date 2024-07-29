// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission alert (this is just for demo purposes, you'll need to implement actual form handling)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Tu solicitud ha sido enviada. Nos pondremos en contacto contigo pronto.');
});
