/* ========================================
   JavaScript Functionality
   ======================================== */
// window.open('alert.html', 'alertWindow', 'width=600,height=600');
// let result = confirm("This portfolio is best viewed on a desktop or laptop. Do you want to continue?");

// let messange = result ? "Great! Enjoy exploring the portfolio." : "No worries! Feel free to check it out on a larger screen for the best experience.";
// alert(messange);

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Certificates Data - Dynamically loaded from certificate folder
    // ========================================
    const certificates = [{
            title: "AWS Cloud Foundations",
            organization: "AWS Skill Builder",
            date: "2024",
            icon: "fas fa-cloud",
            file: "certificate/AWS_Cloud_Foundations_SenthamilRaja.jpg"
        },
        {
            title: "Business and Data Analytics",
            organization: "SkillUp",
            date: "2024",
            icon: "fas fa-chart-bar",
            file: "certificate/Business and Data Analytics.jpg"
        },
        {
            title: "Full Stack Development Internship",
            organization: "CodeBind",
            date: "2024",
            icon: "fas fa-laptop-code",
            file: "certificate/CodeBind_FullStack_Internship_SenthamilRaja.jpg"
        },
        {
            title: "Full Stack Development Internship",
            organization: "CodeBind",
            date: "2024",
            icon: "fas fa-laptop-code",
            file: "certificate/CodeBind_FullStack_Internship_SenthamilRaja (2).jpg"
        },
        {
            title: "Python AI Workshop",
            organization: "CodeBind",
            date: "2024",
            icon: "fab fa-python",
            file: "certificate/CodeBind_Python_AI_Workshop_SenthamilRaja.jpg"
        },
        {
            title: "Data Science Fundamental",
            organization: "IBM SkillsBuild",
            date: "2024",
            icon: "fas fa-database",
            file: "certificate/data-science-fundamental-ibm.jpg"
        },
        {
            title: "Data Science Internship",
            organization: "DurgaTech",
            date: "2024",
            icon: "fas fa-chart-line",
            file: "certificate/DurgaTech_Internship_SenthamilRaja.jpg"
        },
        {
            title: "First AI Model",
            organization: "SkillUp",
            date: "2024",
            icon: "fas fa-robot",
            file: "certificate/First ai model.jpg"
        },
        {
            title: "HTML & CSS Bootcamp",
            organization: "LetsUpgrade",
            date: "2023",
            icon: "fas fa-code",
            file: "certificate/html-css.jpg"
        },
        {
            title: "AI Agents",
            organization: "IBM SkillsBuild",
            date: "2024",
            icon: "fas fa-brain",
            file: "certificate/ibm-ai-agents.jpg"
        },
        {
            title: "Machine Learning Flash",
            organization: "SkillUp",
            date: "2024",
            icon: "fas fa-brain",
            file: "certificate/machine-learning-flash.jpg"
        },
        {
            title: "Microsoft Certification",
            organization: "Microsoft",
            date: "2024",
            icon: "fab fa-microsoft",
            file: "certificate/Microsoft_Certification_SenthamilRaja.jpg"
        },
        {
            title: "Oracle Foundations Associate",
            organization: "Oracle",
            date: "2024",
            icon: "fas fa-database",
            file: "certificate/Oracle_Foundations_Associate_SenthamilRaja.jpg"
        },
        {
            title: "Python for Data Science",
            organization: "SkillUp",
            date: "2024",
            icon: "fab fa-python",
            file: "certificate/Python for Data Science.jpg"
        },
        {
            title: "Python for Beginners",
            organization: "SkillUp",
            date: "2024",
            icon: "fab fa-python",
            file: "certificate/python-for-beginners-skillup.jpg"
        },
        {
            title: "Salesforce Certification",
            organization: "Salesforce",
            date: "2024",
            icon: "fas fa-cloud",
            file: "certificate/Salesforce_Certification_SenthamilRaja.jpg"
        },
        {
            title: "SQL Bootcamp",
            organization: "LetsUpgrade",
            date: "2023",
            icon: "fas fa-database",
            file: "certificate/SQL Bootcamp.jpg"
        },
        {
            title: "Data Science Internship",
            organization: "YBI Foundation",
            date: "2024",
            icon: "fas fa-chart-line",
            file: "certificate/YBI_Data_Science_Internship_SenthamilRaja.jpg"
        },
        {
            title: "Zero to Hero Python",
            organization: "SkillUp",
            date: "2024",
            icon: "fab fa-python",
            file: "certificate/zero-to-hero-python.jpg"
        }
    ];

    // ========================================
    // Render Certificates
    // ========================================
    function renderCertificates() {
        const certGrid = document.getElementById('certificationsGrid');
        if (!certGrid) return;

        certGrid.innerHTML = certificates.map(cert => `
            <div class="certification-card">
                <div class="cert-icon">
                    <i class="${cert.icon}"></i>
                </div>
                <h3>${cert.title}</h3>
                <p>${cert.organization}</p>
                <span class="cert-date">${cert.date}</span>
                <a href="${cert.file}" target="_blank" class="cert-btn">
                    View Certificate
                </a>
            </div>
        `).join('');

        // Re-apply tilt effect to new certification cards
        const certCards = document.querySelectorAll('.certification-card');
        certCards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // Initialize certificates
    renderCertificates();

    // ========================================
    // Particles Effect
    // ========================================
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Create particles
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

    // ========================================
    // Typewriter Effect
    // ========================================
    const typedText = document.querySelector('.typed-text');
    const skills = [
        'Machine Learning',
        'Deep Learning',
        'Data Analysis',
        'Natural Language Processing',
        'Computer Vision',
        'Data Visualization'
    ];
    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeWriter() {
        const currentSkill = skills[skillIndex];

        if (isDeleting) {
            typedText.textContent = currentSkill.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typedText.textContent = currentSkill.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentSkill.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            skillIndex = (skillIndex + 1) % skills.length;
            typeSpeed = 500;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    if (typedText) {
        typeWriter();
    }

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ========================================
    // Mobile Menu
    // ========================================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ========================================
    // Smooth Scroll for Navigation
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // ========================================
    // Active Navigation Link
    // ========================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ========================================
    // Scroll Animation (Intersection Observer)
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.closest('#skills')) {
                    animateProgressBars();
                }

                if (entry.target.closest('#about')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .skill-card, .project-card, .certification-card, .blog-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // ========================================
    // Progress Bar Animation
    // ========================================
    let progressAnimated = false;

    function animateProgressBars() {
        if (progressAnimated) return;
        progressAnimated = true;

        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 200);
        });
    }

    // ========================================
    // Counter Animation
    // ========================================
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;
        countersAnimated = true;

        const counters = document.querySelectorAll('.stat-number');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }

    // ========================================
    // Skills Filtering
    // ========================================
    const skillFilterBtns = document.querySelectorAll('#skills .filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    skillFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            skillFilterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ========================================
    // Projects Filtering
    // ========================================
    const projectFilterBtns = document.querySelectorAll('#projects .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    projectFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            projectFilterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ========================================
    // Blog Filtering
    // ========================================
    const blogFilterBtns = document.querySelectorAll('#blog .filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    blogFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            blogFilterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            blogCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ========================================
    // Project Modal
    // ========================================
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

    const projectData = {
        project1: {
            title: 'Crop Growth Pattern Analysis',
            category: ['Data Science', 'ML', 'DL', 'AI'],
            description: 'Developed an AI-based system to analyze crop growth patterns using multispectral time-series satellite data. Applied attention-based neural networks to capture temporal variations and improve crop monitoring accuracy.',
            tech: [
                'Python',
                'NumPy',
                'Pandas',
                'TensorFlow',
                'Deep Learning',
                'Time-Series'
            ],
            results: [
                'Processed multispectral satellite datasets',
                'Captured temporal patterns using attention mechanisms',
                'Improved crop growth understanding for precision agriculture'
            ]
        },

        project2: {
            title: 'Sequential Emotion Transition Recognition',
            category: ['AI', 'DL', 'NLP'],
            description: 'Built a transformer-based deep learning model to recognize emotion transitions in social media conversations by analyzing sequential message patterns instead of isolated text.',
            tech: [
                'Python',
                'NLP',
                'Transformers',
                'PyTorch',
                'Deep Learning'
            ],
            results: [
                'Modeled sequential emotional transitions',
                'Applied attention mechanisms for better context understanding',
                'Useful for mental health and social media analysis'
            ]
        },

        project3: {
            title: 'Data Visualization Dashboard',
            category: ['Data Analysis'],
            description: 'Designed interactive dashboards to analyze business data, identify trends, and present insights using effective visual storytelling techniques.',
            tech: [
                'Python',
                'Pandas',
                'Matplotlib',
                'Seaborn',
                'Tableau'
            ],
            results: [
                'Cleaned and analyzed structured datasets',
                'Visualized KPIs and trends clearly',
                'Improved insight interpretation through dashboards'
            ]
        },

        project4: {
            title: 'Student Performance Prediction System',
            category: ['Data Science', 'ML'],
            description: 'Developed a machine learning model to predict student academic performance based on attendance, internal assessments, and historical academic data.',
            tech: [
                'Python',
                'Scikit-learn',
                'Machine Learning',
                'EDA',
                'Pandas'
            ],
            results: [
                'Performed feature engineering and data preprocessing',
                'Compared multiple ML models',
                'Achieved reliable prediction accuracy'
            ]
        },

        project5: {
            title: 'Image Classification Using Deep Learning',
            category: ['DL', 'AI', 'Computer Vision'],
            description: 'Implemented a convolutional neural network (CNN) to classify images into multiple categories using deep learning techniques.',
            tech: [
                'Python',
                'TensorFlow',
                'Keras',
                'CNN',
                'OpenCV'
            ],
            results: [
                'Applied image preprocessing and augmentation',
                'Trained and evaluated CNN models',
                'Improved classification performance'
            ]
        },

        project6: {
            title: 'SQL-Based Data Analysis System',
            category: ['Data Analysis'],
            description: 'Performed data analysis using SQL queries to extract insights from relational databases through joins, aggregations, and filtering.',
            tech: [
                'MySQL',
                'SQL',
                'Database',
                'Data Analysis'
            ],
            results: [
                'Wrote complex SQL queries',
                'Extracted meaningful insights from data',
                'Optimized queries for better performance'
            ]
        }
    };

    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectData[projectId];

            if (project) {
                document.getElementById('modalTitle').textContent = project.title;
                document.getElementById('modalDescription').textContent = project.description;

                const techContainer = document.getElementById('modalTech');
                techContainer.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');

                const resultsContainer = document.getElementById('modalResults');
                resultsContainer.innerHTML = project.results.map(r => `<li>${r}</li>`).join('');

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // ========================================
    // Accordion for Case Studies
    // ========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ========================================
    // EmailJS Initialization (FIXED)
    // ========================================
    (function() {
        emailjs.init({
            publicKey: "-5LUDSsNyQetW_W0P"
        });
    })();

    // ========================================
    // Contact Form Validation & EmailJS Sending
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = document.querySelector('.submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('messageError').textContent = '';

            if (!nameInput.value.trim()) {
                document.getElementById('nameError').textContent = 'Name is required';
                isValid = false;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                document.getElementById('emailError').textContent = 'Enter a valid email';
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                document.getElementById('messageError').textContent = 'Message is required';
                isValid = false;
            }

            if (!isValid) return;

            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            try {
                await emailjs.sendForm(
                    "service_ui0p8dv",
                    "template_tq03cfu",
                    contactForm
                );

                contactForm.style.display = 'none';
                formSuccess.classList.add('active');

                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    formSuccess.classList.remove('active');
                }, 5000);

            } catch (error) {
                console.error("EmailJS Error:", error);
                alert("Failed to send message. Please try again later.");
            } finally {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    // ========================================
    // Input Focus Effects
    // ========================================
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('label').style.color = 'var(--accent-cyan)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.querySelector('label').style.color = 'var(--text-primary)';
        });
    });

    // ========================================
    // Parallax Effect for Background Shapes
    // ========================================
    window.addEventListener('scroll', function() {
        const shapes = document.querySelectorAll('.shape');
        const scrollY = window.scrollY;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // ========================================
    // Certificate Tilt Effect
    // ========================================
    const certCards = document.querySelectorAll('.certification-card');

    certCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // ========================================
    // Scroll to Top Button
    // ========================================
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToTop();
        });
    }

});

/* ========================================
   Additional Utility Functions
   ======================================== */

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

document.documentElement.style.scrollBehavior = 'smooth';