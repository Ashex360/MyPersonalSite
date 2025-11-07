// ===== PROJECTS DATA MANAGER =====
class ProjectsManager {
    constructor() {
        this.projects = {
            'pravasmitra': {
                id: 'pravasmitra',
                title: 'PravasMitra',
                subtitle: 'Real-time Bus Tracking System',
                category: ['IoT', 'Backend', 'Full Stack'],
                status: 'Completed',
                year: '2024',
                description: 'A comprehensive IoT-based real-time bus tracking system that provides live location updates, route optimization, and passenger analytics. Built with modern web technologies and hardware integration.',
                longDescription: `PravasMitra revolutionizes public transportation by providing real-time tracking and analytics. The system consists of three main components:

• Driver Application: GPS-enabled mobile app for bus drivers
• User Application: Real-time tracking and notifications for passengers
• Admin Dashboard: Analytics and management for transportation authorities

The system handles 500+ concurrent users with sub-10 second location updates and 99.9% uptime.`,
                features: [
                    'Real-time GPS tracking with 10-second updates',
                    'Route optimization and ETA predictions',
                    'Passenger analytics and heat maps',
                    'Push notifications for delays and updates',
                    'Multi-language support (English, Hindi)',
                    'Offline functionality for low-network areas'
                ],
                technologies: {
                    'Frontend': ['React Native', 'Redux', 'Socket.io'],
                    'Backend': ['Node.js', 'Express.js', 'Python'],
                    'Database': ['MongoDB', 'Redis'],
                    'Cloud': ['AWS EC2', 'S3', 'Route 53'],
                    'IoT': ['GPS Modules', 'Raspberry Pi', '4G Modules']
                },
                challenges: [
                    'Handling real-time data for 100+ buses simultaneously',
                    'Optimizing battery usage for mobile applications',
                    'Ensuring data accuracy in low-network conditions',
                    'Implementing secure authentication across multiple platforms'
                ],
                solutions: [
                    'Implemented WebSocket connections for real-time updates',
                    'Used efficient location polling algorithms',
                    'Developed hybrid offline-online data sync',
                    'Deployed JWT-based authentication system'
                ],
                results: [
                    'Reduced passenger wait times by 40%',
                    'Improved bus utilization by 25%',
                    'Decreased fuel consumption by 15%',
                    'Increased user satisfaction to 4.8/5 stars'
                ],
                images: [
                    'images/projects/pravasmitra/dashboard.jpg',
                    'images/projects/pravasmitra/mobile-app.jpg',
                    'images/projects/pravasmitra/admin-panel.jpg',
                    'images/projects/pravasmitra/analytics.jpg'
                ],
                demoUrl: 'https://pravasmitra.demo.com',
                githubUrl: 'https://github.com/ashish/pravasmitra',
                videoUrl: 'https://youtube.com/watch?v=pravasmitra-demo',
                live: true,
                featured: true
            },
            'morphshield': {
                id: 'morphshield',
                title: 'MorphShield',
                subtitle: 'AI-Powered Deepfake Detection',
                category: ['AI/ML', 'Computer Vision', 'Web App'],
                status: 'Completed',
                year: '2024',
                description: 'Advanced deepfake image detection system using EfficientNetB4 and forensic analysis to identify manipulated media with 95% accuracy.',
                longDescription: `MorphShield addresses the growing threat of deepfake technology by providing reliable detection of manipulated images and videos. The system uses a combination of deep learning and digital forensics:

• Deep Learning Model: Custom EfficientNetB4 architecture trained on 50,000+ images
• Forensic Analysis: Metadata examination and error level analysis
• Real-time Processing: GPU-accelerated inference for quick results
• API Integration: RESTful API for third-party applications

The model achieves 95% accuracy on benchmark datasets and processes images in under 2 seconds.`,
                features: [
                    'Real-time deepfake detection with 95% accuracy',
                    'Batch processing for multiple files',
                    'Detailed analysis reports with confidence scores',
                    'RESTful API for integration',
                    'Support for images and video frames',
                    'Cross-platform web application'
                ],
                technologies: {
                    'AI/ML': ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
                    'Backend': ['Flask', 'Gunicorn', 'Redis'],
                    'Frontend': ['React', 'Chart.js', 'Tailwind CSS'],
                    'Deployment': ['Docker', 'AWS', 'NGINX'],
                    'Data': ['Pandas', 'NumPy', 'Scikit-learn']
                },
                challenges: [
                    'Limited availability of high-quality deepfake datasets',
                    'Model generalization across different manipulation techniques',
                    'Real-time performance optimization',
                    'False positive reduction in edge cases'
                ],
                solutions: [
                    'Created custom dataset with 50,000+ manipulated images',
                    'Implemented ensemble learning with multiple models',
                    'Used GPU acceleration and model quantization',
                    'Developed confidence thresholding system'
                ],
                results: [
                    '95% accuracy on FaceForensics++ benchmark',
                    '2-second average processing time per image',
                    'Successfully detected 1000+ test cases',
                    'Published research paper on the methodology'
                ],
                images: [
                    '../assets/Morphshield_images/1.png',
                    '../assets/Morphshield_images/2.png',
                    '../assets/Morphshield_images/3.png',
                    '../assets/Morphshield_images/4.png'
                ],
                demoUrl: 'https://morphshield.demo.com',
                githubUrl: 'https://github.com/ashish/morphshield',
                videoUrl: 'https://youtube.com/watch?v=morphshield-demo',
                live: true,
                featured: true
            },
            'studyfourge': {
                id: 'studyfourge',
                title: 'StudyFourge',
                subtitle: 'Interactive Learning Platform',
                category: ['Full Stack', 'EdTech', 'Web App'],
                status: 'Active',
                year: '2023-2024',
                description: 'Comprehensive learning platform serving 500+ active users with interactive courses, real-time analytics, and personalized learning paths.',
                longDescription: `StudyFourge transforms online education through interactive learning experiences and data-driven personalization:

• Course Management: Create, manage, and deliver interactive courses
• Analytics Dashboard: Track student progress and engagement metrics
• Live Classes: Real-time video conferencing with interactive whiteboard
• Mobile Learning: Progressive Web App for on-the-go access
• AI Recommendations: Personalized learning paths based on performance

The platform has helped students achieve 35% better learning outcomes compared to traditional methods.`,
                features: [
                    'Interactive video lessons with quizzes',
                    'Real-time progress tracking and analytics',
                    'Personalized learning recommendations',
                    'Live classroom with whiteboard',
                    'Mobile-first progressive web app',
                    'Gamified learning experience'
                ],
                technologies: {
                    'Frontend': ['React', 'Redux', 'Socket.io', 'WebRTC'],
                    'Backend': ['Node.js', 'Express', 'MongoDB'],
                    'Real-time': ['Socket.io', 'WebRTC', 'Redis'],
                    'Cloud': ['AWS', 'CloudFront', 'S3'],
                    'AI/ML': ['Python', 'Scikit-learn', 'Pandas']
                },
                challenges: [
                    'Scaling real-time features for 500+ concurrent users',
                    'Implementing smooth video streaming across networks',
                    'Personalizing content for diverse learning styles',
                    'Ensuring data privacy and security'
                ],
                solutions: [
                    'Implemented microservices architecture',
                    'Used adaptive bitrate streaming for videos',
                    'Developed ML-based recommendation engine',
                    'Deployed comprehensive security protocols'
                ],
                results: [
                    '500+ active monthly users',
                    '35% improvement in learning outcomes',
                    '4.7/5 average user rating',
                    '20+ courses with 95% completion rate'
                ],
                images: [
                    'images/projects/studyfourge/dashboard.jpg',
                    'images/projects/studyfourge/course-player.jpg',
                    'images/projects/studyfourge/analytics.jpg',
                    'images/projects/studyfourge/mobile-app.jpg'
                ],
                demoUrl: 'https://studyfourge.demo.com',
                githubUrl: 'https://github.com/ashish/studyfourge',
                videoUrl: 'https://youtube.com/watch?v=studyfourge-demo',
                live: true,
                featured: true
            }
        };
        
        this.currentProject = null;
        this.modalOpen = false;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderProjectCards();
        this.initializeFilterSystem();
    }

    // ===== PROJECT CARDS RENDERING =====
    renderProjectCards() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        const featuredProjects = Object.values(this.projects).filter(project => project.featured);
        
        projectsGrid.innerHTML = featuredProjects.map(project => this.createProjectCard(project)).join('');
        
        // Re-initialize event listeners for new cards
        this.setupProjectCardInteractions();
    }

    createProjectCard(project) {
        return `
            <article class="project-card" data-project="${project.id}">
                <div class="project-image">
                    <div class="project-overlay">
                        <div class="project-links">
                            <button class="project-link live-demo" aria-label="View live demo">
                                <i class="fas fa-external-link-alt"></i>
                            </button>
                            <button class="project-link github" aria-label="View source code">
                                <i class="fab fa-github"></i>
                            </button>
                            <button class="project-link details" aria-label="View project details">
                                <i class="fas fa-expand"></i>
                            </button>
                        </div>
                    </div>
                    <img src="${project.images[0]}" alt="${project.title}" loading="lazy" onerror="this.src='images/projects/placeholder.jpg'">
                    <div class="project-badge ${project.status.toLowerCase()}">
                        ${project.status}
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-meta">
                        <span class="project-year">${project.year}</span>
                        <span class="project-category">${project.category[0]}</span>
                    </div>
                    <div class="project-tech">
                        ${project.technologies.Frontend.slice(0, 3).map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </article>
        `;
    }

    // ===== EVENT LISTENERS SETUP =====
    setupEventListeners() {
        // Project card interactions are set up after rendering
        this.setupProjectCardInteractions();
        
        // Modal close events
        this.setupModalEvents();
        
        // Keyboard navigation
        this.setupKeyboardNavigation();
    }

    setupProjectCardInteractions() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const projectId = card.getAttribute('data-project');
            
            // Main card click for modal
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.project-link')) {
                    this.openProjectModal(projectId);
                }
            });

            // Individual link clicks
            const links = card.querySelectorAll('.project-link');
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const type = link.classList.contains('live-demo') ? 'demo' :
                                link.classList.contains('github') ? 'github' : 'details';
                    this.handleProjectLink(type, projectId);
                });
            });

            // Hover effects
            card.addEventListener('mouseenter', () => this.handleCardHover(card, true));
            card.addEventListener('mouseleave', () => this.handleCardHover(card, false));
        });
    }

    setupModalEvents() {
        // Close modal on backdrop click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                this.closeProjectModal();
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalOpen) {
                this.closeProjectModal();
            }
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (!this.modalOpen) return;

            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.navigateModal('previous');
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.navigateModal('next');
                    break;
            }
        });
    }

    // ===== MODAL SYSTEM =====
    openProjectModal(projectId) {
        const project = this.projects[projectId];
        if (!project) return;

        this.currentProject = project;
        this.modalOpen = true;

        this.createModal(project);
        this.showModal();
        
        // Play sound if enabled
        if (window.portfolioApp?.soundEnabled) {
            window.portfolioApp.playSound('navigation');
        }

        // Track analytics
        this.trackProjectView(projectId);
    }

    createModal(project) {
        const modalHTML = `
            <div class="modal-backdrop">
                <div class="modal-container">
                    <div class="modal-header">
                        <div class="modal-title-section">
                            <h2 class="modal-title">${project.title}</h2>
                            <p class="modal-subtitle">${project.subtitle}</p>
                        </div>
                        <div class="modal-controls">
                            <button class="modal-nav-btn prev-btn" aria-label="Previous project">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="modal-nav-btn next-btn" aria-label="Next project">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                            <button class="modal-close-btn" aria-label="Close modal">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>

                    <div class="modal-content">
                        <!-- Image Gallery -->
                        <div class="modal-gallery">
                            <div class="gallery-main">
                                <img src="${project.images[0]}" alt="${project.title}" id="main-image">
                                <button class="gallery-nav prev-img" aria-label="Previous image">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="gallery-nav next-img" aria-label="Next image">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <div class="gallery-thumbnails">
                                ${project.images.map((img, index) => `
                                    <img src="${img}" alt="Thumbnail ${index + 1}" 
                                         class="thumbnail ${index === 0 ? 'active' : ''}"
                                         data-index="${index}">
                                `).join('')}
                            </div>
                        </div>

                        <!-- Project Details -->
                        <div class="modal-details">
                            <div class="detail-section">
                                <h3>Overview</h3>
                                <p>${project.longDescription}</p>
                            </div>

                            <div class="detail-grid">
                                <!-- Features -->
                                <div class="detail-section">
                                    <h4><i class="fas fa-star"></i> Key Features</h4>
                                    <ul class="feature-list">
                                        ${project.features.map(feature => `
                                            <li>${feature}</li>
                                        `).join('')}
                                    </ul>
                                </div>

                                <!-- Technologies -->
                                <div class="detail-section">
                                    <h4><i class="fas fa-cogs"></i> Technologies</h4>
                                    <div class="tech-stack">
                                        ${Object.entries(project.technologies).map(([category, techs]) => `
                                            <div class="tech-category">
                                                <strong>${category}:</strong>
                                                <span>${techs.join(', ')}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>

                            <!-- Challenges & Solutions -->
                            <div class="detail-section">
                                <h4><i class="fas fa-trophy"></i> Challenges & Solutions</h4>
                                <div class="challenge-solution">
                                    ${project.challenges.map((challenge, index) => `
                                        <div class="challenge-item">
                                            <div class="challenge">
                                                <strong>Challenge:</strong> ${challenge}
                                            </div>
                                            <div class="solution">
                                                <strong>Solution:</strong> ${project.solutions[index]}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Results -->
                            <div class="detail-section">
                                <h4><i class="fas fa-chart-line"></i> Results</h4>
                                <div class="results-grid">
                                    ${project.results.map(result => `
                                        <div class="result-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>${result}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <div class="project-links">
                            ${project.demoUrl ? `
                                <a href="${project.demoUrl}" target="_blank" class="btn btn-primary" rel="noopener">
                                    <i class="fas fa-external-link-alt"></i>
                                    Live Demo
                                </a>
                            ` : ''}
                            
                            ${project.githubUrl ? `
                                <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary" rel="noopener">
                                    <i class="fab fa-github"></i>
                                    Source Code
                                </a>
                            ` : ''}
                            
                            ${project.videoUrl ? `
                                <a href="${project.videoUrl}" target="_blank" class="btn btn-outline" rel="noopener">
                                    <i class="fab fa-youtube"></i>
                                    Video Demo
                                </a>
                            ` : ''}
                        </div>
                        
                        <div class="project-meta-footer">
                            <span class="project-status ${project.status.toLowerCase()}">
                                <i class="fas fa-circle"></i>
                                ${project.status}
                            </span>
                            <span class="project-category">
                                ${project.category.join(' • ')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal
        this.removeExistingModal();
        
        // Add new modal to body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Setup modal interactions
        this.setupModalInteractions();
    }

    setupModalInteractions() {
        // Close button
        const closeBtn = document.querySelector('.modal-close-btn');
        closeBtn?.addEventListener('click', () => this.closeProjectModal());

        // Navigation buttons
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        prevBtn?.addEventListener('click', () => this.navigateModal('previous'));
        nextBtn?.addEventListener('click', () => this.navigateModal('next'));

        // Image gallery
        this.setupImageGallery();
    }

    setupImageGallery() {
        const mainImage = document.getElementById('main-image');
        const thumbnails = document.querySelectorAll('.thumbnail');
        const prevImgBtn = document.querySelector('.prev-img');
        const nextImgBtn = document.querySelector('.next-img');

        let currentImageIndex = 0;

        // Thumbnail click
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const index = parseInt(thumb.getAttribute('data-index'));
                this.changeGalleryImage(index);
            });
        });

        // Navigation buttons
        prevImgBtn?.addEventListener('click', () => {
            this.changeGalleryImage(currentImageIndex - 1);
        });

        nextImgBtn?.addEventListener('click', () => {
            this.changeGalleryImage(currentImageIndex + 1);
        });

        // Keyboard navigation for gallery
        document.addEventListener('keydown', (e) => {
            if (!this.modalOpen) return;

            switch(e.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    e.preventDefault();
                    this.changeGalleryImage(currentImageIndex - 1);
                    break;
                case 'ArrowDown':
                case 'ArrowRight':
                    e.preventDefault();
                    this.changeGalleryImage(currentImageIndex + 1);
                    break;
            }
        });
    }

    changeGalleryImage(newIndex) {
        const project = this.currentProject;
        if (!project) return;

        const images = project.images;
        const totalImages = images.length;
        
        // Handle wrap-around
        if (newIndex < 0) newIndex = totalImages - 1;
        if (newIndex >= totalImages) newIndex = 0;

        const mainImage = document.getElementById('main-image');
        const thumbnails = document.querySelectorAll('.thumbnail');

        // Update main image with fade effect
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = images[newIndex];
            mainImage.alt = `${project.title} - Image ${newIndex + 1}`;
            mainImage.style.opacity = '1';
        }, 200);

        // Update active thumbnail
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[newIndex]?.classList.add('active');

        currentImageIndex = newIndex;
    }

    showModal() {
        const modal = document.querySelector('.modal-backdrop');
        if (modal) {
            document.body.style.overflow = 'hidden';
            modal.classList.add('active');
            
            // Add animation class
            setTimeout(() => {
                modal.classList.add('animate-in');
            }, 10);
        }
    }

    closeProjectModal() {
        const modal = document.querySelector('.modal-backdrop');
        if (modal) {
            modal.classList.remove('animate-in');
            modal.classList.add('animate-out');
            
            setTimeout(() => {
                this.removeExistingModal();
                document.body.style.overflow = '';
                this.modalOpen = false;
                this.currentProject = null;
            }, 300);
        }
    }

    removeExistingModal() {
        const existingModal = document.querySelector('.modal-backdrop');
        if (existingModal) {
            existingModal.remove();
        }
    }

    // ===== MODAL NAVIGATION =====
    navigateModal(direction) {
        const projectIds = Object.keys(this.projects);
        const currentIndex = projectIds.indexOf(this.currentProject.id);
        
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % projectIds.length;
        } else {
            newIndex = (currentIndex - 1 + projectIds.length) % projectIds.length;
        }
        
        const nextProjectId = projectIds[newIndex];
        this.closeProjectModal();
        
        // Small delay for smooth transition
        setTimeout(() => {
            this.openProjectModal(nextProjectId);
        }, 300);
    }

    // ===== PROJECT LINK HANDLING =====
    handleProjectLink(type, projectId) {
        const project = this.projects[projectId];
        if (!project) return;

        switch(type) {
            case 'demo':
                if (project.demoUrl) {
                    window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                    this.trackProjectClick(projectId, 'demo');
                }
                break;
                
            case 'github':
                if (project.githubUrl) {
                    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                    this.trackProjectClick(projectId, 'github');
                }
                break;
                
            case 'details':
                this.openProjectModal(projectId);
                break;
        }

        // Play sound
        if (window.portfolioApp?.soundEnabled) {
            window.portfolioApp.playSound('click');
        }
    }

    // ===== FILTER SYSTEM =====
    initializeFilterSystem() {
        // This would implement category filtering for projects page
        // For now, it's a placeholder for future enhancement
    }

    // ===== HOVER EFFECTS =====
    handleCardHover(card, isHovering) {
        if (isHovering) {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = 'var(--shadow-xl)';
        } else {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow-md)';
        }
    }

    // ===== ANALYTICS TRACKING =====
    trackProjectView(projectId) {
        // Simple analytics tracking
        console.log(`Project viewed: ${projectId}`);
        
        // In a real implementation, you might send this to Google Analytics
        // gtag('event', 'project_view', { project_id: projectId });
    }

    trackProjectClick(projectId, action) {
        console.log(`Project ${action} clicked: ${projectId}`);
        
        // gtag('event', 'project_click', {
        //     project_id: projectId,
        //     action: action
        // });
    }

    // ===== PUBLIC METHODS =====
    getProject(projectId) {
        return this.projects[projectId];
    }

    getAllProjects() {
        return Object.values(this.projects);
    }

    getProjectsByCategory(category) {
        return Object.values(this.projects).filter(project => 
            project.category.includes(category)
        );
    }

    addProject(projectData) {
        const id = projectData.id || projectData.title.toLowerCase().replace(/\s+/g, '-');
        this.projects[id] = { ...projectData, id };
        this.renderProjectCards();
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    window.projectsManager = new ProjectsManager();
});

// ===== CSS FOR MODAL (Dynamically added) =====
const projectsModalCSS = `
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    padding: 2rem;
}

.modal-backdrop.active {
    opacity: 1;
    visibility: visible;
}

.modal-backdrop.animate-in {
    animation: modalFadeIn 0.3s ease;
}

.modal-backdrop.animate-out {
    animation: modalFadeOut 0.3s ease;
}

@keyframes modalFadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes modalFadeOut {
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
}

.modal-container {
    background: var(--bg-secondary);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--border-color);
    max-width: 1200px;
    max-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem 2rem 1rem;
    border-bottom: 1px solid var(--border-color);
}

.modal-title-section h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.modal-subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
}

.modal-controls {
    display: flex;
    gap: 0.5rem;
}

.modal-nav-btn,
.modal-close-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.modal-nav-btn:hover,
.modal-close-btn:hover {
    background: var(--accent-primary);
    border-color: var(--accent-primary);
    transform: scale(1.1);
}

.modal-content {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-height: 60vh;
}

.modal-gallery {
    padding: 2rem;
}

.gallery-main {
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
    margin-bottom: 1rem;
}

.gallery-main img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: opacity 0.3s ease;
}

.gallery-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.gallery-nav:hover {
    background: var(--accent-primary);
    transform: translateY(-50%) scale(1.1);
}

.prev-img { left: 1rem; }
.next-img { right: 1rem; }

.gallery-thumbnails {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
}

.thumbnail {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.thumbnail:hover,
.thumbnail.active {
    opacity: 1;
    border-color: var(--accent-primary);
}

.modal-details {
    padding: 2rem 2rem 2rem 0;
    overflow-y: auto;
}

.detail-section {
    margin-bottom: 2rem;
}

.detail-section h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--accent-primary);
}

.detail-section h4 {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.detail-grid {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.feature-list {
    list-style: none;
    padding: 0;
}

.feature-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-color);
    position: relative;
    padding-left: 1.5rem;
}

.feature-list li:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-primary);
    font-weight: bold;
}

.tech-stack {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.tech-category {
    display: flex;
    gap: 0.5rem;
}

.tech-category strong {
    min-width: 100px;
    color: var(--accent-primary);
}

.challenge-solution {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.challenge-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: var(--border-radius);
    border-left: 4px solid var(--accent-primary);
}

.results-grid {
    display: grid;
    gap: 0.75rem;
}

.result-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-secondary);
}

.modal-footer {
    padding: 1.5rem 2rem;
    border-top: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg-tertiary);
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-meta-footer {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.project-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
}

.project-status.completed {
    background: rgba(16, 185, 129, 0.1);
    color: var(--accent-secondary);
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.project-status.active {
    background: rgba(99, 102, 241, 0.1);
    color: var(--accent-primary);
    border: 1px solid rgba(99, 102, 241, 0.3);
}

.project-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.project-badge.completed {
    background: var(--accent-secondary);
    color: white;
}

.project-badge.active {
    background: var(--accent-primary);
    color: white;
}

/* Responsive Design */
@media (max-width: 968px) {
    .modal-content {
        grid-template-columns: 1fr;
        max-height: none;
    }
    
    .modal-details {
        padding: 2rem;
    }
    
    .modal-gallery {
        padding: 2rem;
    }
}

@media (max-width: 768px) {
    .modal-backdrop {
        padding: 1rem;
    }
    
    .modal-header {
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
    }
    
    .modal-footer {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
    }
    
    .project-links {
        justify-content: center;
    }
    
    .project-meta-footer {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .modal-container {
        max-height: 95vh;
    }
    
    .modal-header {
        padding: 1rem;
    }
    
    .modal-content {
        gap: 0;
    }
    
    .modal-gallery,
    .modal-details {
        padding: 1rem;
    }
    
    .project-links {
        flex-direction: column;
    }
}
`;

// Add CSS to document
const styleSheet = document.createElement('style');
styleSheet.textContent = projectsModalCSS;
document.head.appendChild(styleSheet);