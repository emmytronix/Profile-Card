// Function to update the current time in milliseconds
function updateCurrentTime() {
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = Date.now();
}

// Update time immediately when page loads
updateCurrentTime();

// Update time every second (1000 milliseconds)
setInterval(updateCurrentTime, 1000);

