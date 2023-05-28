function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros to single digit numbers
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var formattedTime = hours + ":" + minutes + ":" + seconds;

  var clockElement = document.getElementById("clock");
  clockElement.textContent = formattedTime;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Call the function once to initialize the clock
updateClock();
