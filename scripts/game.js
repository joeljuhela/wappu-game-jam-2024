// press start button
var gameOngoing = false;
var gameWasOngoing = false;

document.getElementById("endGame", () => {
    gameOngoing = false;
})
var gameCheckIfGlassFellOver = setInterval(checkIfGlassFellOver, 100); // Execute every 1 second

function checkIfGlassFellOver() {
    if (gameOngoing) {
        var yThreshold = window.innerHeight -200; // Define the y-coordinate threshold

        console.log("glass y: " + glass.position.y)
        console.log("platform y: " +platform.position.y)
    
        if (glass.position.y > yThreshold) {
            console.log("Box is below the threshold.");
            gameWasOngoing = true;
            gameOngoing = false;
            displayGameOver();
        }
    }

}

function displayGameOver() {
    alert("Game Over!");
    window.location.reload();

}

// Initialize score
var scoreValue = 0;
var scoreElement = document.getElementById('score');

// Update score every second
var scoreInterval = setInterval(function() {
    if (gameOngoing) scoreValue++;
    scoreElement.textContent = scoreValue;
}, 1000);
