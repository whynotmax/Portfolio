document.addEventListener("DOMContentLoaded", (event) => {

    const cursor = document.querySelector('.cursor');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function updateCursor() {
        // Lerp the cursor position
        cursorX += (mouseX - cursorX) * 0.06;
        cursorY += (mouseY - cursorY) * 0.06;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(updateCursor);
    }

    updateCursor();
});