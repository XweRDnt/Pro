/* ===== ОБЩИЕ СТИЛИ ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: #f9f9f9;
    color: #333;
}

/* ===== НАВИГАЦИЯ ===== */
.navbar {
    background-color: #1a1a1a ! important;
    box-shadow:  0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 1px;
}

.navbar-brand . text-primary {
    color: #e31c25 !important;
}

/* ===== HERO SECTION ===== */
. hero {
    min-height: 100vh;
    background: linear-gradient(135deg, #e31c25 0%, #a01018 50%, #1a1a1a 100%);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
}

.hero:: before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    z-index:  0;
}

.hero . container {
    position: relative;
    z-index: 1;
}

. hero-title {
    font-size: clamp(2rem, 8vw, 3. 5rem);
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    animation: slideDown 0.8s ease-out;
}

.hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    font-weight: 400;
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: 2rem;
    animation: slideUp 0.8s ease-out 0.2s both;
}

.btn-primary {
    background-color: #e31c25;
    border-color: #e31c25;
    font-weight: 700;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    animation: slideUp 0.8s ease-out 0.4s both;
}

.btn-primary:hover {
    background-color: #c1181f;
    border-color: #c1181f;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(227, 28, 37, 0.4);
}

/* ===== АНИМАЦИИ ===== */
@keyframes slideDown {
    from {
        opacity: 0;
        transform:  translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ===== ПРЕИМУЩЕСТВА ===== */
.advantages {
    padding: 4rem 0;
}

.advantage-circle {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #e31c25, #a01018);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: auto;
    box-shadow: 0 8px 30px rgba(227, 28, 37, 0.2);
    transition: all 0.3s ease;
}

.advantage-circle:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(227, 28, 37, 0.3);
}

.advantages h5 {
    color: #1a1a1a;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.advantages p {
    color: #666;
    font-size: 0.95rem;
}

/* ===== ФОРМА ===== */
.form-section {
    padding: 4rem 1rem;
    background-color: #f0f0f0;
}

.form-section h2 {
    color: #1a1a1a;
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
}

.form-control,
.form-select {
    background-color: white;
    border: 2px solid #e0e0e0;
    color: #333;
    font-size: 1rem;
    padding: 0.75rem;
    transition: all 0.3s ease;
}

.form-control:focus,
.form-select:focus {
    border-color: #e31c25;
    box-shadow: 0 0 0 0.2rem rgba(227, 28, 37, 0.15);
    background-color: white;
}

.form-control:: placeholder {
    color: #999;
}

/* ===== КОНТАКТЫ ===== */
.contacts {
    background:  linear-gradient(135deg, #1a1a1a, #2a2a2a);
}

.contacts h3 {
    font-size: 2rem;
    margin-bottom:  2rem;
}

.contacts a {
    text-decoration: none;
    transition: all 0.3s ease;
}

.contacts a:hover {
    color: #e31c25 !important;
}

.social-links . btn {
    font-weight: 600;
    padding: 0.5rem 1. 5rem;
    border-width: 2px;
    transition: all 0.3s ease;
}

.social-links .btn:hover {
    background-color: #e31c25;
    border-color: #e31c25;
}

/* ===== FOOTER ===== */
footer {
    background-color: #0a0a0a;
}

footer p {
    margin-bottom: 0;
}

/* ===== АДАПТИВНОСТЬ ===== */
@media (max-width: 768px) {
    .hero {
        min-height: 80vh;
        padding: 2rem 1rem;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .advantage-circle {
        width: 80px;
        height: 80px;
    }

    . advantages {
        padding: 2rem 0;
    }

    . form-section {
        padding: 2rem 1rem;
    }

    .contacts {
        padding: 2rem 0;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size:  1.5rem;
        margin-bottom: 1rem;
    }

    .hero-subtitle {
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    }

    .btn-primary {
        padding: 0.6rem 1.5rem ! important;
        font-size:  0.95rem;
    }

    .advantage-circle {
        width: 70px;
        height: 70px;
        font-size: 0.9rem;
    }
}
