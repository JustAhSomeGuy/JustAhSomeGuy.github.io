document.addEventListener('DOMContentLoaded', () => {
    // Create the falling cursor effect element
    const fallingCursor = document.createElement('div');
    fallingCursor.id = 'fallingCursor';
    document.body.appendChild(fallingCursor);

    // Mouse Gravity Effect when the button is clicked
    const prankButton = document.getElementById('prankButton');
    prankButton.addEventListener('click', () => {
        // Activate the gravity effect by making the cursor element visible
        fallingCursor.style.opacity = 1;
        
        // Animate the falling cursor from the mouse's position to the bottom of the screen
        document.body.addEventListener('mousemove', (event) => {
            let mouseX = event.clientX;
            let mouseY = event.clientY;
            
            // Move the falling cursor with the mouse
            fallingCursor.style.left = `${mouseX - 10}px`;
            fallingCursor.style.top = `${mouseY - 10}px`;
        });

        // After the button click, simulate the gravity effect and let the cursor fall
        setTimeout(() => {
            fallingCursor.style.transition = 'top 2s ease-in-out, opacity 2s ease';
            fallingCursor.style.top = '100vh';  // Move it to the bottom
            fallingCursor.style.opacity = 0;    // Make it fade out
        }, 100);  // Delay to sync with button click
    });

    // Button Moving Away Effect
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
