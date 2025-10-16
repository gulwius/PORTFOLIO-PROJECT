//special thx to kylie tinuruan ako soled ka 

// scrolling
function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

// smooth scrollin to navig links
document.querySelectorAll('.navig a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// glitching fx
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s';
    });
    card.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});
window.addEventListener('scroll', function () { // ano to
const scrolled = window.pageYOffset;

// fx for hero
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrolled / 600);
}

// fading img matsaluv kylie
const glowImg = document.querySelector('.glow-img');
const glowImg1 = document.querySelector('.glow-img1');
const glowImg2 = document.querySelector('.glow-img2');
const glowImg3 = document.querySelector('.glow-img3');
const glowImg4 = document.querySelector('.glow-img4');
const glowImg5 = document.querySelector('.glow-img5');
const heroSection = document.querySelector('.hero');
if (glowImg && heroSection && glowImg1 && glowImg2 && glowImg3 && glowImg4 && glowImg5) {
    const heroHeight = heroSection.offsetHeight;
    const scrolled = window.scrollY;
    const maxOpacity = 1;
    // mathematician to boi papalitan neto yung opacity ng png design mo -kylie
    const opacity = Math.max(0, maxOpacity - (scrolled / heroHeight) * maxOpacity);
    glowImg.style.opacity = opacity;
    glowImg1.style.opacity = opacity;
    glowImg2.style.opacity = opacity;
    glowImg3.style.opacity = opacity;
    glowImg4.style.opacity = opacity;
    glowImg5.style.opacity = opacity;
}

// activ navig
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navig a');
let current = '';
sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrolled >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
});
  navLinks.forEach(link => {
    link.style.color = '#fff';
    if (link.getAttribute('href').substring(1) === current) {
      link.style.color = 'var(--neon-cyan)';
    }
});
});

/*// test
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// Add active state to nav links on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
            
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#fff';
        if (link.getAttribute('href').substring(1) === current) {
        link.style.color = 'var(--neon-cyan)';
        }
    });
}); */
// random glitch matsaluv ule kylie
const logo = document.querySelector('.logo');
setInterval(() => {
    logo.style.textShadow = `
        ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 20px var(--neon-cyan),
        ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 40px var(--neon-pink)`;
            setTimeout(() => {
                logo.style.textShadow = '0 0 20px var(--neon-cyan)'; }, 50); }, 3000);

        
// cursor trail matsaluv talaga shawrawt sayo kylie
document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.width = '5px';
    trail.style.height = '5px';
    trail.style.borderRadius = '50%';
    trail.style.background = 'var(--neon-cyan)';
    trail.style.pointerEvents = 'none';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.opacity = '0.6';
    trail.style.transition = 'all 0.5s ease';
    trail.style.zIndex = '9998';
    document.body.appendChild(trail);        
    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(2)'; }, 10);       
    setTimeout(() => {
        trail.remove(); }, 500); });