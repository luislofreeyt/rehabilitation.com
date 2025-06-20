document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                const headerOffset = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });


    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;


            alert(`Thank you, ${name}! Your message has been "sent" (this is a demo).`);
            contactForm.reset();
        });
    }


    const sections = document.querySelectorAll('section');
    const headerHeight = document.querySelector('.navbar').offsetHeight;

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50; // Adjusted for header and a small buffer
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        if (pageYOffset < sections[0].offsetTop - headerHeight) {
             navLinks.forEach(link => link.classList.remove('active'));
             document.querySelector('.nav-link[href="#hero"]').classList.add('active');
        }
    });

});


  const sliderTrack = document.getElementById('slider-track');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = 5;
  let currentIndex = 0;

  function goToSlide(index) {
    sliderTrack.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }

  setInterval(autoSlide, 4000); // Cambia de imagen cada 4 segundos
