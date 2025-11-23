// ============================================
// MEGA ACADEMIA - SCRIPT
// ============================================

// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        // Mudar ícone
        if (mobileNav.classList.contains('active')) {
            menuToggle.innerHTML = '<span class="menu-icon">✕</span>';
        } else {
            menuToggle.innerHTML = '<span class="menu-icon">☰</span>';
        }
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        menuToggle.innerHTML = '<span class="menu-icon">☰</span>';
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validação
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido!');
            return;
        }

        // Criar mensagem para WhatsApp
        const whatsappMessage = `Olá! Meu nome é ${name}, meu email é ${email}${phone ? `, meu telefone é ${phone}` : ''}. ${message}`;
        const whatsappUrl = `https://wa.me/5561933525290?text=${encodeURIComponent(whatsappMessage)}`;

        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');

        // Limpar formulário
        contactForm.reset();
    });
}

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Adicionar classe ativa ao link de navegação baseado na seção visível
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animação de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards
document.querySelectorAll('.activity-card, .amenity-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

console.log('Mega Academia - Script carregado com sucesso!');
