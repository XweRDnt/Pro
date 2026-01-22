document.addEventListener("DOMContentLoaded", function () {
    
    // 3.1 Плавная прокрутка для якорных ссылок (в современных браузерах работает через CSS scroll-behavior, но для надежности JS)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Закрыть мобильное меню при клике
                const navbarToggler = document.querySelector('.navbar-toggler');
                const collapse = document.querySelector('.navbar-collapse');
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    bootstrap.Collapse.getInstance(collapse).hide();
                }
            }
        });
    });

    // 3.1 Анимация появления блоков при скролле (Intersection Observer)
    const observerOptions = {
        threshold: 0.2 // Срабатывает, когда 20% элемента видно
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Анимировать только один раз
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });

    // Изменение прозрачности навбара при скролле
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black', 'shadow');
            navbar.classList.remove('bg-transparent');
        } else {
            // Для Hero секции можно сделать прозрачным, если нужно, но оставим темным для читаемости
        }
    });
});
