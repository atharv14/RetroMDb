// Retro Console Welcome Message
console.log(`
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░ RETRO IMDB v1.0 ░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
`);

// Visitor Counter Animation
let visitorCount = 4;
const visitorCounter = document.getElementById('visitorCount');
setInterval(() => {
    visitorCount++;
    visitorCounter.textContent = String(visitorCount).padStart(6, '0');
}, 10000);

// Retro Loading Effect
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    
    // Simulate old-school loading
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
        
        // Show retro alert
        setTimeout(() => {
            alert('Welcome to Retro IMDb!\n\nBest viewed in 640x480 resolution');
        }, 500);
    }, 100);
});

// Add retro hover sound effect to buttons
document.querySelectorAll('.retro-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.background = '#FFA500';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.background = '#FFD700';
    });
    
    button.addEventListener('click', () => {
        // Simulate old school loading
        document.body.style.cursor = 'wait';
        setTimeout(() => {
            alert('Loading movie details...\nPlease wait while the data is being retrieved from our servers...');
            document.body.style.cursor = 'default';
        }, 500);
    });
});

// Add retro cursor trail effect
function createTrail(e) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 500);
}

// Uncomment to enable cursor trail
// document.addEventListener('mousemove', createTrail);

// Simulate slow loading for images
document.querySelectorAll('img').forEach(img => {
    img.style.opacity = '0';
    img.addEventListener('load', () => {
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.1;
            img.style.opacity = opacity;
            if (opacity >= 1) clearInterval(fadeIn);
        }, 100);
    });
});