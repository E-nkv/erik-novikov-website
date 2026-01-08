// ============================================================================
// SCROLL NAVIGATION
// ============================================================================

/**
 * Smooth scrolling for navigation links
 * Forces target section to be visible before scrolling to prevent offset issues
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Force section to be visible before scrolling to prevent offset issues
            // caused by transform: translateY(30px) on hidden sections
            target.classList.add('visible');
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================================================
// SECTION ANIMATIONS
// ============================================================================

/**
 * Intersection Observer for scroll animations
 * Reveals sections as they enter the viewport
 */
const SECTION_OBSERVER_OPTIONS = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, SECTION_OBSERVER_OPTIONS);

// Observe all sections for animation triggers
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});



// ============================================================================
// SKILL ITEMS HOVER EFFECT
// ============================================================================

/**
 * Hover effect for skill items with random color glow
 */
const SKILL_GLOW_COLORS = ['#00d4ff', '#ff6b6b', '#4ecdc4', '#ffa726', '#ab47bc'];
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const randomColor = SKILL_GLOW_COLORS[Math.floor(Math.random() * SKILL_GLOW_COLORS.length)];
        item.style.boxShadow = `0 0 20px ${randomColor}`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = '';
    });
});

// ============================================================================
// TYPING EFFECT
// ============================================================================

/**
 * Typing effect for hero subtitle
 */
const heroSubtitle = document.querySelector('.hero-subtitle');
const TYPING_SPEED = 50; // milliseconds per character

let typeWriterIndex = 0;
let originalText = '';

function typeWriter() {
    if (typeWriterIndex < originalText.length) {
        heroSubtitle.textContent += originalText.charAt(typeWriterIndex);
        typeWriterIndex++;
        setTimeout(typeWriter, TYPING_SPEED);
    }
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
    if (heroSubtitle) {
        originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        typeWriter();
    }
});

// ============================================================================
// PARALLAX EFFECT
// ============================================================================

/**
 * Parallax effect for hero background
 */
const PARALLAX_SPEED = 0.5;
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
    if (heroBg) {
        const scrolled = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrolled * PARALLAX_SPEED}px)`;
    }
});

// ============================================================================
// BACKGROUND COLOR CHANGE ON SCROLL
// ============================================================================

/**
 * Changes background color from dark blue to lighter blue as user scrolls
 * Uses CSS variables for smooth transition
 */
const BG_COLORS_DARK = ['#3a5a7a', '#1a1a2e', '#16213e', '#0f3460', '#1a1a2e'];
const BG_COLORS_LIGHT = ['#1a2a4a', '#0f1a3a', '#0a102a', '#050f1a', '#0a102a'];

window.addEventListener('scroll', () => {
    const scrollPercent = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
    
    // Interpolate between dark and light colors based on scroll position
    const color1 = interpolateColor(BG_COLORS_DARK[0], BG_COLORS_LIGHT[0], scrollPercent);
    const color2 = interpolateColor(BG_COLORS_DARK[1], BG_COLORS_LIGHT[1], scrollPercent);
    const color3 = interpolateColor(BG_COLORS_DARK[2], BG_COLORS_LIGHT[2], scrollPercent);
    const color4 = interpolateColor(BG_COLORS_DARK[3], BG_COLORS_LIGHT[3], scrollPercent);
    const color5 = interpolateColor(BG_COLORS_DARK[4], BG_COLORS_LIGHT[4], scrollPercent);
    
    document.body.style.setProperty('--bg-color-1', color1);
    document.body.style.setProperty('--bg-color-2', color2);
    document.body.style.setProperty('--bg-color-3', color3);
    document.body.style.setProperty('--bg-color-4', color4);
    document.body.style.setProperty('--bg-color-5', color5);
});

/**
 * Interpolates between two hex colors
 * @param {string} color1 - Starting color (hex)
 * @param {string} color2 - Ending color (hex)
 * @param {number} factor - Interpolation factor (0-1)
 * @returns {string} Interpolated color (hex)
 */
function interpolateColor(color1, color2, factor) {
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);
    
    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);
    
    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// ============================================================================
// CONTEXT MENU PREVENTION
// ============================================================================

/**
 * Prevent right-click context menu
 */
document.addEventListener('contextmenu', e => e.preventDefault());

// ============================================================================
// PARTICLES EFFECT
// ============================================================================

/**
 * Particles animation with mouse interaction and connections
 */
const PARTICLE_CONFIG = {
    count: 100,
    connectionDistance: 120,
    mouseDistance: 150,
    mouseForce: 0.5,
    color: 'rgba(255, 255, 255, 0.7)',
    connectionOpacity: 0.3,
    minSize: 1,
    maxSize: 3,
    speed: 1
};

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null };

/**
 * Resize canvas to match window dimensions
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

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
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
        this.size = Math.random() * (PARTICLE_CONFIG.maxSize - PARTICLE_CONFIG.minSize) + PARTICLE_CONFIG.minSize;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
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

            if (distance < PARTICLE_CONFIG.mouseDistance) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (PARTICLE_CONFIG.mouseDistance - distance) / PARTICLE_CONFIG.mouseDistance;
                const directionX = forceDirectionX * force * PARTICLE_CONFIG.mouseForce;
                const directionY = forceDirectionY * force * PARTICLE_CONFIG.mouseForce;

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
    for (let i = 0; i < PARTICLE_CONFIG.count; i++) {
        particles.push(new Particle());
    }
}

// Draw connections between particles
function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < PARTICLE_CONFIG.connectionDistance) {
                const opacity = 1 - (distance / PARTICLE_CONFIG.connectionDistance);
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }

    drawConnections();
    requestAnimationFrame(animateParticles);
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
});

// Console message for developers
console.log('%c👋 Hi there! Thanks for checking out my portfolio.', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cFeel free to explore the code!', 'color: #ff6b6b;');