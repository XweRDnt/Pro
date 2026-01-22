document.addEventListener('DOMContentLoaded', function () {
    
    // ===== ПЛАВНАЯ ПРОКРУТКА ПО ЯКОРЯМ =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== АКТИВНЫЙ КЛАСС ДЛЯ НАВИГАЦИИ ПРИ СКРОЛЛЕ =====
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar. classList.add('scrolled');
        } else {
            navbar. classList.remove('scrolled');
        }
    });

    // ===== ВАЛИДАЦИЯ ФОРМЫ =====
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            if (! form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList. add('was-validated');
        });
    }

    // ===== АНИМАЦИЯ ПРИ ПРОКРУТКЕ =====
    const observerOptions = {
        threshold:  0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries. forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry. target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('. advantage-circle, .form-section').forEach(el => {
        observer.observe(el);
    });

    console.log('✅ IronFit сайт готов к работе! ');
});
