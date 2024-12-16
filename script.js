document.addEventListener('DOMContentLoaded', () => {
    // Create the falling cursor effect element
    const fallingCursor = document.createElement('div');
    fallingCursor.id = 'fallingCursor';
    document.body.appendChild(fallingCursor);

    // Mouse Gravity Effect when the button is clicked
    const prankButton = document.getElementById('prankButton');
    
    prankButton.addEventListener('click', () => {
        // Reset the falling cursor's position and opacity each time
        fallingCursor.style.top = '0';
        fallingCursor.style.opacity = 1;
        
        // Initially set the position to the center of the screen (horizontally)
        fallingCursor.style.left = `${window.innerWidth / 2 - 10}px`;

        // After the button click, simulate the gravity effect and let the cursor fall
        setTimeout(() => {
            // Start the transition to simulate the gravity fall
            fallingCursor.style.top = '100vh';  // Move it to the bottom of the screen
            fallingCursor.style.opacity = 0;    // Fade out as it falls
        }, 100);  // Delay to sync with button click
    });
});
