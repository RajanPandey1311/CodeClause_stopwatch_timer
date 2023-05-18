let stopwatchInterval;
let stopwatchTime = 0;
let stopwatchRunning = false;

let timerInterval;
let timerTime = 0;
let timerRunning = false;

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    stopwatchRunning = true;
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  stopwatchTime = 0;
  document.getElementById('stopwatchDisplay').textContent = formatTime(stopwatchTime);
}

function updateStopwatch() {
  stopwatchTime++;
  document.getElementById('stopwatchDisplay').textContent = formatTime(stopwatchTime);
}

function startTimer() {
  if (!timerRunning) {
    const input = document.getElementById('timerInput').value;
    const timeParts = input.split(':');
    const hours = parseInt(timeParts[0]) || 0;
    const minutes = parseInt(timeParts[1]) || 0;
    const seconds = parseInt(timeParts[2]) || 0;

    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert('Please enter a valid time');
      return;
    }

    timerTime = hours * 3600 + minutes * 60 + seconds;

    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerTime = 0;
  document.getElementById('timerInput').value = '';
}

function updateTimer() {
  if (timerTime > 0) {
    timerTime--;
    document.getElementById('timerInput').value = formatTime(timerTime);
  } else {
    stopTimer();
    alert('Timer finished!');
  }
}

function formatTime(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}
