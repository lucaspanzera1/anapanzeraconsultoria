const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentSlide = 0;

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        document.querySelectorAll('.dot')[currentSlide].classList.add('active');
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('newsletterModal');
    const btn = document.getElementById('newsletterBtn');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('newsletterForm');

    btn.onclick = function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    form.onsubmit = function(e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        alert('Obrigado por se inscrever! Em breve você receberá nossas novidades.');
        
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        form.reset();
    }
});