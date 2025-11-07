// ===== TYPING ANIMATION CONTROLLER =====
class TypingAnimation {
    constructor() {
        this.roles = [
            'Backend Systems',
            'AI Solutions', 
            'Scalable APIs',
            'Machine Learning',
            'Cloud Architecture',
            'Data Pipelines',
            'Microservices',
            'Real-time Applications'
        ];
        
        this.currentRoleIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.pauseDuration = 2000;
        
        this.typingElement = document.getElementById('typing-text');
        this.cursorElement = document.querySelector('.cursor');
        
        this.init();
    }

    init() {
        if (!this.typingElement) return;
        
        // Start typing animation
        this.type();
        
        // Add event listeners for pause/resume
        this.setupEventListeners();
        
        // Initialize cursor animation
        this.animateCursor();
    }

    type() {
        if (this.isPaused) return;
        
        const currentRole = this.roles[this.currentRoleIndex];
        
        if (this.isDeleting) {
            // Delete characters
            this.typingElement.textContent = currentRole.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            this.typingSpeed = this.deletingSpeed;
        } else {
            // Type characters
            this.typingElement.textContent = currentRole.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            this.typingSpeed = 100 + Math.random() * 50; // Natural typing variation
        }

        // Check if current role is complete
        if (!this.isDeleting && this.currentCharIndex === currentRole.length) {
            // Pause at the end before deleting
            this.typingSpeed = this.pauseDuration;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            // Move to next role
            this.isDeleting = false;
            this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
            this.typingSpeed = 500; // Pause before starting next word
        }

        // Schedule next iteration
        setTimeout(() => this.type(), this.typingSpeed);
    }

    animateCursor() {
        if (!this.cursorElement) return;
        
        let isVisible = true;
        
        setInterval(() => {
            if (!this.isPaused) {
                isVisible = !isVisible;
                this.cursorElement.style.opacity = isVisible ? '1' : '0';
            }
        }, 500);
    }

    setupEventListeners() {
        // Pause typing when user interacts with the element
        this.typingElement?.addEventListener('mouseenter', () => {
            this.isPaused = true;
            this.cursorElement.style.opacity = '1';
        });

        this.typingElement?.addEventListener('mouseleave', () => {
            this.isPaused = false;
        });

        // Pause when page is not visible
        document.addEventListener('visibilitychange', () => {
            this.isPaused = document.hidden;
        });
    }

    // Method to add new roles dynamically
    addRole(newRole) {
        this.roles.push(newRole);
    }

    // Method to skip to next role
    nextRole() {
        this.isDeleting = true;
        this.typingSpeed = this.deletingSpeed;
    }

    // Method to reset animation
    reset() {
        this.currentRoleIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typingElement.textContent = '';
    }
}

// ===== MULTIPLE TYPING ANIMATIONS =====
class MultiTypingAnimation {
    constructor() {
        this.animations = new Map();
        this.init();
    }

    init() {
        // Initialize all typing animations on the page
        this.initializeTypingElements();
    }

    initializeTypingElements() {
        const typingElements = document.querySelectorAll('[data-typing]');
        
        typingElements.forEach((element, index) => {
            const roles = element.getAttribute('data-typing-roles');
            const typingConfig = {
                element: element,
                roles: roles ? JSON.parse(roles) : [
                    'Backend Developer',
                    'AI/ML Enthusiast',
                    'Problem Solver'
                ],
                speed: parseInt(element.getAttribute('data-typing-speed')) || 100,
                pause: parseInt(element.getAttribute('data-typing-pause')) || 2000,
                loop: element.getAttribute('data-typing-loop') !== 'false',
                startDelay: parseInt(element.getAttribute('data-typing-delay')) || (index * 1000)
            };

            this.createTypingAnimation(typingConfig, `typing-${index}`);
        });
    }

    createTypingAnimation(config, id) {
        const { element, roles, speed, pause, loop, startDelay } = config;
        
        setTimeout(() => {
            const animation = new AdvancedTyping(element, roles, speed, pause, loop);
            this.animations.set(id, animation);
        }, startDelay);
    }

    pauseAll() {
        this.animations.forEach(animation => animation.pause());
    }

    resumeAll() {
        this.animations.forEach(animation => animation.resume());
    }

    restartAll() {
        this.animations.forEach(animation => animation.restart());
    }
}

// ===== ADVANCED TYPING ANIMATION WITH EFFECTS =====
class AdvancedTyping {
    constructor(element, roles, speed = 100, pause = 2000, loop = true) {
        this.element = element;
        this.originalContent = element.innerHTML;
        this.roles = roles;
        this.speed = speed;
        this.pause = pause;
        this.loop = loop;
        
        this.currentRoleIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        this.isStopped = false;
        
        this.cursor = this.createCursor();
        this.element.appendChild(this.cursor);
        
        this.init();
    }

    init() {
        this.type();
        this.setupEventListeners();
    }

    createCursor() {
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.innerHTML = '|';
        cursor.style.cssText = `
            color: var(--accent-primary);
            animation: blink 1s infinite;
            margin-left: 2px;
            font-weight: 300;
        `;
        return cursor;
    }

    type() {
        if (this.isStopped || this.isPaused) return;

        const currentRole = this.roles[this.currentRoleIndex];
        
        if (this.isDeleting) {
            // Delete characters with variation
            this.element.textContent = currentRole.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            this.speed = 50 + Math.random() * 30;
        } else {
            // Type characters with natural variation
            this.element.textContent = currentRole.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            this.speed = 80 + Math.random() * 70;
            
            // Add typing sound effect (optional)
            this.playTypingSound();
        }

        // Add cursor back after updating text
        this.element.appendChild(this.cursor);

        // Check role completion
        if (!this.isDeleting && this.currentCharIndex === currentRole.length) {
            this.speed = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            
            if (this.loop) {
                this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
                this.speed = 500; // Pause between words
            } else if (this.currentRoleIndex < this.roles.length - 1) {
                this.currentRoleIndex++;
                this.speed = 500;
            } else {
                this.stop();
                return;
            }
        }

        setTimeout(() => this.type(), this.speed);
    }

    playTypingSound() {
        // Simple typing sound using Web Audio API
        if (window.portfolioApp?.soundEnabled) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800 + Math.random() * 400, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (error) {
                // Audio not supported or blocked
            }
        }
    }

    setupEventListeners() {
        // Pause on hover
        this.element.addEventListener('mouseenter', () => this.pause());
        this.element.addEventListener('mouseleave', () => this.resume());

        // Pause when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.resume();
            }
        });
    }

    pause() {
        this.isPaused = true;
        this.cursor.style.animationPlayState = 'paused';
    }

    resume() {
        this.isPaused = false;
        this.cursor.style.animationPlayState = 'running';
        this.type();
    }

    stop() {
        this.isStopped = true;
        this.cursor.style.display = 'none';
    }

    restart() {
        this.isStopped = false;
        this.currentRoleIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.cursor.style.display = 'inline';
        this.type();
    }

    // Add new role dynamically
    addRole(role) {
        this.roles.push(role);
    }

    // Skip to specific role
    skipToRole(index) {
        if (index >= 0 && index < this.roles.length) {
            this.currentRoleIndex = index;
            this.currentCharIndex = 0;
            this.isDeleting = false;
            this.element.textContent = '';
            this.element.appendChild(this.cursor);
        }
    }
}

// ===== TYPEWRITER EFFECT FOR CODE =====
class CodeTypewriter {
    constructor(element, code, options = {}) {
        this.element = element;
        this.code = code;
        this.options = {
            speed: options.speed || 30,
            pause: options.pause || 1000,
            cursor: options.cursor !== false,
            language: options.language || 'javascript',
            ...options
        };
        
        this.currentLine = 0;
        this.currentChar = 0;
        this.isTyping = false;
        this.isPaused = false;
        
        this.init();
    }

    init() {
        this.prepareCodeElement();
        this.type();
    }

    prepareCodeElement() {
        this.element.innerHTML = '';
        
        if (this.options.cursor) {
            this.cursor = document.createElement('span');
            this.cursor.className = 'code-cursor';
            this.cursor.innerHTML = '▊';
            this.cursor.style.cssText = `
                color: var(--accent-primary);
                animation: blink 1s infinite;
                font-weight: bold;
            `;
        }
    }

    type() {
        if (this.isPaused) return;

        const lines = this.code.split('\n');
        
        if (this.currentLine < lines.length) {
            const currentLine = lines[this.currentLine];
            
            if (this.currentChar <= currentLine.length) {
                // Create line element if it doesn't exist
                if (!this.currentLineElement) {
                    this.currentLineElement = document.createElement('div');
                    this.currentLineElement.className = 'code-line';
                    this.element.appendChild(this.currentLineElement);
                }
                
                // Add characters to current line
                this.currentLineElement.textContent = currentLine.substring(0, this.currentChar);
                
                // Add cursor
                if (this.options.cursor) {
                    this.currentLineElement.appendChild(this.cursor);
                }
                
                this.currentChar++;
                
                // Continue typing current line
                setTimeout(() => this.type(), this.options.speed);
            } else {
                // Move to next line
                this.currentLine++;
                this.currentChar = 0;
                this.currentLineElement = null;
                
                // Add delay between lines
                setTimeout(() => this.type(), this.options.pause);
            }
        }
    }

    pause() {
        this.isPaused = true;
        if (this.cursor) {
            this.cursor.style.animationPlayState = 'paused';
        }
    }

    resume() {
        this.isPaused = false;
        if (this.cursor) {
            this.cursor.style.animationPlayState = 'running';
        }
        this.type();
    }

    restart() {
        this.currentLine = 0;
        this.currentChar = 0;
        this.currentLineElement = null;
        this.prepareCodeElement();
        this.type();
    }

    skipToEnd() {
        this.element.textContent = this.code;
        if (this.cursor) {
            this.cursor.style.display = 'none';
        }
    }
}

// ===== GLITCH TYPING EFFECT =====
class GlitchTyping {
    constructor(element, text, options = {}) {
        this.element = element;
        this.text = text;
        this.options = {
            speed: options.speed || 100,
            glitchChance: options.glitchChance || 0.1,
            glitchDuration: options.glitchDuration || 100,
            ...options
        };
        
        this.currentIndex = 0;
        this.isGlitching = false;
        
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        if (this.currentIndex <= this.text.length) {
            // Occasionally trigger glitch effect
            if (Math.random() < this.options.glitchChance && !this.isGlitching) {
                this.triggerGlitch();
            } else {
                // Normal typing
                this.element.textContent = this.text.substring(0, this.currentIndex);
                this.currentIndex++;
                setTimeout(() => this.type(), this.options.speed);
            }
        }
    }

    triggerGlitch() {
        this.isGlitching = true;
        
        const originalText = this.element.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
        
        // Create glitch effect
        const glitchInterval = setInterval(() => {
            let glitchedText = this.text.substring(0, this.currentIndex);
            
            // Add random glitch characters
            for (let i = 0; i < 3; i++) {
                const pos = Math.floor(Math.random() * this.currentIndex);
                const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
                glitchedText = glitchedText.substring(0, pos) + glitchChar + glitchedText.substring(pos + 1);
            }
            
            this.element.textContent = glitchedText;
        }, 50);
        
        // Stop glitch and continue typing
        setTimeout(() => {
            clearInterval(glitchInterval);
            this.element.textContent = this.text.substring(0, this.currentIndex);
            this.isGlitching = false;
            this.currentIndex++;
            setTimeout(() => this.type(), this.options.speed);
        }, this.options.glitchDuration);
    }
}

// ===== TYPING ANIMATION MANAGER =====
class TypingAnimationManager {
    constructor() {
        this.animations = new Map();
        this.isInitialized = false;
    }

    initialize() {
        if (this.isInitialized) return;
        
        // Initialize main hero typing animation
        this.createHeroTyping();
        
        // Initialize any other typing animations on the page
        this.initializeAllTypingAnimations();
        
        this.isInitialized = true;
    }

    createHeroTyping() {
        const typingElement = document.getElementById('typing-text');
        if (typingElement) {
            const heroAnimation = new TypingAnimation();
            this.animations.set('hero', heroAnimation);
        }
    }

    initializeAllTypingAnimations() {
        // Initialize multi-typing animations
        const multiTyping = new MultiTypingAnimation();
        this.animations.set('multi', multiTyping);

        // Initialize code typewriters
        this.initializeCodeTypewriters();
    }

    initializeCodeTypewriters() {
        const codeElements = document.querySelectorAll('[data-code-typewriter]');
        
        codeElements.forEach((element, index) => {
            const code = element.getAttribute('data-code');
            const options = {
                speed: parseInt(element.getAttribute('data-speed')) || 30,
                pause: parseInt(element.getAttribute('data-pause')) || 1000,
                cursor: element.getAttribute('data-cursor') !== 'false',
                language: element.getAttribute('data-language') || 'javascript'
            };
            
            if (code) {
                const typewriter = new CodeTypewriter(element, code, options);
                this.animations.set(`code-${index}`, typewriter);
            }
        });
    }

    pauseAll() {
        this.animations.forEach(animation => {
            if (animation.pause) animation.pause();
            if (animation.pauseAll) animation.pauseAll();
        });
    }

    resumeAll() {
        this.animations.forEach(animation => {
            if (animation.resume) animation.resume();
            if (animation.resumeAll) animation.resumeAll();
        });
    }

    restartAll() {
        this.animations.forEach(animation => {
            if (animation.restart) animation.restart();
            if (animation.restartAll) animation.restartAll();
        });
    }

    // Create new typing animation dynamically
    createAnimation(element, text, options = {}) {
        const animation = new AdvancedTyping(element, Array.isArray(text) ? text : [text], options.speed, options.pause, options.loop);
        const id = `dynamic-${Date.now()}`;
        this.animations.set(id, animation);
        return id;
    }

    // Remove animation
    removeAnimation(id) {
        const animation = this.animations.get(id);
        if (animation && animation.stop) {
            animation.stop();
        }
        this.animations.delete(id);
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing animation manager
    window.typingManager = new TypingAnimationManager();
    window.typingManager.initialize();
    
    // Add CSS for additional typing effects
    addTypingStyles();
});

// ===== ADDITIONAL STYLES =====
function addTypingStyles() {
    const styles = `
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        
        @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
        }
        
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
        
        .typing-cursor {
            color: var(--accent-primary);
            animation: blink 1s infinite;
            margin-left: 2px;
            font-weight: 300;
        }
        
        .code-cursor {
            color: var(--accent-primary);
            animation: blink 1s infinite;
            font-weight: bold;
        }
        
        .code-line {
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            white-space: pre;
        }
        
        .typing-glitch {
            animation: glitch 0.3s ease-in-out;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            .typing-cursor,
            .code-cursor {
                animation: none;
                opacity: 1;
            }
            
            .typing-glitch {
                animation: none;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// ===== EXPORT FOR MODULAR USE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TypingAnimation,
        AdvancedTyping,
        CodeTypewriter,
        GlitchTyping,
        MultiTypingAnimation,
        TypingAnimationManager
    };
}