/* file: bellTimer date: 2-December-2017
description: Timer rings a bell at the end of a specific interval. */

// Global variables
var menu = document.getElementById("menu");
var start = document.getElementById("startButton");
var message = document.getElementById("message");
var bellSound = document.getElementById("bellSound");
var secondsRemaining, timer;

/** This function is called every second during countdown. */
function showTimeRemaining() {
	if (secondsRemaining <= 0) {
		// Turn off the timer
		clearInterval(timer);
		// Execute the audio file (i.e. a bell ringing).
		bellSound.play();
		message.innerHTML = "Time is up!";
		// Debugging: log the time at which the timer finished.
		var timestamp = new Date();
		console.log("Timer finished at " + timestamp);
		// Display the button when the timer is done.
		start.style.display = "inline";
		return;
	}
	message.innerHTML = ("Time Remaining: " + 
		secondsRemaining + " Seconds");
	secondsRemaining -= 1;
}

/** This function starts the timer when the button is clicked */
function startTimer() {
	// Debugging: log the time at which the button was clicked.
	var timestamp = new Date();
	console.log("Timer started at " + timestamp);
	// Hide the button until the timer is done.
	start.style.display = "none";
	// Get the selected time interval from the menu.
	// By default, the selected option is 1 minute.
	var i = menu.selectedIndex;
	var minutes = document.getElementsByTagName("option")[i].value;
	secondsRemaining = minutes * 60;
	// Debugging: print the selected option to the web console.
	console.log("Selected option: " + minutes + " minutes");
	// Display the time remaining every second.
	timer = setInterval(function(){ showTimeRemaining() }, 1000);
}