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
        
        // Track the mouse and move the falling cursor with it
        document.body.addEventListener('mousemove', (event) => {
            let mouseX = event.clientX;
            let mouseY = event.clientY;
            
            // Move the falling cursor with the mouse
            fallingCursor.style.left = `${mouseX - 10}px`;
            fallingCursor.style.top = `${mouseY - 10}px`;
        });

        // After the button click, simulate the gravity effect and let the cursor fall
        setTimeout(() => {
            // Set up the transition for falling
            fallingCursor.style.transition = 'top 2s ease-in-out, opacity 2s ease';
            
            // Move the cursor element down to simulate gravity
            fallingCursor.style.top = '100vh';  // Move it to the bottom of the screen
            
            // Fade out the cursor as it falls
            fallingCursor.style.opacity = 0;    
        }, 100);  // Delay to sync with button click
    });
});
