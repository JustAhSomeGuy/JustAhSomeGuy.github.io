// Mouse Gravity Effect
document.body.addEventListener('click', () => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    const gravityEffect = document.createElement('div');
    gravityEffect.style.position = 'absolute';
    gravityEffect.style.left = `${mouseX - 10}px`;
    gravityEffect.style.top = `${mouseY - 10}px`;
    gravityEffect.style.width = '20px';
    gravityEffect.style.height = '20px';
    gravityEffect.style.background = 'red';
    gravityEffect.style.borderRadius = '50%';
    gravityEffect.style.animation = 'fall 2s forwards';
    document.body.appendChild(gravityEffect);

    setTimeout(() => {
        gravityEffect.remove();
    }, 2000);
});

// Keyframe for the falling effect
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        0% { top: 0; opacity: 1; }
        100% { top: 100vh; opacity: 0; }
    }
`;
document.head.appendChild(style);

// Button Moving Away Effect
const prankButton = document.getElementById('prankButton');
prankButton.addEventListener('mouseenter', () => {
    prankButton.style.transform = 'translate(' + (Math.random() * 200 - 100) + 'px, ' + (Math.random() * 200 - 100) + 'px)';
});

// Content Disappearing Effect
const content = document.querySelector('.content');
content.addEventListener('click', () => {
    content.style.opacity = '0';
    setTimeout(() => {
        content.style.opacity = '1';
    }, 1000);
});
