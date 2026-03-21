// ============================================
// DOM Elements
// ============================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const bookingForm = document.getElementById('bookingForm');
const newsletterForm = document.getElementById('newsletterForm');

// ============================================
// Menu Data
// ============================================
const menuData = {
    starters: [
        { name: "Quantum Foam", price: "$28", desc: "Molecular tomato essence, basil air, aged balsamic spheres", tags: ["Vegetarian", "Gluten-Free"] },
        { name: "Nebula Tartare", price: "$34", desc: "Wagyu beef, smoked oyster emulsion, gold leaf, caviar pearls", tags: ["Signature", "Premium"] },
        { name: "Cryo Scallops", price: "$32", desc: "Flash-frozen Hokkaido scallops, yuzu gel, seaweed crisp", tags: ["Seafood"] }
    ],
    mains: [
        { name: "Photon Duck", price: "$58", desc: "Sous-vide duck breast, molecular orange glaze, black garlic puree", tags: ["House Special"] },
        { name: "Neo-Wagyu", price: "$89", desc: "A5 Japanese Wagyu, truffle foam, gold potato confit", tags: ["Premium", "Signature"] },
        { name: "Solar Sea Bass", price: "$52", desc: "Mediterranean sea bass, saffron emulsion, compressed vegetables", tags: ["Seafood"] }
    ],
    desserts: [
        { name: "Galaxy Sphere", price: "$22", desc: "Dark chocolate mousse, salted caramel core, edible silver dust", tags: ["Signature"] },
        { name: "Quantum Cheesecake", price: "$19", desc: "Deconstructed cheesecake, berry caviar, nitrogen-frozen berries", tags: ["Vegetarian"] },
        { name: "Neon Sorbet", price: "$16", desc: "Seasonal fruit sorbet, liquid nitrogen preparation", tags: ["Vegan", "Gluten-Free"] }
    ],
    beverages: [
        { name: "Zero Gravity", price: "$18", desc: "Gin, elderflower, cucumber, molecular bubbles", tags: ["Cocktail"] },
        { name: "Solar Flare", price: "$22", desc: "Tequila, blood orange, chili, smoked salt rim", tags: ["Spicy"] },
        { name: "Moonstone", price: "$45", desc: "Vintage Champagne, gold flakes", tags: ["Premium"] }
    ]
};

// ============================================
// Signature Dishes Data
// ============================================
const signatureDishes = [
    { name: "The Singularity", price: "$128", desc: "12-course molecular journey featuring seasonal ingredients", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format" },
    { name: "Golden Era", price: "$98", desc: "7-course chef's selection with wine pairing", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format" },
    { name: "Elements", price: "$78", desc: "5-course tasting menu of signature dishes", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&auto=format" }
];

// ============================================
// Gallery Data
// ============================================
const galleryImages = [
    { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format", caption: "Dining Hall - The Neon Experience" },
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&auto=format", caption: "Chef's Table - Live Artistry" },
    { src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format", caption: "Signature Presentation - Galaxy Sphere" },
    { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&auto=format", caption: "Wine Cellar - Curated Selection" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format", caption: "Kitchen Theatre - Open Concept" },
    { src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&auto=format", caption: "Private Dining - Exclusive Moments" }
];

// ============================================
// Testimonials Data
// ============================================
const testimonials = [
    { name: "Alexandra Chen", role: "Michelin Inspector", text: "A revolutionary dining experience that redefines what a restaurant can be. Every dish tells a story of innovation and artistry. NEONO sets a new standard for fine dining.", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Marcus Rodriguez", role: "Food Critic, NY Times", text: "NEONO isn't just a meal; it's a journey through the future of gastronomy. The attention to detail, from plating to flavor profiles, is absolutely unparalleled.", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Isabella Moreau", role: "Culinary Director", text: "The most immersive dining experience I've ever encountered. A perfect blend of technology, artistry, and exceptional cuisine. This is what dining in 2030 looks like.", avatar: "https://randomuser.me/api/portraits/women/3.jpg" }
];

// ============================================
// About Section Enhancement
// ============================================
function enhanceAboutSection() {
    const aboutContent = document.querySelector('.about-content');
    const aboutImage = document.querySelector('.about-image');
    
    if (aboutContent && aboutImage) {
        // Add animation delays for staggered effect
        aboutContent.style.transitionDelay = '0.2s';
        aboutImage.style.transitionDelay = '0.4s';
    }
}

// ============================================
// Initialize Menu
// ============================================
function initializeMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    function renderMenu(category = 'all') {
        let items = [];
        if (category === 'all') {
            items = [...menuData.starters, ...menuData.mains, ...menuData.desserts, ...menuData.beverages];
        } else {
            items = menuData[category] || [];
        }
        
        menuGrid.innerHTML = items.map((item, index) => `
            <div class="menu-item scroll-reveal" style="animation-delay: ${index * 0.05}s">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-desc">${item.desc}</p>
                <div class="menu-item-tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
        
        // Re-initialize scroll reveal for new elements
        initScrollReveal();
    }
    
    // Category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.category);
        });
    });
    
    renderMenu('all');
}

// ============================================
// Initialize Signature Dishes
// ============================================
function initializeSignatureDishes() {
    const container = document.getElementById('signatureCards');
    if (!container) return;
    
    container.innerHTML = signatureDishes.map((dish, index) => `
        <div class="signature-card scroll-reveal" style="transition-delay: ${index * 0.1}s">
            <div class="signature-image">
                <img src="${dish.img}" alt="${dish.name}" loading="lazy">
                <div class="signature-overlay"></div>
            </div>
            <div class="signature-content">
                <h3>${dish.name}</h3>
                <p>${dish.desc}</p>
                <div class="signature-price">${dish.price}</div>
            </div>
        </div>
    `).join('');
}

// ============================================
// Initialize Gallery
// ============================================
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-item scroll-reveal" data-index="${index}" style="animation-delay: ${index * 0.05}s">
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
            <div class="gallery-overlay">
                <p>${img.caption}</p>
            </div>
        </div>
    `).join('');
    
    // Add click event to gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index);
            openLightbox(index);
        });
    });
}

// ============================================
// Lightbox Functions
// ============================================
function openLightbox(index) {
    if (!lightbox || !lightboxImg) return;
    const img = galleryImages[index];
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// Initialize Testimonials Slider
// ============================================
let currentTestimonial = 0;

function initializeTestimonials() {
    const container = document.getElementById('testimonialContainer');
    const dotsContainer = document.getElementById('sliderDots');
    if (!container || !dotsContainer) return;
    
    function renderTestimonials() {
        container.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <h4 class="testimonial-name">${testimonial.name}</h4>
                <p class="testimonial-role">${testimonial.role}</p>
            </div>
        `).join('');
        
        // Create dots
        dotsContainer.innerHTML = testimonials.map((_, i) => `
            <div class="dot ${i === currentTestimonial ? 'active' : ''}" data-index="${i}"></div>
        `).join('');
        
        // Add dot click events
        document.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', () => {
                currentTestimonial = parseInt(dot.dataset.index);
                updateTestimonialSlide();
            });
        });
        
        updateTestimonialSlide();
    }
    
    function updateTestimonialSlide() {
        const slideWidth = container.children[0]?.offsetWidth || 0;
        container.style.transform = `translateX(-${currentTestimonial * slideWidth}px)`;
        
        // Update dots
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentTestimonial);
        });
    }
    
    // Next/Prev buttons
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonialSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonialSlide();
        });
    }
    
    // Handle resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => updateTestimonialSlide(), 100);
    });
    
    renderTestimonials();
}

// ============================================
// Scroll Animations & Reveal
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => observer.observe(el));
}

// ============================================
// Navbar Scroll Effect & Active Link
// ============================================
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// Smooth Scrolling
// ============================================
function initSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        hamburger.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                }
            }
        });
    });
}

// ============================================
// Mobile Menu Toggle
// ============================================
function initMobileMenu() {
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// Custom Cursor
// ============================================
function initCustomCursor() {
    if (!cursorDot || !cursorOutline) return;
    
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
        cursorOutline.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });
    
    // Hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .menu-item, .signature-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = `scale(1.5)`;
            cursorOutline.style.borderColor = 'var(--gold-secondary)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = `scale(1)`;
            cursorOutline.style.borderColor = 'var(--gold-primary)';
        });
    });
}

// ============================================
// Form Submissions
// ============================================
function initForms() {
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name')?.value,
                email: document.getElementById('email')?.value,
                phone: document.getElementById('phone')?.value,
                date: document.getElementById('date')?.value,
                time: document.getElementById('time')?.value,
                guests: document.getElementById('guests')?.value,
                message: document.getElementById('message')?.value
            };
            
            // Simple validation
            if (!formData.name || !formData.email || !formData.date || !formData.time) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            alert(`Thank you ${formData.name}! Your reservation request has been received for ${formData.date} at ${formData.time}. We'll confirm within 2 hours.`);
            bookingForm.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input')?.value;
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                alert(`Thank you for subscribing! We'll keep you updated on exclusive events and offers.`);
                newsletterForm.reset();
            }
        });
    }
}

// ============================================
// Parallax Effect on Hero
// ============================================
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg && scrolled <= window.innerHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// ============================================
// Lazy Loading Images
// ============================================
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// Smooth Entrance Animation
// ============================================
function initEntranceAnimation() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
}

// ============================================
// Handle Window Resize
// ============================================
function handleResize() {
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Recalculate testimonial slide
            if (document.getElementById('testimonialContainer')) {
                const container = document.getElementById('testimonialContainer');
                if (container.children[0]) {
                    const slideWidth = container.children[0].offsetWidth;
                    container.style.transform = `translateX(-${currentTestimonial * slideWidth}px)`;
                }
            }
        }, 250);
    });
}

// ============================================
// Initialize All Functions
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    enhanceAboutSection();
    initializeMenu();
    initializeSignatureDishes();
    initializeGallery();
    initializeTestimonials();
    initScrollReveal();
    initSmoothScrolling();
    initMobileMenu();
    initForms();
    initParallax();
    initLazyLoading();
    initEntranceAnimation();
    handleResize();
    
    // Close lightbox when clicking outside
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        const closeBtn = document.querySelector('.lightbox-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }
        
        // Close with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
    
    // Initialize custom cursor only on desktop
    if (window.innerWidth > 768) {
        initCustomCursor();
    }
    
    // Scroll event listeners
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial call
});

// ============================================
// Handle visibility change (performance)
// ============================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, pause animations if needed
    } else {
        // Page is visible again
    }
});

// ============================================
// Export for debugging (optional)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { menuData, signatureDishes, galleryImages, testimonials };
}