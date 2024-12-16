document.addEventListener('DOMContentLoaded', () => {
    // Mouse Gravity Effect
    document.body.addEventListener('click', (event) => {
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

    // Button Moving Away Effect
    const prankButton = document.getElementById('prankButton');
    prankButton.addEventListener('mouseenter', () => {
        prankButton.style.position = 'absolute';
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
});
