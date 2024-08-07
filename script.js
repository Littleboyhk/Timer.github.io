const countdownElement = document.getElementById('countdown');
const totalTime = 336 * 60 * 60; // 336 hours in seconds
let timeRemaining = totalTime;

function updateTimer() {
    const days = Math.floor(timeRemaining / (60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
    const seconds = Math.floor(timeRemaining % 60);

    countdownElement.textContent = `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;

    if (timeRemaining > 0) {
        timeRemaining--;
        setTimeout(updateTimer, 1000);
    } else {
        countdownElement.textContent = 'Time is up!';
    }
}

updateTimer();
