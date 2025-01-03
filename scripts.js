document.addEventListener("DOMContentLoaded", () => {
    const userPic = document.querySelector(".user-pic");
    const subMenuWrap = document.querySelector(".sub-menu-wrap");

    userPic.addEventListener("click", () => {
        subMenuWrap.classList.toggle("active");
    });

    // Optional: Close submenu when clicking outside
    document.addEventListener("click", (event) => {
        if (!subMenuWrap.contains(event.target) && event.target !== userPic) {
            subMenuWrap.classList.remove("active");
        }
    });
});
// Generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Update the displayed fun lines with random colors
function updateFunLines() {
    const editor = document.getElementById("funLinesEditor");
    const display = document.getElementById("funLinesDisplay");

    // Split the user's input into lines and apply random colors
    display.innerHTML = editor.value.split('\n').map(line => {
        const randomColor = getRandomColor();
        return `<p style="color: ${randomColor};">${line}</p>`;
    }).join('');
}

// Move the "Lunch Time!" text randomly within the container
setInterval(() => {
    const dancingText = document.getElementById("dancingText");
    const container = document.querySelector(".fun-lines-container");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Generate random positions within the container
    const randomX = Math.random() * (containerWidth - 100); // Adjust based on text width
    const randomY = Math.random() * (containerHeight - 50); // Adjust based on text height

    dancingText.style.left = `${randomX}px`;
    dancingText.style.top = `${randomY}px`;
}, 1000);
