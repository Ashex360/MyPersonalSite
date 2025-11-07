// ===== MAIN APPLICATION CONTROLLER =====
class PortfolioApp {
    constructor() {
        this.currentTheme = 'dark';
        this.soundEnabled = true;
        this.currentSection = 'home';
        this.isLoading = true;
        this.isMenuOpen = false;
        
        // Initialize everything when DOM is loaded
        this.init();
    }

    // ===== INITIALIZATION =====
    init() {
        this.setupEventListeners();
        this.initializeTheme();
        this.initializeCursor();
        this.initializeSinglePageNavigation();
        this.initializeAnimations();
        this.initializeMagneticButtons();
        this.initializeCounters();
        this.initializeSkillBars();
        this.initializeTypewriter();
        this.initializeScrollEffects();
        
        // Simulate loading completion
        setTimeout(() => {
            this.hideLoadingScreen();
        }, 2000);
    }

    // ===== LOADING SCREEN =====
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                this.isLoading = false;
                this.triggerWelcomeAnimation();
            }, 500);
        }
    }

    triggerWelcomeAnimation() {
        // Animate hero elements sequentially
        const heroElements = document.querySelectorAll('.text-reveal');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.animation = 'textReveal 0.8s ease forwards';
            }, index * 300);
        });

        // Animate buttons
        setTimeout(() => {
            const buttons = document.querySelectorAll('.hero-actions .btn');
            buttons.forEach((btn, index) => {
                setTimeout(() => {
                    btn.style.opacity = '1';
                    btn.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 1000);
    }

    // ===== THEME MANAGEMENT =====
    initializeTheme() {
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
        }
        this.applyTheme(this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('portfolio-theme', theme);
        
        // Update theme toggle UI
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const thumb = themeToggle.querySelector('.toggle-thumb');
            if (thumb) {
                thumb.style.transform = theme === 'dark' ? 'translateX(28px)' : 'translateX(0)';
            }
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        this.playSound('click');
    }

    // ===== CUSTOM CURSOR =====
    initializeCursor() {
        const cursorDot = document.getElementById('cursor-dot');
        const cursorCircle = document.getElementById('cursor-circle');
        
        if (!cursorDot || !cursorCircle) return;

        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let circleX = 0, circleY = 0;
        let scale = 1;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            // Dot follows mouse directly
            dotX = mouseX;
            dotY = mouseY;

            // Circle follows with delay
            circleX += (mouseX - circleX) * 0.1;
            circleY += (mouseY - circleY) * 0.1;

            // Apply transformations
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
            cursorCircle.style.transform = `translate(${circleX}px, ${circleY}px) scale(${scale})`;

            requestAnimationFrame(animateCursor);
        };

        animateCursor();

        // Handle hover states
        const hoverElements = document.querySelectorAll('a, button, .magnetic, .project-card, .tech-icon');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                scale = 1.5;
                cursorCircle.style.background = 'rgba(99, 102, 241, 0.2)';
                cursorDot.style.background = 'var(--accent-primary)';
                cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) scale(1.5)`;
            });

            el.addEventListener('mouseleave', () => {
                scale = 1;
                cursorCircle.style.background = 'transparent';
                cursorDot.style.background = 'var(--accent-primary)';
                cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) scale(1)`;
            });
        });

        // Hide cursor on touch devices
        if ('ontouchstart' in window) {
            cursorDot.style.display = 'none';
            cursorCircle.style.display = 'none';
        }
    }

    // ===== PAGE TRANSITIONS =====
   // In main.js - Replace initializePageTransitions with:

    initializeSinglePageNavigation() {
        const navLinks = document.querySelectorAll('.nav-link[data-section]');
        const sections = document.querySelectorAll('.section');
        
        // Smooth scroll to section
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('data-section');
                this.scrollToSection(targetId);
            });
        });

        // Update active section on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveSection();
        });

        // Initial active section update
        this.updateActiveSection();
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80; // Adjust for navbar height
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            this.updateNavigation(sectionId);
            this.playSound('navigation');
        }
    }

    updateActiveSection() {
        const scrollPosition = window.scrollY + 100;
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.updateNavigation(sectionId);
            }
        });
    }

    updateNavigation(activeSection) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === activeSection) {
                link.classList.add('active');
            }
        });
    }

    navigateToSection(sectionId) {
        // Update URL
        window.history.pushState({}, '', `#${sectionId}`);
        
        // Update navigation
        this.updateNavigation(sectionId);
        
        // Show section with transition
        this.showSection(sectionId);
        
        this.playSound('navigation');
    }

    updateNavigation(activeSection) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === activeSection) {
                link.classList.add('active');
            }
        });
    }

    showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
            
            // Trigger section-specific animations
            this.animateSectionEntrance(targetSection);
        }
    }

    animateSectionEntrance(section) {
        const animatedElements = section.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-in');
            }, index * 100);
        });
    }

    // ===== MAGNETIC BUTTONS =====
    initializeMagneticButtons() {
        const magneticButtons = document.querySelectorAll('[data-magnetic]');
        
        magneticButtons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                if (window.innerWidth < 768) return; // Disable on mobile
                
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const distance = Math.sqrt(x * x + y * y);
                const maxDistance = 50;
                
                if (distance < maxDistance) {
                    const moveX = (x / maxDistance) * 10;
                    const moveY = (y / maxDistance) * 10;
                    
                    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
                }
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }

    // ===== ANIMATIONS =====
    initializeAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Start counters if element has data-count
                    if (entry.target.hasAttribute('data-count')) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe all animate-on-scroll elements
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        // Floating tech icons animation
        this.animateFloatingTech();
    }

    animateFloatingTech() {
        const techIcons = document.querySelectorAll('.tech-icon');
        techIcons.forEach((icon, index) => {
            // Randomize animation slightly for each icon
            const delay = index * 0.5;
            const duration = 4 + Math.random() * 2;
            
            icon.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        });
    }

    // ===== COUNTER ANIMATIONS =====
    initializeCounters() {
        // Counters will be triggered by intersection observer
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    // ===== SKILL BARS =====
    initializeSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillItem = entry.target;
                    const level = skillItem.getAttribute('data-level');
                    const progressBar = skillItem.querySelector('.skill-progress');
                    
                    if (progressBar) {
                        setTimeout(() => {
                            progressBar.style.width = `${level}%`;
                        }, 200);
                    }
                }
            });
        }, { threshold: 0.5 });

        skillItems.forEach(item => observer.observe(item));
    }

    // ===== TYPEWRITER EFFECT =====
    initializeTypewriter() {
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        const roles = [
            'Backend Systems',
            'AI Solutions', 
            'Scalable APIs',
            'Machine Learning',
            'Cloud Architecture'
        ];
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;

        const type = () => {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                // Deleting text
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = 50;
            } else {
                // Typing text
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 100;
            }

            // Check if current role is complete
            if (!isDeleting && charIndex === currentRole.length) {
                // Pause at end of word
                typingDelay = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Move to next role
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingDelay = 500;
            }

            setTimeout(type, typingDelay);
        };

        // Start typing after a delay
        setTimeout(type, 1000);
    }

    // ===== SCROLL EFFECTS =====
    initializeScrollEffects() {
        // Navbar scroll effect
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const scrollToTop = document.getElementById('scroll-to-top');
            
            // Navbar background on scroll
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Scroll to top button
            if (scrollToTop) {
                if (window.scrollY > 500) {
                    scrollToTop.classList.add('visible');
                } else {
                    scrollToTop.classList.remove('visible');
                }
            }
            
            // Parallax effect for background elements
            this.handleParallax();
            
            lastScrollY = window.scrollY;
        });

        // Scroll to top functionality
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        if (scrollToTopBtn) {
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                this.playSound('click');
            });
        }
    }

    handleParallax() {
        const scrollY = window.scrollY;
        const floatingShapes = document.querySelectorAll('.floating-shape');
        
        floatingShapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollY * speed);
            shape.style.transform = `translateY(${yPos}px) rotate(${scrollY * 0.1}deg)`;
        });
    }

    // ===== SOUND SYSTEM =====
    playSound(type) {
        if (!this.soundEnabled) return;

        // Create audio context for simple sound effects
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        try {
            switch (type) {
                case 'click':
                    this.playClickSound(audioContext);
                    break;
                case 'navigation':
                    this.playNavigationSound(audioContext);
                    break;
                case 'hover':
                    this.playHoverSound(audioContext);
                    break;
            }
        } catch (error) {
            console.log('Audio not supported:', error);
        }
    }

    playClickSound(audioContext) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }

    playNavigationSound(audioContext) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    }

    playHoverSound(audioContext) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(700, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        const soundToggle = document.getElementById('sound-toggle');
        
        if (soundToggle) {
            const icon = soundToggle.querySelector('i');
            if (icon) {
                icon.className = this.soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
            }
        }
        
        this.playSound('click');
    }

    // ===== EVENT LISTENERS SETUP =====
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Sound toggle
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle) {
            soundToggle.addEventListener('click', () => this.toggleSound());
        }

        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Project card interactions
        this.setupProjectInteractions();

        // Form submissions
        this.setupFormHandlers();

        // Keyboard shortcuts
        this.setupKeyboardShortcuts();
    }

    toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        const navMenu = document.getElementById('nav-menu');
        const menuToggle = document.getElementById('menu-toggle');

        if (navMenu && menuToggle) {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }

        this.playSound('click');
    }

    setupProjectInteractions() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.project-link')) return; // Don't trigger if clicking links
                
                const projectId = card.getAttribute('data-project');
                this.openProjectModal(projectId);
            });

            // Hover sound
            card.addEventListener('mouseenter', () => {
                this.playSound('hover');
            });
        });

        // Project links
        const projectLinks = document.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
                const type = link.classList.contains('live-demo') ? 'external' : 
                            link.classList.contains('github') ? 'github' : 'details';
                
                this.handleProjectLink(type, link.closest('.project-card'));
            });
        });
    }

    openProjectModal(projectId) {
        // This would be implemented in projects.js
        console.log('Opening project modal for:', projectId);
        this.playSound('navigation');
    }

    handleProjectLink(type, projectCard) {
        const projectId = projectCard.getAttribute('data-project');
        
        switch (type) {
            case 'external':
                // Open live demo
                window.open(this.getProjectDemoUrl(projectId), '_blank');
                break;
            case 'github':
                // Open GitHub repo
                window.open(this.getProjectGithubUrl(projectId), '_blank');
                break;
            case 'details':
                // Open project details modal
                this.openProjectModal(projectId);
                break;
        }
        
        this.playSound('click');
    }

    getProjectDemoUrl(projectId) {
        // Map project IDs to their demo URLs
        const demoUrls = {
            'pravasmitra': 'https://pravasmitra.demo.com',
            'morphshield': 'https://morphshield.demo.com',
            'studyfourge': 'https://studyfourge.demo.com'
        };
        return demoUrls[projectId] || '#';
    }

    getProjectGithubUrl(projectId) {
        // Map project IDs to their GitHub URLs
        const githubUrls = {
            'pravasmitra': 'https://github.com/ashish/pravasmitra',
            'morphshield': 'https://github.com/ashish/morphshield',
            'studyfourge': 'https://github.com/ashish/studyfourge'
        };
        return githubUrls[projectId] || '#';
    }

    setupFormHandlers() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const submitBtn = form.querySelector('.submit-btn');
        
        // Show loading state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }
        
        try {
            // Simulate form submission (replace with actual Netlify form handling)
            await this.simulateFormSubmission(formData);
            
            // Show success message
            this.showNotification('Message sent successfully!', 'success');
            form.reset();
            
        } catch (error) {
            // Show error message
            this.showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button state
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
            }
        }
        
        this.playSound('click');
    }

    async simulateFormSubmission(formData) {
        // Simulate API call delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true });
            }, 2000);
        });
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K to focus search (if implemented)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                // Focus search input if available
            }
            
            // Escape to close modals/menus
            if (e.key === 'Escape') {
                this.closeAllModals();
                if (this.isMenuOpen) {
                    this.toggleMobileMenu();
                }
            }
        });
    }

    closeAllModals() {
        // Close any open modals
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => modal.classList.remove('active'));
    }

    // ===== PERFORMANCE OPTIMIZATIONS =====
    debounce(func, wait) {
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

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ===== INITIALIZE APPLICATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the portfolio application
    window.portfolioApp = new PortfolioApp();
    
    // Add CSS for notifications
    const style = document.createElement('style');
    style.textContent = `
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-content i {
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);
});

// ===== ERROR BOUNDARY =====
window.addEventListener('error', (e) => {
    console.error('Portfolio App Error:', e.error);
});

// ===== SERVICE WORKER REGISTRATION (Optional) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}