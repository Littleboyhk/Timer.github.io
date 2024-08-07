const countdownElement = document.getElementById('countdown');
const totalTime = 336 * 60 * 60 * 1000; // 336 hours in milliseconds
const startTimeKey = 'countdownStartTime';

function getTimeRemaining(endTime) {
    const now = new Date().getTime();
    const timeRemaining = endTime - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
        timeRemaining,
        formatted: `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
    };
}

function startTimer() {
    let startTime = localStorage.getItem(startTimeKey);
    if (!startTime) {
        startTime = new Date().getTime();
        localStorage.setItem(startTimeKey, startTime);
    }
    const endTime = parseInt(startTime) + totalTime;

    function updateTimer() {
        const { timeRemaining, formatted } = getTimeRemaining(endTime);
        countdownElement.textContent = formatted;

        if (timeRemaining > 0) {
            setTimeout(updateTimer, 1000);
        } else {
            countdownElement.textContent = 'Time is up!';
        }
    }

    updateTimer();
}

startTimer();
