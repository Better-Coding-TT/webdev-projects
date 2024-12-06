const form = document.getElementById("countdown-form");
const countdownDisplay = document.getElementById("countdown-display");
const eventTitle = document.getElementById("event-title");
const timeRemaining = document.getElementById("time-remaining");

let countdownInterval;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const eventName = document.getElementById("event-name").value.trim();
  const eventDate = new Date(document.getElementById("event-date").value);

  if (!eventName || isNaN(eventDate)) {
    alert("Please enter a valid event name and date.");
    return;
  }

  startCountdown(eventName, eventDate);
});

function startCountdown(eventName, eventDate) {
  clearInterval(countdownInterval);

  eventTitle.textContent = eventName;
  countdownDisplay.classList.remove("hidden");

  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDiff = eventDate - now;

    if (timeDiff <= 0) {
      clearInterval(countdownInterval);
      timeRemaining.textContent = "The event has started!";
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    timeRemaining.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
