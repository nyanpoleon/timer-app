var timerInterval;

function startTimer() {

    // document.getElementById("hours").defaultValue = "00";
    // document.getElementById("minutes").defaultValue = "00";
    // document.getElementById("seconds").defaultValue = "00";
    
    var hours = parseInt(document.getElementById("hours").value);
    var minutes = parseInt(document.getElementById("minutes").value);
    var seconds = parseInt(document.getElementById("seconds").value);
    

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert("Please enter a valid number for all fields.");
        return;
    }

    var totalTime = hours * 3600 + minutes * 60 + seconds;

    timerInterval = setInterval(function() {
        var hoursLeft = Math.floor(totalTime / 3600);
        var minutesLeft = Math.floor((totalTime % 3600) / 60);
        var secondsLeft = Math.floor(totalTime % 60);

        var timerString = hoursLeft.toString().padStart(2, '0') + ":" +
            minutesLeft.toString().padStart(2, '0') + ":" +
            secondsLeft.toString().padStart(2, '0');

        document.getElementById("timer").innerHTML = timerString;

        totalTime--;

        if (totalTime < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "Timer Finished!";
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "";
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
}
