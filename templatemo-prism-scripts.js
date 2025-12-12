// JavaScript Document

/*





*/


// Portfolio data for carousel

        const portfolioData = [
            {
                id: 1,
                title: 'Bases de datos',
                description: 'Diseñar y consultar bases de datos relacionales para almacenar y acceder a información de forma eficiente.',
                image: 'images/neural-network.jpg',
                tech: ['MySQL', 'SQL Server', 'PostgreSQL']
            },
            {
                id: 2,
                title: 'Análisis de datos y visualización',
                description: 'Limpiar, transformar y visualizar datos para generar reportes claros y apoyar la toma de decisiones.',
                image: 'images/quantum-cloud.jpg',
                tech: ['SQL', 'Excel', 'Power BI']
            },
            {
                id: 3,
                title: 'Soporte Tecnico',
                description: 'Técnico en soporte informático con experiencia en diagnóstico y reparación de computadoras, instalación y configuración de sistemas operativos, redes básicas, brindando atención a usuarios y resolviendo incidencias de forma rápida y clara.',
                image: 'images/blockchain-vault.jpg',
                tech: ['AnyDesk', 'Instalaciones', 'Verificacion']
            },
            {
                id: 4,
                title: 'Desarrollo web',
                description: 'Desarrollador web junior con experiencia creando sitios y landing pages en HTML, CSS y JavaScript, aplicando buenas prácticas de maquetación responsive y cuidando la estructura del código.',
                image: 'images/cyber-defense.jpg',
                tech: ['HTTML5', 'CSS3', 'PHP']
            },
            {
                id: 5,
                title: 'Desarrollo de Software',
                description: 'Diseño y mantengo soluciones de software desde la idea hasta una versión funcional, cuidando estructura, legibilidad y buenas prácticas básicas',
                image: 'images/data-nexus.jpg',
                tech: ['Python', 'JavaScript', 'C++']
            },
            {
                id: 6,
                title: 'Automatizacion de procesos',
                description: 'Automatización de procesos con scripts e inteligencia artificial para ejecutar tareas repetitivas de forma automática, reduciendo errores y mejorando la eficiencia.',
                image: 'images/ar-interface.jpg',
                tech: ['Python', 'Bash', 'TensorFlow']
            },
            {
                id: 7,
                title: 'Inteligencia artificial',
                description: 'Aplicar modelos de IA y ML para clasificar datos, detectar patrones y tomar decisiones automatizadas.',
                image: 'images/iot-matrix.jpg',
                tech: ['TensorFlow', 'DeepL', 'Chatbots']
            }
        ];

        // Skills data
        const skillsData = [
            { name: 'React.js', icon: '⚛️', level: 95, category: 'frontend' },
            { name: 'Node.js', icon: '🟢', level: 90, category: 'backend' },
            { name: 'TypeScript', icon: '📘', level: 88, category: 'frontend' },
            { name: 'SQL', icon: '☁️', level: 92, category: 'cloud' },
            { name: 'Docker', icon: '🐳', level: 85, category: 'cloud' },
            { name: 'Python', icon: '🐍', level: 95, category: 'backend' },
            { name: 'Kubernetes', icon: '☸️', level: 82, category: 'cloud' },
            { name: 'JavaScript', icon: '◈', level: 87, category: 'backend' },
            { name: 'TensorFlow', icon: '🤖', level: 78, category: 'emerging' },
            { name: 'Java', icon: '🔗', level: 75, category: 'emerging' },
            { name: 'Vue.js', icon: '💚', level: 85, category: 'frontend' },
            { name: 'MongoDB', icon: '🍃', level: 95, category: 'backend' }
        ];

        // Scroll to section function
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            const header = document.getElementById('header');
            if (section) {
                const headerHeight = header.offsetHeight;
                const targetPosition = section.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Initialize particles for philosophy section
        function initParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random horizontal position
                particle.style.left = Math.random() * 100 + '%';
                
                // Start particles at random vertical positions throughout the section
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay for natural movement
                particle.style.animationDelay = Math.random() * 20 + 's';
                
                // Random animation duration for variety
                particle.style.animationDuration = (18 + Math.random() * 8) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize carousel
        let currentIndex = 0;
        const carousel = document.getElementById('carousel');
        const indicatorsContainer = document.getElementById('indicators');

        function createCarouselItem(data, index) {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.dataset.index = index;
            
            const techBadges = data.tech.map(tech => 
                `<span class="tech-badge">${tech}</span>`
            ).join('');
            
            item.innerHTML = `
                <div class="card">
                    <div class="card-number">0${data.id}</div>
                    <div class="card-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <h3 class="card-title">${data.title}</h3>
                    <p class="card-description">${data.description}</p>
                    <div class="card-tech">${techBadges}</div>
                    <button class="card-cta" onclick="scrollToSection('about')">Explore</button>
                </div>
            `;
            
            return item;
        }

        function initCarousel() {
            // Create carousel items
            portfolioData.forEach((data, index) => {
                const item = createCarouselItem(data, index);
                carousel.appendChild(item);
                
                // Create indicator
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.dataset.index = index;
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            updateCarousel();
        }

        function updateCarousel() {
            const items = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.indicator');
            const totalItems = items.length;
            const isMobile = window.innerWidth <= 768;
            const isTablet = window.innerWidth <= 1024;
            
            items.forEach((item, index) => {
                // Calculate relative position
                let offset = index - currentIndex;
                
                // Wrap around for continuous rotation
                if (offset > totalItems / 2) {
                    offset -= totalItems;
                } else if (offset < -totalItems / 2) {
                    offset += totalItems;
                }
                
                const absOffset = Math.abs(offset);
                const sign = offset < 0 ? -1 : 1;
                
                // Reset transform
                item.style.transform = '';
                item.style.opacity = '';
                item.style.zIndex = '';
                item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
                
                // Adjust spacing based on screen size
                let spacing1 = 400;
                let spacing2 = 600;
                let spacing3 = 750;
                
                if (isMobile) {
                    spacing1 = 280;  // Was 400, now 100px closer
                    spacing2 = 420;  // Was 600, now 180px closer
                    spacing3 = 550;  // Was 750, now 200px closer
                } else if (isTablet) {
                    spacing1 = 340;
                    spacing2 = 520;
                    spacing3 = 650;
                }
                
                if (absOffset === 0) {
                    // Center item
                    item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
                    item.style.opacity = '1';
                    item.style.zIndex = '10';
                } else if (absOffset === 1) {
                    // Side items
                    const translateX = sign * spacing1;
                    const rotation = isMobile ? 25 : 30;
                    const scale = isMobile ? 0.88 : 0.85;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.8';
                    item.style.zIndex = '5';
                } else if (absOffset === 2) {
                    // Further side items
                    const translateX = sign * spacing2;
                    const rotation = isMobile ? 35 : 40;
                    const scale = isMobile ? 0.75 : 0.7;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.5';
                    item.style.zIndex = '3';
                } else if (absOffset === 3) {
                    // Even further items
                    const translateX = sign * spacing3;
                    const rotation = isMobile ? 40 : 45;
                    const scale = isMobile ? 0.65 : 0.6;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.3';
                    item.style.zIndex = '2';
                } else {
                    // Hidden items (behind)
                    item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
                    item.style.opacity = '0';
                    item.style.zIndex = '1';
                }
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % portfolioData.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
            updateCarousel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        // Initialize hexagonal skills grid
        function initSkillsGrid() {
            const skillsGrid = document.getElementById('skillsGrid');
            const categoryTabs = document.querySelectorAll('.category-tab');
            
            function displaySkills(category = 'all') {
                skillsGrid.innerHTML = '';
                
                const filteredSkills = category === 'all' 
                    ? skillsData 
                    : skillsData.filter(skill => skill.category === category);
                
                filteredSkills.forEach((skill, index) => {
                    const hexagon = document.createElement('div');
                    hexagon.className = 'skill-hexagon';
                    hexagon.style.animationDelay = `${index * 0.1}s`;
                    
                    hexagon.innerHTML = `
                        <div class="hexagon-inner">
                            <div class="hexagon-content">
                                <div class="skill-icon-hex">${skill.icon}</div>
                                <div class="skill-name-hex">${skill.name}</div>
                                <div class="skill-level">
                                    <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                                </div>
                                <div class="skill-percentage-hex">${skill.level}%</div>
                            </div>
                        </div>
                    `;
                    
                    skillsGrid.appendChild(hexagon);
                });
            }
            
            categoryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    displaySkills(tab.dataset.category);
                });
            });
            
            displaySkills();
        }

        // Event listeners
        document.getElementById('nextBtn').addEventListener('click', nextSlide);
        document.getElementById('prevBtn').addEventListener('click', prevSlide);

        // Auto-rotate carousel
        setInterval(nextSlide, 5000);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Update carousel on window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateCarousel();
            }, 250);
        });

        // Initialize on load
        initCarousel();
        initSkillsGrid();
        initParticles();

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling and active navigation
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        // Update active navigation on scroll
        function updateActiveNav() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        const href = link.getAttribute('href').substring(1);
                        if (href === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);

        // Animated counter for stats
        function animateCounter(element) {
            const target = parseInt(element.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(counter);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        }

        // Intersection Observer for stats animation
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(number => {
                        if (!number.classList.contains('animated')) {
                            number.classList.add('animated');
                            animateCounter(number);
                        }
                    });
                }
            });
        }, observerOptions);

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message
            alert(`Thank you ${data.name}! Your message has been transmitted successfully. We'll respond within 24 hours.`);
            
            // Reset form
            contactForm.reset();
        });

        // Loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
            }, 1500);
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });


// =============================================
// PROYECTOS - Projects Section JavaScript
// =============================================

// Array de proyectos - AQUÍ PUEDES AGREGAR MÁS PROYECTOS FÁCILMENTE
const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'web',
        description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.',
        image: 'images/project-ecommerce.jpg',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/tuusuario/proyecto1',
        demo: 'https://proyecto1-demo.com'
    },
    {
        id: 2,
        title: 'Sistema de Gestión CRM',
        category: 'web',
        description: 'Sistema CRM personalizado para gestión de clientes, ventas y seguimiento de leads con dashboard interactivo.',
        image: 'images/project-crm.jpg',
        tech: ['Vue.js', 'Python', 'PostgreSQL'],
        github: 'https://github.com/tuusuario/proyecto2',
        demo: 'https://proyecto2-demo.com'
    },
    {
        id: 3,
        title: 'Chatbot con IA',
        category: 'ai',
        description: 'Asistente virtual inteligente que responde consultas de usuarios usando procesamiento de lenguaje natural.',
        image: 'images/project-chatbot.jpg',
        tech: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
        github: 'https://github.com/tuusuario/proyecto3',
        demo: null
    },
    {
        id: 4,
        title: 'Dashboard de Análisis',
        category: 'data',
        description: 'Dashboard interactivo para visualización de datos empresariales con gráficos en tiempo real y reportes automáticos.',
        image: 'images/project-dashboard.jpg',
        tech: ['Power BI', 'Python', 'SQL Server'],
        github: 'https://github.com/tuusuario/proyecto4',
        demo: 'https://proyecto4-demo.com'
    },
    {
        id: 5,
        title: 'Automatización RPA',
        category: 'automation',
        description: 'Robots de automatización para tareas repetitivas: extracción de datos, generación de reportes y envío de emails.',
        image: 'images/project-rpa.jpg',
        tech: ['Python', 'Selenium', 'Pandas'],
        github: 'https://github.com/tuusuario/proyecto5',
        demo: null
    },
    {
        id: 6,
        title: 'Sistema de Reconocimiento Facial',
        category: 'ai',
        description: 'Aplicación de reconocimiento facial para control de acceso con detección en tiempo real y registro de eventos.',
        image: 'images/project-facial.jpg',
        tech: ['Python', 'OpenCV', 'DeepFace'],
        github: 'https://github.com/tuusuario/proyecto6',
        demo: null
    },
    {
        id: 7,
        title: 'API REST Escalable',
        category: 'web',
        description: 'API REST robusta y escalable con autenticación JWT, rate limiting y documentación Swagger completa.',
        image: 'images/project-api.jpg',
        tech: ['Node.js', 'Express', 'Docker', 'AWS'],
        github: 'https://github.com/tuusuario/proyecto7',
        demo: 'https://proyecto7-demo.com'
    },
    {
        id: 8,
        title: 'Predicción con Machine Learning',
        category: 'ai',
        description: 'Modelo de ML para predicción de ventas basado en datos históricos con precisión del 92%.',
        image: 'images/project-ml.jpg',
        tech: ['Python', 'Scikit-learn', 'Jupyter'],
        github: 'https://github.com/tuusuario/proyecto8',
        demo: null
    }
];

// Función para crear una tarjeta de proyecto
function createProjectCard(project) {
    const demoLink = project.demo ? 
        `<a href="${project.demo}" target="_blank" class="project-link" title="Ver Demo">🚀</a>` : '';

    const githubLink = project.github ? 
        `<a href="${project.github}" target="_blank" class="project-link" title="Ver en GitHub">💻</a>` : '';

    const techTags = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    return `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='images/placeholder.jpg'">
                <div class="project-overlay">
                    <div class="project-links">
                        ${githubLink}
                        ${demoLink}
                    </div>
                </div>
            </div>
            <div class="project-info">
                <span class="project-category">${getCategoryName(project.category)}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
            </div>
        </div>
    `;
}

// Función para obtener el nombre legible de la categoría
function getCategoryName(category) {
    const categories = {
        'web': 'Desarrollo Web',
        'ai': 'Inteligencia Artificial',
        'automation': 'Automatización',
        'data': 'Análisis de Datos'
    };
    return categories[category] || category;
}

// Inicializar proyectos al cargar la página
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    // Renderizar todos los proyectos
    projectsGrid.innerHTML = projectsData.map(project => 
        createProjectCard(project)
    ).join('');

    // Agregar event listeners a los filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar botón activo
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filtrar proyectos
            const filter = btn.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
}

// Función para filtrar proyectos
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// =============================================
// CÓMO AGREGAR MÁS PROYECTOS
// =============================================
/*
Para agregar un nuevo proyecto, simplemente agrega un nuevo objeto al array projectsData:

{
    id: 9,  // ID único (número siguiente)
    title: 'Nombre del Proyecto',
    category: 'web',  // Opciones: 'web', 'ai', 'automation', 'data'
    description: 'Descripción breve del proyecto (1-2 líneas)',
    image: 'images/mi-proyecto.jpg',  // Ruta a la imagen
    tech: ['Tecnología1', 'Tecnología2', 'Tecnología3'],  // Array de tecnologías
    github: 'https://github.com/tuusuario/proyecto',  // URL de GitHub (o null si no hay)
    demo: 'https://demo.com'  // URL de demo en vivo (o null si no hay)
}

¡Eso es todo! El proyecto aparecerá automáticamente en la página.
*/

// =============================================
// ANIMACIONES SCROLL - Sobre Mí Section
// =============================================

// Función para detectar cuando elementos entran en el viewport
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos que deben animarse
    const animatedElements = document.querySelectorAll(
        '.highlight-item, .timeline-item, .profile-card, .project-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// =============================================

// =============================================
// ACTUALIZAR MENÚ DE NAVEGACIÓN
// =============================================

// Agregar enlaces al menú (copiar esto en el HTML del nav)
/*
<li><a href="#projects" onclick="scrollToSection('projects')">Proyectos</a></li>
<li><a href="#about" onclick="scrollToSection('about')">Sobre Mí</a></li>
*/
