// Event Data
const eventData = {
    essay: {
        icon: '✍️',
        title: 'Essay Writing',
        description: 'Express your thoughts and creativity through the art of essay writing. Participants can write in either Hindi or English on given topics that test their analytical thinking, creativity, and language proficiency.',
        details: [
            'Language: Hindi & English',
            'Duration: 60 minutes',
            'Word Limit: 500-800 words',
            'Individual participation',
            'Topics will be announced on spot'
        ],
        rules: [
            'Participants must write on the topic provided',
            'Use of mobile phones or any electronic devices is strictly prohibited',
            'Plagiarism will lead to immediate disqualification',
            'Handwritten essays only (pen and paper will be provided)',
            'Judging criteria: Content, creativity, grammar, and presentation'
        ],
        rulebookLink: 'YOUR_ESSAY_RULEBOOK_PDF_LINK',
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScNerpoQYDapzgdxRrynEUq2Pf2UK3THdVARuyLFTft3xnSHw/viewform?usp=header'
    },
    story: {
        icon: '📖',
        title: 'Story Writing',
        description: 'Unleash your imagination and craft compelling narratives. Create original stories in Hindi or English that captivate readers with your storytelling prowess.',
        details: [
            'Language: Hindi & English',
            'Duration: 90 minutes',
            'Word Limit: 800-1200 words',
            'Individual participation',
            'Any genre allowed (fiction, mystery, thriller, etc.)'
        ],
        rules: [
            'Story must be original and not published elsewhere',
            'Use of mobile phones or any electronic devices is prohibited',
            'Stories will be judged on plot, character development, and creativity',
            'Handwritten submissions only',
            'No offensive or inappropriate content'
        ],
        rulebookLink: 'YOUR_STORY_RULEBOOK_PDF_LINK',
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSemk58m1eh5ehG_V-i4RIWdV-NgD-oocCEVkA57xe4PzQHPOg/viewform?usp=publish-editor'
    },
    gd: {
        icon: '💬',
        title: 'Group Discussion',
        description: 'Engage in intellectual discourse and demonstrate your communication skills. Discuss contemporary topics with fellow participants while showcasing your knowledge and perspective.',
        details: [
            'Language: English',
            'Duration: 20-25 minutes per round',
            'Group size: 8-10 participants',
            'Team event',
            'Topics related to current affairs, social issues, and general knowledge'
        ],
        rules: [
            'All participants must speak in English only',
            'Maintain decorum and respect other participants',
            'No personal attacks or offensive language',
            'Equal opportunity to speak for all participants',
            'Judging criteria: Communication skills, content, confidence, and teamwork'
        ],
        rulebookLink: 'YOUR_GD_RULEBOOK_PDF_LINK',
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfYZtYb3MT72MqYgsmTCu2OOjK5UXPffZddodzMocD0kHHKtg/viewform?usp=publish-editor'
    },
    debate: {
        icon: '🎤',
        title: 'Debate Competition',
        description: 'Present your arguments with conviction and logic. Compete in structured debates where you defend or oppose propositions on various topics.',
        details: [
            'Language: English',
            'Format: Oxford Style Debate',
            'Duration: 3 minutes per speaker',
            'Individual participation',
            'For/Against positions assigned randomly'
        ],
        rules: [
            'Speak only in English',
            'Time limit must be strictly adhered to',
            'No use of offensive language or personal attacks',
            'Points of Information allowed',
            'Judging criteria: Content, delivery, rebuttal, and body language'
        ],
        rulebookLink: 'YOUR_DEBATE_RULEBOOK_PDF_LINK',
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdGjfqbi3nSA8N2HzBV8PVbYmZ0hb7Bg00mnbv6-IHZ1yHEOg/viewform?usp=publish-editor'
    },
    extempore: {
        icon: '⚡',
        title: 'Extempore Speaking',
        description: 'Think on your feet and speak with confidence. Deliver impromptu speeches on topics given on the spot, showcasing your spontaneity and public speaking skills.',
        details: [
            'Language: English',
            'Duration: 2-3 minutes per participant',
            'Preparation time: 1 minute',
            'Individual participation',
            'Random topic selection'
        ],
        rules: [
            'Topics will be given on the spot',
            'Only 1 minute preparation time allowed',
            'No notes or reference materials permitted',
            'Speech must be within time limit',
            'Judging criteria: Content, fluency, confidence, and presentation'
        ],
        rulebookLink: 'YOUR_EXTEMPORE_RULEBOOK_PDF_LINK',
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc10mM4EjxY8EC2FXKK9dWu1aeDxuhn1eXmS-qOhhvQnObnOw/viewform?usp=publish-editor'
    },
    quiz: {
        icon: '🧠',
        title: 'Quiz Competition',
        description: 'Test your knowledge across various domains. Form a team of 2 and compete in this exciting quiz competition covering general knowledge, current affairs, and more.',
        details: [
            'Team size: 2 members',
            'Multiple rounds: Written, Audio-Visual, Rapid Fire',
            'Duration: 2-3 hours',
            'Topics: General Knowledge, Current Affairs, Science, History, Sports, Entertainment',
            'Team registration required'
        ],
        rules: [
            'Each team must have exactly 2 members',
            'Use of mobile phones strictly prohibited during quiz',
            'Questions will be asked in multiple formats',
            'Negative marking may apply in certain rounds',
            'Decision of quiz master is final',
            'Audience members cannot help participants'
        ],
        rulebookLink: 'YOUR_QUIZ_RULEBOOK_PDF_LINK',
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdTxHK74IqIF9aMgtzxSg5m1Fz6r9wsKGojnKSZgGrkvqQ9vg/viewform?usp=publish-editor'
    }
};

// Particle animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Modal functionality
const modal = document.getElementById('eventModal');
const span = document.getElementsByClassName('close')[0];

// Open modal with event details
function openModal(eventType) {
    const event = eventData[eventType];
    
    document.getElementById('modalIcon').textContent = event.icon;
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDescription').textContent = event.description;
    
    // Populate details
    const detailsList = document.getElementById('modalDetails');
    detailsList.innerHTML = '';
    event.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });
    
    // Populate rules
    const rulesList = document.getElementById('modalRules');
    rulesList.innerHTML = '';
    event.rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        rulesList.appendChild(li);
    });
    
    // Set links
    document.getElementById('ruleBookLink').href = event.rulebookLink;
    document.getElementById('registerLink').href = event.registerLink;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
span.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Event card click handlers
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Add click event to event cards
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        const eventType = card.getAttribute('data-event');
        
        card.addEventListener('click', function() {
            openModal(eventType);
        });
        
        const viewBtn = card.querySelector('.btn-view-details');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                openModal(eventType);
            });
        }
    });
    
    // Intersection Observer for fade-in animations
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

    // Observe event cards
    eventCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Add animation to about section
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateY(30px)';
        aboutContent.style.transition = 'all 0.8s ease';
        observer.observe(aboutContent);
    }

    // Add animation to register section
    const registerContent = document.querySelector('.register-content');
    if (registerContent) {
        registerContent.style.opacity = '0';
        registerContent.style.transform = 'translateY(30px)';
        registerContent.style.transition = 'all 0.8s ease';
        observer.observe(registerContent);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < 700) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// Glitch effect enhancement
const glitchText = document.querySelector('.glitch');
if (glitchText) {
    setInterval(() => {
        const shouldGlitch = Math.random() > 0.9;
        if (shouldGlitch) {
            glitchText.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 var(--primary),
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 var(--secondary),
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ffff
            `;
            setTimeout(() => {
                glitchText.style.textShadow = '';
            }, 50);
        }
    }, 3000);
}

// Event card hover effect enhancement
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Typing effect for subtitle
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Random color change for particles
setInterval(() => {
    const particles = document.querySelectorAll('.particle');
    const randomParticle = particles[Math.floor(Math.random() * particles.length)];
    if (randomParticle) {
        const colors = ['#ff6b35', '#f7931e', '#667eea', '#764ba2'];
        randomParticle.style.background = colors[Math.floor(Math.random() * colors.length)];
    }
}, 2000);

// Keyboard navigation for modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Console easter egg
console.log('%c🎉 Welcome to Umang 2026! 🎉', 'color: #ff6b35; font-size: 24px; font-weight: bold;');
console.log('%cLiterary Club - LNJPIT Chapra', 'color: #667eea; font-size: 16px;');






// Contact Section JavaScript

// Add animation on scroll
function animateOnScroll() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Copy email to clipboard functionality
function setupEmailCopy() {
    const emailElements = document.querySelectorAll('.contact-detail:has(.icon-email)');
    
    emailElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.title = 'Click to copy email';
        
        element.addEventListener('click', function() {
            const email = this.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                showCopyFeedback(this);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        });
    });
}

// Show copy feedback
function showCopyFeedback(element) {
    const originalText = element.innerHTML;
    element.innerHTML = '<i class="icon-email"></i> Copied!';
    element.style.color = '#4ade80';
    
    setTimeout(() => {
        element.innerHTML = originalText;
        element.style.color = '';
    }, 2000);
}

// Phone click to call functionality
function setupPhoneCall() {
    const phoneElements = document.querySelectorAll('.contact-detail:has(.icon-phone)');
    
    phoneElements.forEach(element => {
        const phoneText = element.textContent.trim();
        const phoneNumber = phoneText.replace(/\s/g, '');
        
        element.style.cursor = 'pointer';
        element.addEventListener('click', function() {
            window.location.href = `tel:${phoneNumber}`;
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
    setupEmailCopy();
    setupPhoneCall();
});

// Add smooth scroll for navigation links
document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
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
