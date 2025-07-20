document.addEventListener('DOMContentLoaded', () => {

    /* --- Logic for Hero Parallax (Unchanged) --- */
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroContent.style.setProperty('--scroll-y', `${scrollY * -0.5}px`);
    });

    /* --- Logic for Floating Nav (Unchanged) --- */
    const nav = document.getElementById('floating-nav');
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 100) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });

    /* --- NEW: Logic for the "Watcher's Gaze" Spotlight Grid --- */
    const grid = document.querySelector('.bento-grid');
    grid.addEventListener('mousemove', e => {
        const rect = grid.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        grid.style.setProperty('--mouse-x', `${x}px`);
        grid.style.setProperty('--mouse-y', `${y}px`);

        for(const card of grid.querySelectorAll('.bento-card')) {
             const cardRect = card.getBoundingClientRect();
             const cardX = e.clientX - cardRect.left;
             const cardY = e.clientY - cardRect.top;
             card.style.setProperty('--mouse-x', `${cardX}px`);
             card.style.setProperty('--mouse-y', `${cardY}px`);
        }
    });
});