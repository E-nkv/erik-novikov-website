// Scroll nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Force visible before scroll
            target.classList.add('visible');
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Section animations
const OBSERVER_OPTS = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, OBSERVER_OPTS);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});



// Skill hover
const GLOW_COLORS = ['#00d4ff', '#ff6b6b', '#4ecdc4', '#ffa726', '#ab47bc'];
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const randomColor = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];
        item.style.boxShadow = `0 0 7px ${randomColor}`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = '';
    });
});

// Typing
const heroSubtitle = document.querySelector('.hero-subtitle');
const TYPE_SPEED = 50;

let typeIdx = 0;
let originalText = '';

function typeWriter() {
    if (typeIdx < originalText.length) {
        heroSubtitle.textContent += originalText.charAt(typeIdx);
        typeIdx++;
        setTimeout(typeWriter, TYPE_SPEED);
    }
}

// Init on load
window.addEventListener('load', () => {
    if (heroSubtitle) {
        originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        typeWriter();
    }
});

// Block right-click
document.addEventListener('contextmenu', e => e.preventDefault());

// Particles
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null };
let particleCount = 100;
let connectionDistance = 120;
let mouseDistance = 150;
let mouseForce = 0.5;
let connectionOpacity = 0.3;
let minSize = 1;
let maxSize = 3;
let speed = 1;
let animationFrameId = null;
let isTabVisible = true;

// Config by screen size
function getParticleConfig() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 500) {
        // Mobile - smaller screens need smaller distances and lower opacity
        return {
            count: 35,
            connectionDistance: 100,
            mouseDistance: 80,
            mouseForce: 0.2,
            connectionOpacity: 0.4,
            minSize: 0.5,
            maxSize: 2,
            speed: 0.5
        };
    } else if (screenWidth < 1024) {
        // Tablet - moderate values
        return {
            count: 50,
            connectionDistance: 120,
            mouseDistance: 100,
            mouseForce: 0.3,
            connectionOpacity: 0.5,
            minSize: 1,
            maxSize: 2.5,
            speed: 0.8
        };
    } else {
        // Desktop - larger screens can handle larger distances
        return {
            count: 70,
            connectionDistance: 120,
            mouseDistance: 180,
            mouseForce: 0.4,
            connectionOpacity: 0.6,
            minSize: 1,
            maxSize: 3,
            speed: 1
        };
    }
}

/**
 * Update particle configuration based on new screen size and re-init particles
 * Uses requestAnimationFrame for efficient repaint
 */
function updateParticlesOnResize() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    
    // Resize canvas first to match new window dimensions
    resizeCanvas();
    
    const config = getParticleConfig();
    particleCount = config.count;
    connectionDistance = config.connectionDistance;
    mouseDistance = config.mouseDistance;
    mouseForce = config.mouseForce;
    connectionOpacity = config.connectionOpacity;
    minSize = config.minSize;
    maxSize = config.maxSize;
    speed = config.speed;
    
    initParticles();
    
    // Restart the animation loop
    animateParticles();
}

/**
 * Resize canvas and update particles on window resize
 */
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

/**
 * Track mouse position for particle interaction
 */
function trackMousePosition(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

// Initialize canvas and event listeners
resizeCanvas();

// Load initial config based on screen size
const initialConfig = getParticleConfig();
particleCount = initialConfig.count;
connectionDistance = initialConfig.connectionDistance;
mouseDistance = initialConfig.mouseDistance;
mouseForce = initialConfig.mouseForce;
connectionOpacity = initialConfig.connectionOpacity;
minSize = initialConfig.minSize;
maxSize = initialConfig.maxSize;
speed = initialConfig.speed;

window.addEventListener('resize', updateParticlesOnResize);
document.addEventListener('mousemove', trackMousePosition);

/**
 * Clear mouse position when mouse leaves window
 */
document.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = Math.random() * speed - (speed / 2);
        this.speedY = Math.random() * speed - (speed / 2);
        this.color = 'rgba(255, 255, 255, 0.7)';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouseDistance) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouseDistance - distance) / mouseDistance;
                const directionX = forceDirectionX * force * mouseForce;
                const directionY = forceDirectionY * force * mouseForce;

                this.x -= directionX;
                this.y -= directionY;
            }
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize particles
function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// Draw connections between particles (optimized - reduces calculations)
function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        // Only check particles ahead in array to avoid duplicate checks
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSquared = dx * dx + dy * dy; // Use squared distance to avoid Math.sqrt when possible
            
            if (distSquared < connectionDistance * connectionDistance) {
                const distance = Math.sqrt(distSquared);
                const opacity = 1 - (distance / connectionDistance);
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * connectionOpacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

// Animation loop
function animateParticles() {
    if (!isTabVisible) {
        // Pause animation when tab is not visible
        animationFrameId = requestAnimationFrame(animateParticles);
        return;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    
    drawConnections();
    animationFrameId = requestAnimationFrame(animateParticles);
}

// Start particles
initParticles();
animateParticles();

// Spotlight effect
const spotlight = document.getElementById('spotlight');
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    spotlight.style.setProperty('--x', `${x}%`);
    spotlight.style.setProperty('--y', `${y}%`);
}, { passive: true }); // Use passive event listener for better scroll performance

// Console message for developers
console.log('%c👋 Hi there! Thanks for checking out my portfolio.', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cFeel free to explore the code!', 'color: #ff6b6b;');

// To convert devto.png to jpg using ffmpeg, run:
// ffmpeg -i public/devto.png public/devto.jpg
