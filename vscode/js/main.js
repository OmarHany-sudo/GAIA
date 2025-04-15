// Initialize AOS for animations
AOS.init({
    duration: 1000,
    once: true,
});

// Language Toggle
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        if (currentLang === 'ar') {
            window.location.href = '../en/index.html';
        } else {
            window.location.href = '../ar/index.html';
        }
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Load Theme Preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize Swiper for Testimonials
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});

// Counter Animation for Statistics
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCount();
        }
    }, { threshold: 0.5 });

    observer.observe(counter);
});

// Search Functionality for Blog
const searchInput = document.getElementById('searchInput');
const newsCards = document.querySelectorAll('.news-card');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        newsCards.forEach(card => {
            const title = card.querySelector('h5').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            if (title.includes(searchText) || description.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}