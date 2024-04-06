// press start button
var gameOngoing = false;
var gameWasOngoing = false;

document.getElementById("endGame", () => {
    gameOngoing = false;
})
var gameCheckIfGlassFellOver = setInterval(checkIfGlassFellOver, 100); // Execute every 1 second

function checkIfGlassFellOver() {
    if (gameOngoing) {
        var yThreshold = 1000; // Define the y-coordinate threshold

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